<template>
<div class="inner-page bg-white">
  <div class="inner-banner mb-5"></div>
  <div class="container position-relative w-100">
    <div class="product-info row position-relative top-y-320 top-md-y-320">
        <div class="col-12 col-md-6">
          <div class="product-pic rounded mb-5"
          :style="{ backgroundImage: 'url(' + product.imageUrl +')' }"></div>
        </div>
        <div class="col-12 col-md-6 mt-md-17">
          <div class="d-flex justify-content-between pt-0 mt-0 pt-md-17 mt-md-17">
            <div class="text-5">
              <div class="text-xs-gray-300 text-md-white font-weight-bold mb-2">
                {{product.title}}
              </div>
              <del class="text-xs-gray-300 text-md-white">
                {{$filters.currency(product.origin_price)}} /
              </del>
              <span class="text-xs-gray-300 text-md-white">
                {{$filters.currency(product.price)}} /
              </span>
              <span class="text-xs-gray-300 text-md-white">
                {{product.unit}}
              </span>
            </div>
            <div>
              <div class="icon-bookmark position-absolute right-10 index-bookmarked"
                @click="$store.dispatch('frontend/fetchBookmark', product)">
                  <span class="material-icons-outlined text-white text-6" role="button">
                    {{ bookmarkId ? 'bookmark' : 'bookmark_border'}}
                  </span>
                </div>
            </div>
          </div>
          <div class="d-flex pt-0 mt-0 pt-md-15 mt-md-15">
            <div class="mr-2 w-100">
              <input type="number" min="1" class="form-control" v-model.number="qty"
              @blur="this.$store.dispatch('frontend/fetchAddToCart',
                            {product_id: product.id,qty: qty})">
            </div>
            <div class="w-100">
              <a href="javascript:;"
              class="btn btn-primary text-white w-100"
              @click="$store.dispatch('frontend/fetchAddToCart',
                  {product_id: product.id, qty: qty})">
                加入購物車
              </a>
            </div>
          </div>
        </div>
        <div class="row pt-17">
        <div class="col-md-1 d-none d-md-block">
          <div class="tool-share d-md-flex flex-column align-items-center">
            <font-awesome-icon :icon="['fab', 'facebook-square']"
              role="button" class="text-black text-6 my-1"/>
            <font-awesome-icon :icon="['fab', 'twitter-square']"
              role="button" class="text-black text-6 my-1"/>
            <font-awesome-icon :icon="['fab', 'instagram-square']"
              role="button" class="text-black text-6 my-1"/>
            <span class="back">
              <p class="mixed mt-4">SHARE</p>
              <span role="button" @click="goBack"
              class="material-icons-outlined text-center text-7 mb-3">reply</span>
            </span>
          </div>
        </div>
        <div class="col-12 col-md-11">
          <span class="badge rounded-pill bg-primary text-3 mr-1 mb-5">{{product.category}}</span>
          <div class="pb-17 mb-17" v-html="product.description"></div>
          <RecommendProducts :recommend-products="recommendProducts" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RecommendProducts from '@/components/RecommendProducts.vue';

export default {
  data() {
    return {
      qty: 1,
    };
  },
  components: {
    RecommendProducts,
  },
  computed: {
    ...mapGetters({
      product: 'frontend/product',
      allPageProducts: 'frontend/allPageProducts',
      recommendProducts: 'frontend/recommendProducts',
      bookmarkLists: 'frontend/bookmarkLists',
    }),
    bookmarkId() {
      const bookmarkIdGroup = [];
      this.bookmarkLists.forEach((item) => bookmarkIdGroup.push(item.id));
      return bookmarkIdGroup.indexOf(this.product.id) > -1;
    },
  },
  async created() {
    await this.$store.dispatch('frontend/fetchgetProductLists');
    await this.$store.dispatch('frontend/fetchAllPageProductLists');
    await this.$store.dispatch('frontend/fetchGetProductInfo', this.$route.params);
    await this.$store.dispatch('frontend/getRecommendProducts', {
      product: this.product,
      productLists: this.allPageProducts,
    });
  },
  mounted() {
    console.log(this.product);
  },
  methods: {
    goBack() {
      window.history.go(-1);
    },
  },
};
</script>

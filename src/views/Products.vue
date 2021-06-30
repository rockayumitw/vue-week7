<template>
  <div class="inner-page products">
    <div class="inner-banner mb-17"></div>
    <div class="container">
      <div class="mb-5 text-center">
        <button class="btn btn-secondary mr-1 text-white">全部商品</button>
        <button class="btn btn-secondary mr-1 text-white">依價格排序</button>
        <div class="btn-group mr-1">
          <button type="button" class="btn btn-secondary dropdown-toggle text-white"
          data-bs-toggle="dropdown" aria-expanded="false">
            商品分類
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <div class="">
      <!--商品列表-->
      <ul class="product-list row">
        <li class="item-product col-6 col-sm-6 col-md-4 col-lg-3"
        v-for="product in productLists" :key="product">
          <div class="card mb-5 border-0">
            <a @click="this.$router.push(`/product/${product.id}`)"
            href="javascript:;" class="card border-0 rounded-0">
            <div class="overflow-hidden">
              <div class="item-product-pic _lg"
            :style="{backgroundImage: 'url('+ product.imageUrl +')'}"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title text-right text-white font-weight-bold">{{product.title}}</h5>
              <p class="card-text text-right text-white">
                <del>{{product.origin_price}}</del> |
                <span>{{product.price}}</span> /
                <span>{{product.unit}}</span>
              </p>
            </div>
            </a>
            <div class="body-footer">
              <a href="javascript:;" class="btn btn-secondary rounded-0 text-white w-100"
              @click.prevent="addToCart(product.id)" :disabled="spinner === product.id">加入購物車</a>
            </div>
          </div>
        </li>
      </ul>
      <!--商品列表-->
      <ul class="pagination justify-content-center">
        <Pagination
          :current-page="pagination.current_page"
          :total-page="pagination.total_pages"
          @change-page="changePage"
        ></Pagination>
      </ul>
    </div>
    </div>
    <loading v-model:active="loading" :can-cancel="true" loader="dots"></loading>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';
import Loading from 'vue-loading-overlay';

export default {
  components: {
    Pagination,
    Loading,
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
      spinner: 'all/spinner',
      product: 'frontend/product',
      pagination: 'frontend/pagination',
      productLists: 'frontend/productLists',
    }),
  },
  async created() {
    await this.$store.dispatch('frontend/fetchgetProductLists');
  },
  mounted() {
    console.log(this.productLists);
  },
  methods: {
    async addToCart(productId, qty = 1) {
      await this.$store.commit('all/SAVE_SPINNER', productId);
      await this.$store.dispatch('frontend/fetchAddToCart', {
        product_id: productId,
        qty,
      });
    },
    async changePage(page) {
      await this.$store.dispatch('frontend/fetchgetProductLists', page);
    },
  },
};
</script>

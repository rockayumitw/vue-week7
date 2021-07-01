<template>
<div class="inner-page bg-white">
  <div class="inner-banner mb-5"></div>
  <div class="container position-relative w-100">
  <div class="product-info row position-relative top-xs-0 top-md-y-320">
      <div class="col-12 col-md-6">
        <div class="product-pic" :style="{ backgroundImage: 'url(' + product.imageUrl +')' }"></div>
      </div>
      <div class="col-12 col-md-6 mt-md-17">
        <div class="d-flex justify-content-between pt-0 mt-0 pt-md-17 mt-md-17">
          <div class="text-5">
            <div class="text-xs-gray-300 text-md-white font-weight-bold mb-2">
              {{product.title}}
            </div>
            <del class="text-xs-gray-300 text-md-white">${{product.origin_price}} /</del>
            <span class="text-xs-gray-300 text-md-white">${{product.price}} /</span>
            <span class="text-xs-gray-300 text-md-white">{{product.unit}}</span>
          </div>
          <div>
            <span class="material-icons text-7 text-secondary">bookmark</span>
            <!-- <span class="material-icons">bookmark_border</span> -->
          </div>
        </div>
        <div class="d-flex pt-0 mt-0 pt-md-15 mt-md-15">
          <div class="mr-2 w-100"><input type="number" min="0" class="form-control"></div>
          <div class="w-100">
            <a href="javascript:;" class="btn btn-primary text-white w-100">加入購物車</a>
          </div>
        </div>
      </div>
      <div class="d-flex pt-17">
      <div class="d-none d-md-flex flex-column tool-share">
        <span class="material-icons-outlined text-center text-7 mb-3">facebook</span>
        <span class="material-icons-outlined text-center text-7 mb-3">facebook</span>
        <span class="material-icons-outlined text-center text-7 mb-3">facebook</span>
        <span class="back">
          <p class="mixed mt-4">SHARE</p>
          <span class="material-icons-outlined text-center text-7 mb-3">reply</span>
        </span>
      </div>
      <div class="pl-0 pl-md-9">
        <span class="badge rounded-pill bg-primary mr-1">測試分類</span>
        <div v-html="product.description"></div>
      </div>
    </div>
  </div>
  </div>
  {{product}}
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      product: 'frontend/product',
    }),
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetProductInfo', this.$route.params);
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

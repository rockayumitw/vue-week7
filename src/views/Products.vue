<template>
  <div class="inner-page products">
    <div class="inner-banner mb-17"></div>
    <h1>產品列表頁面</h1>
    <div class="mb-3">
      <button class="btn btn-primary mr-1">全部商品</button>
      <div class="btn-group mr-1">
        <button type="button" class="btn btn-primary dropdown-toggle"
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
      <button class="btn btn-primary mr-1">依價格分類</button>
    </div>
    <div class="table-box">
      <table class="table align-middle">
        <thead>
          <tr>
            <th width="200">圖片</th>
            <th width="400">商品名稱</th>
            <th width="300">價格</th>
            <th width="200">功能</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in productLists" :key="index">
            <td style="width: 200px">
              <img
                v-if="product.imageUrl != ''"
                width="150"
                :src="product.imageUrl"
                alt=""
              />
            </td>
            <td width="400">
              {{ product.title }}
            </td>
            <td width="300">
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </td>
            <td width="200">
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn js-edit"
                  @click="this.$router.push(`/product/${product.id}`)"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn js-edit"
                  @click="addToCart(product.id)"
                  :disabled="spinner === product.id"
                >
                  <!-- <i class="fas fa-spinner fa-pulse"
                        v-if="addCartSpinner === product.id"></i>
                        <i class="fas fa-cart-plus" v-else></i> -->
                  加入購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="pagination justify-content-center">
        <Pagination
          :current-page="pagination.current_page"
          :total-page="pagination.total_pages"
          @change-page="changePage"
        ></Pagination>
      </ul>
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

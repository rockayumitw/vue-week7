<template>
  <div class="products">
    <h1>產品列表頁面</h1>
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
      loading: 'loading',
      product: 'product',
      pagination: 'pagination',
      productLists: 'productLists',
      spinner: 'spinner',
    }),
  },
  async created() {
    await this.$store.dispatch('getProductLists');
  },
  methods: {
    async addToCart(productId, qty = 1) {
      await this.$store.commit('SAVE_SPINNER', productId);
      await this.$store.dispatch('addToCart', {
        product_id: productId,
        qty,
      });
    },
  },
};
</script>

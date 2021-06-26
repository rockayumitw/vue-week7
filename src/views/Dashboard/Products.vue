<template>
<div>
    <div class="container">
    <h1 class="h3 pt-4 text-white font-weight-bold text-center">Product List</h1>
    <div class="btn-area text-end mt-4">
      <button
        class="btn btn-primary font-weight-bold mr-5"
        data-bs-toggle="modal"
        data-bs-target="#productModal"
      >
        ADD NEW PRODUCT
      </button>
    </div>
    <div class="table-box">
      <table class="table mt-4">
        <thead>
          <tr>
            <th class="text-left" width="150">CATEGORY</th>
            <th>PRODUCTNAME</th>
            <th class="text-right" width="150">ORIGINPRICE</th>
            <th class="text-right" width="150">PRICE</th>
            <th class="text-center" width="120">ENABLE</th>
          </tr>
        </thead>
        <tbody id="productList" class="js-productList">
          <tr v-for="(product, key) in productLists" :key="key">
            <td class="text-left" width="150">{{ product.category }}</td>
            <td>
              <div>{{ product.title }}</div>
              <img
                v-if="product.imageUrl != ''"
                width="150"
                :src="product.imageUrl"
                alt=""
              />
            </td>
            <td class="text-end" width="150">{{ product.origin_price }}</td>
            <td class="text-end" width="150">{{ product.price }}</td>
            <td class="text-center" width="120">
              <span class="text-center" v-if="product.is_enabled">啟用</span>
              <span class="text-center" v-else>未啟用</span>
            </td>
            <td width="120" class="text-center">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm js-edit"
                  @click="getProduct(product)"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                >
                  <!-- <i class="fas fa-edit"></i> -->
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm js-del"
                  data-bs-toggle="modal"
                  data-bs-target="#delModal"
                  @click="getProduct(product)"
                >
                  <!-- <i class="far fa-trash-alt"></i> -->
                  刪除
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
          v-if="productLists.length > 1"
        ></Pagination>
      </ul>
    </div>
  <loading v-model:active="loading" :can-cancel="true" loader="dots"></loading>
  <DelModal :item="tempProduct" @del-item="delProduct" @cancel="cancel"/>
  <ProdcutInfo @change-products="changeProducts" :product="tempProduct"/>
  </div>
</div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';
import Loading from 'vue-loading-overlay';
import DelModal from '@/components/modal/DelModal.vue';
import ProdcutInfo from '@/components/modal/ProductInfo.vue';

export default {
  props: ['token'],
  components: {
    Pagination,
    Loading,
    DelModal,
    ProdcutInfo,
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
      product: 'backend/product',
      pagination: 'backend/pagination',
      productLists: 'backend/productLists',
    }),
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
    },
  },
  data() {
    return {
      tempProduct: {},
      image: '',
    };
  },
  async created() {
    await this.$store.dispatch('backend/fetchgetProductLists', 1);
  },
  mounted() {
  },
  methods: {
    async getProduct(product) {
      await this.$store.commit('backend/SAVE_PRODUCT', product);
    },
    async delProduct(id) {
      this.$store.dispatch('backend/fetchRemoveProduct', id);
    },
    async changeProducts(product) {
      console.log(product);
      await this.$store.dispatch('backend/fetchChangeProduct', product);
    },
    async changePage(page) {
      await this.$store.dispatch('backend/fetchgetProductLists', page);
    },
  },
};
</script>

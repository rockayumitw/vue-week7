<template>
  <div class="container">
    <h1 class="h3 pt-4 text-white font-weight-bold text-center">Product List</h1>
    <div class="btn-area text-end mt-4">
      <button
        class="btn btn-primary font-weight-bold mr-5 d-none"
        @click="getProductID()"
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
          <tr v-for="(product, key) in products" :key="key">
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
            <!-- <td width="120" class="text-center">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm js-edit"
                  @click="getProductID(product)"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-sm js-del"
                  data-bs-toggle="modal"
                  data-bs-target="#delProductModal"
                  @click="getProductID(product)"
                >
                  <i class="far fa-trash-alt"></i>
                </button>
              </div>
            </td> -->
          </tr>
        </tbody>
      </table>
      <ul class="pagination justify-content-center">
        <Pagination
          :current-page="currentPage"
          :total-page="totalPage"
          @get-product-lists="getProductLists"
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
  props: ['token'],
  components: {
    Pagination,
    Loading,
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
    }),
  },
  data() {
    return {
      productId: '',
      productName: '',
      product: {
        category: '',
        content: '',
        description: '',
        id: '',
        imageUrl: '',
        is_enabled: 0,
        num: '',
        origin_price: '',
        price: '',
        title: '',
        unit: '',
      },
      products: [],
      tempProduct: {},
      currentPage: '',
      totalPage: '',
      image: '',
      // isLoading: true,
    };
  },
  created() {
    console.log('後台產品列表');
    this.getProductLists();
  },
  mounted() {
    console.log(this);
  },
  methods: {
    async getProductLists(page = 1) {
      this.$store.commit('SAVE_LOADING', true);
      console.log('取得產品列表');
      // 取得產品列表
      const url = `https://vue3-course-api.hexschool.io/api/traveltime1221/admin/products?page=${page}`;
      await this.axios
        .get(url)
        .then((res) => {
          this.$store.commit('SAVE_LOADING', false);
          if (res.data.success) {
            this.products = res.data.products;
            this.totalPage = res.data.pagination.total_pages;
            this.currentPage = res.data.pagination.current_page;
          } else {
            this.$swal.fire({
              icon: 'error',
              title: res.data.message,
              text: '',
            });
          }
        })
        .catch((err) => console.log(err.response));
    },
  },
};
</script>

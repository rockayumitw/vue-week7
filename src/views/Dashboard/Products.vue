<template>
<InnerBanner :msg="msg" />
<div class="container">
    <div class="btn-area text-end mt-4">
      <button
        class="btn btn-secondary font-weight-bold float-end mb-5 text-white"
        @click="$refs.productModal.modal('show')"
      >
        新增產品
      </button>
    </div>
    <div class="table-box">
      <div class="table">
        <div class="table-thead row text-white w-100 py-3 align-items-center gx-1">
          <div class="col-2">類別</div>
          <div class="col-4 col-md-2">產品名稱</div>
          <div class="col-2 d-none d-md-block">產品圖片</div>
          <div class="col-2 text-right">價格</div>
          <div class="col-2 text-center">狀態</div>
          <div class="col-2 text-center">功能</div>
        </div>
        <div class="table-tr row text-white w-100 align-items-center py-3 align-items-center gx-1"
        v-for="(product, key) in productLists" :key="key">

          <div class="col-2">{{ product.category}}</div>
          <div class="col-4 col-md-2">
            <span class="d-block">{{ product.title }}</span>
            <img class="d-block d-md-none"
              v-if="product.imageUrl != ''"
              width="80"
              :src="product.imageUrl"
              alt=""
            />
          </div>
          <div class="col-2 d-none d-md-block">
            <img
              v-if="product.imageUrl != ''"
              width="150"
              :src="product.imageUrl"
              alt=""
            />
          </div>
          <div class="col-2 text-right">
            <del class="text-1 text-gray-200 p-0 d-block" v-if="product.origin_price">
              {{ $filters.currency(product.origin_price) }}
            </del>
            <span class="p-0">{{ $filters.currency(product.price) }}</span>
          </div>
          <div class="col-2 text-center">
            <span class="material-icons text-success" v-if="product.is_enabled">toggle_on</span>
            <span class="material-icons" v-else>toggle_off</span>
          </div>
          <div class="col-2 text-center">
            <div class="btn-group p-0 p-md-1">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                    @click="getProduct(product), $refs.productModal.modal('show')"
                  >
                    <span class="material-icons text-3">edit</span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#delModal"
                    @click="getProduct(product)"
                  >
                    <span class="material-icons text-3">delete</span>
                  </button>
                </div>
          </div>
        </div>
      </div>
    </div>

    <ul class="pagination justify-content-center">
        <Pagination
          :current-page="pagination.current_page"
          :total-page="pagination.total_pages"
          @change-page="changePage"
          v-if="productLists.length > 1"
        ></Pagination>
      </ul>

  <DelModal :item="tempProduct" @del-item="delProduct" @cancel="cancel"/>
  <ProductModal ref="productModal" @change-products="changeProducts" :product="tempProduct"/>
</div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';
import DelModal from '@/components/modal/DelModal.vue';
import ProductModal from '@/components/modal/ProductModal.vue';
import InnerBanner from '@/components/InnerBanner.vue';

export default {
  props: ['token'],
  components: {
    Pagination,
    DelModal,
    ProductModal,
    InnerBanner,
  },
  computed: {
    ...mapGetters({
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
      msg: '產品管理',
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
      await this.$store.dispatch('backend/fetchRemoveProduct', id);
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

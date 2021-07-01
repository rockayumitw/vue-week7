<template>
<div>
  <InnerBanner :msg="msg" />
  <button class="btn btn-secondary float-end mb-5 text-white"
    @click="$store.dispatch('backend/fetchRemoveAllOrder')" v-if="orderLists.length > 0">
    刪除全部訂單
  </button>
  <div class="table">
      <div class="table-thead row text-white w-100 py-3 align-items-center gx-1">
        <div class="col-2 col-md-2 d-none d-md-block">購買時間</div>
        <div class="col-5 col-md-3 text-left">
          Email
        </div>
        <div class="col-3 col-md-3 text-right d-none">購買款項</div>
        <div class="col-3 col-md-2 text-center">應付金額</div>
        <div class="col-2 col-md-2 text-center">
          是否付款
        </div>
        <div class="col-2 col-md-2 text-center">編輯</div>
      </div>

      <div class="table-tr row text-white w-100 align-items-center py-3 align-items-center gx-1"
      v-for="(item, key) in orderLists" :key="key" :class="{ 'text-secondary': !item.is_paid }">
        <div class="col-2 col-md-2 d-none d-md-block">
          {{ $filters.date(item.create_at) }}
        </div>
        <div class="col-5 col-md-3 text-left">
          <span class="d-inline d-md-none">{{ $filters.date(item.create_at) }}<br/></span>
          <span v-text="item.user.email" v-if="item.user"></span>
        </div>
        <div class="col-3 col-md-3 text-center d-none">
          <ul class="list-unstyled">
            <li class="text-left" v-for="(product, i) in item.products" :key="i">
              <div>{{ product.product.title }}</div>
              數量：{{ product.qty }} / {{ product.product.unit }}
            </li>
          </ul>
        </div>
        <div class="col-3 col-md-2 text-right">
          {{ $filters.currency(item.total) }}
        </div>
        <div class="col-2 col-md-2 text-center d-flex justify-content-center align-items-center">
          <div class="form-check form-switch">
              <input
                class="form-check-input clearfix mx-auto"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
            </div>
        </div>
        <div class="col-2 col-md-2 text-center">
          <div class="btn-group p-0 p-md-1">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#orderProductModal"
                @click="getOrder(item)"
              >
                <span class="material-icons text-3">
                  visibility
                </span>
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delModal"
                @click="getOrder(item)"
              >
                <span class="material-icons text-3">delete</span>
              </button>
            </div>
        </div>
      </div>
    </div>

   <ul class="pagination justify-content-center">
        <Pagination
          :current-page="pagination.current_page"
          :total-page="pagination.total_pages"
          @change-page="changePage"
          v-if="orderLists.length > 1"
        ></Pagination>
      </ul>
  <OrderModal :order="tempOrder"
    ref="orderModal"
    @update-paid="updatePaid"></OrderModal>
  <DelModal :item="tempOrder" @del-item="delProduct" @cancel="cancel" />
</div>
</template>

<script>
import DelModal from '@/components/modal/DelModal.vue';
import OrderModal from '@/components/modal/OrderModal.vue';
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';
import InnerBanner from '@/components/InnerBanner.vue';

export default {
  data() {
    return {
      msg: '訂單管理',
      tempOrder: {},
    };
  },
  components: {
    Pagination,
    DelModal,
    OrderModal,
    InnerBanner,
  },
  computed: {
    ...mapGetters({
      pagination: 'backend/pagination',
      orderLists: 'backend/orderLists',
    }),
  },
  async created() {
    await this.$store.dispatch('backend/fetchGetOrders', 1);
  },
  methods: {
    getOrder(item) {
      this.tempOrder = JSON.parse(JSON.stringify(item));
    },
    async delProduct(id) {
      this.$store.dispatch('backend/fetchRemoveOrder', id);
    },
    async changePage(page) {
      await this.$store.dispatch('backend/fetchgetProductLists', page);
    },
  },
};
</script>

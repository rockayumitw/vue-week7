<template>
  <loading v-model:active="loading" :can-cancel="true" loader="dots"></loading>
  <h1>後台訂單列表</h1>
  <button @click="$store.dispatch('delAllAdminOrder')">刪除全部訂單</button>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orderLists" :key="key">
        <tr v-if="orderLists.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ item.create_at }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#orderProductModal"
                @click="getOrder(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delModal"
                @click="getOrder(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
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
</template>

<script>
import DelModal from '@/components/modal/DelModal.vue';
import OrderModal from '@/components/modal/OrderModal.vue';
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      tempOrder: {},
    };
  },
  components: {
    Pagination,
    DelModal,
    OrderModal,
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      orderLists: 'orderLists',
      pagination: 'pagination',
    }),
  },
  async created() {
    await this.$store.dispatch('getAdminOrders', 1);
  },
  methods: {
    getOrder(item) {
      this.tempOrder = JSON.parse(JSON.stringify(item));
    },
    async delProduct(id) {
      this.$store.dispatch('delAdminOrder', id);
    },
    async changePage(page) {
      await this.$store.dispatch('getAdminProductLists', page);
    },
  },
};
</script>

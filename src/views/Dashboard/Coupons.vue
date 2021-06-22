<template>
  <div>
    <loading :active="loading" :z-index="1060"/>
    <div class="text-end mt-4">
      <button class="btn btn-primary"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#couponModal">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in couponLists" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ item.due_date }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
            class="btn btn-outline-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#couponModal"
            @click="tempCouponObj(item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#delModal"
                    @click="tempCouponObj(item)"
            >刪除</button>
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
          v-if="couponLists.length > 1"
        ></Pagination>
      </ul>
    <CouponModal :coupon="tempCoupon" @update-coupon="updateCoupon"/>
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CouponModal from '@/components/modal/CouponModal.vue';
import DelModal from '@/components/modal/DelModal.vue';

export default {
  components: { CouponModal, DelModal },
  data() {
    return {
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      couponLists: 'couponLists',
      pagination: 'pagination',
    }),
  },
  async created() {
    await this.$store.dispatch('getAdminCoupons');
  },
  methods: {
    async tempCouponObj(coupon) {
      this.tempCoupon = JSON.parse(JSON.stringify(coupon));
    },
    async updateCoupon(tempCoupon) {
      await this.$store.dispatch('changeAdminCoupons', tempCoupon);
    },
    async delCoupon(coupon) {
      await this.$store.dispatch('delAdminSingleCoupon', coupon.id);
    },
  },
};
</script>

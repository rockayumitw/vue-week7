<template>
<InnerBanner :msg="msg" />
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-secondary text-white mb-2"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#couponModal">
        建立新的優惠券
      </button>
    </div>
    <div class="table">
      <div class="table-thead row text-white w-100 py-3 align-items-center gx-1">
        <div class="col-3">名稱</div>
        <div class="col-2 text-center">
          折扣
        </div>
        <div class="col-3 text-center">到期日</div>
        <div class="col-2 text-center">
          狀態
        </div>
        <div class="col-2 text-center">編輯</div>
      </div>
      <div class="table-tr row text-white w-100 align-items-center py-3 align-items-center gx-1"
      v-for="(item, key) in couponLists" :key="key">
        <div class="col-3">{{ item.title }}</div>
        <div class="col-2 text-center">{{ item.percent }}%</div>
        <div class="col-3 text-center">{{ $filters.date(item.due_date) }}</div>
        <div class="col-2 text-center">
          <span v-if="item.is_enabled === 1" class="text-success">
            <span class="material-icons">toggle_on</span>
          </span>
          <span v-else class="text-muted">
            <span class="material-icons">toggle_on</span>
          </span>
        </div>
        <div class="col-2 text-center">
          <div class="btn-group p-0 p-md-1">
              <button
              class="btn btn-outline-primary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#couponModal"
              @click="tempCouponObj(item)"
              >
                <span class="material-icons text-3">edit</span>
              </button>
              <button class="btn btn-outline-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#delModal"
                      @click="tempCouponObj(item)"
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
import InnerBanner from '@/components/InnerBanner.vue';

export default {
  components: {
    CouponModal,
    DelModal,
    InnerBanner,
  },
  data() {
    return {
      msg: '優惠券管理',
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
      couponLists: 'backend/couponLists',
      pagination: 'backend/pagination',
    }),
  },
  async created() {
    await this.$store.dispatch('backend/fetchGetCoupons');
  },
  methods: {
    async tempCouponObj(coupon) {
      this.tempCoupon = JSON.parse(JSON.stringify(coupon));
    },
    async updateCoupon(tempCoupon) {
      await this.$store.dispatch('backend/fetchChangeCoupons', tempCoupon);
    },
    async delCoupon(coupon) {
      await this.$store.dispatch('backend/fetchRemoveSingleCoupon', coupon);
    },
  },
};
</script>

<template>
  <div
  class="modal fade" id="couponModal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalLabel" aria-hidden="true"
       ref="couponModal" data-bs-target="#couponModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h4 class="modal-title font-weight-bold" id="exampleModalLabel">
            <span v-if="tempCoupon.id">編輯優惠卷</span>
            <span v-else>新增優惠卷</span>
          </h4>
          <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!--表單-->
          <form class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="title">
                <small class="text-danger">*</small>
                標題
              </label>
              <input type="text" class="form-control"
              id="title"
              v-model="tempCoupon.title"
              placeholder="請輸入標題" required>
          </div>
          <div class="mb-3">
            <label for="coupon_code">
              <small class="text-danger">*</small>
              優惠碼
            </label>
            <input type="text" class="form-control" id="coupon_code"
            v-model="tempCoupon.code" placeholder="請輸入優惠碼" required>
          </div>
          <div class="mb-3">
            <label for="due_date">
              <small class="text-danger">*</small>
              到期日
            </label>
            <input type="date" class="form-control" id="due_date" v-model="due_date" required>
          </div>
          <div class="mb-3">
            <label for="price">
              <small class="text-danger">*</small>
              折扣百分比
            </label>
            <input type="number" class="form-control" id="price"
            min="0" v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比" required>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled" id="is_enabled" required>
              <label class="form-check-label" for="is_enabled">
                <small class="text-danger">*</small>
                是否啟用
              </label>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-gray-100 mr-2"
            data-bs-dismiss="modal">取消</button>
            <!--data-bs-dismiss="modal"-->
            <button type="submit" class="btn btn-secondary text-white"
              @click="updateCoupon">確定
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      tempCoupon: {},
      due_date: '',
      couponModal: '',
    };
  },
  watch: {
    coupon() {
      this.tempCoupon = JSON.parse(JSON.stringify(this.coupon));
    },
    due_date() {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    },
    // coupon() {
    //   this.tempCoupon = this.coupon;
    //   // 將時間格式改為 YYYY-MM-DD
    //   const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
    //     .toISOString().split('T');
    //   [this.due_date] = dateAndTime;
    // },
  },
  mounted() {
    this.couponModal = new Modal(this.$refs.couponModal, {
      keyboard: false,
      backdrop: 'static',
    });
    this.$refs.couponModal.addEventListener('hidden.bs.modal', () => {
      this.init();
    });
  },
  methods: {
    init() {
      this.tempCoupon = {};
      this.due_date = 0;
      const forms = document.querySelector('.needs-validation');
      forms.classList.remove('was-validated');
    },
    modal(state) {
      switch (state) {
        case 'show':
          this.couponModal.show();
          break;
        case 'hide':
          this.couponModal.hide();
          break;
        default:
      }
    },
    updateCoupon() {
      // 判斷輸入
      let check = false; // 未通過
      const forms = document.querySelectorAll('.needs-validation');
      Array.prototype.slice.call(forms).forEach((form) => {
        form.addEventListener('submit', (event) => {
          console.log(form.checkValidity());
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            check = false;
          } else {
            check = true;
          }
          form.classList.add('was-validated');
        }, false);
      });
      // 非同步
      setTimeout(() => {
        if (check) {
          this.modal('hide');
          this.$emit('update-coupon', this.tempCoupon);
          this.init();
        }
      });
    },
  },

};
</script>

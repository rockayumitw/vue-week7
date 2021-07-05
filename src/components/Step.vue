<template>
  <div class="mx-auto w-90 mb-10">
    <div class="row gx-2">
      <div class="col-3 text-center text-white">
        <div class="rounded p-2 text-2 text-md-4"
        :class="step >= 1 ? 'bg-secondary' : 'bg-gray-200'">
          STEP.1 <br />
          訂單明細
        </div>
      </div>
      <div class="col-3 text-center text-white">
        <div class="rounded p-2 text-2 text-md-4"
        :class="step >= 2 ? 'bg-secondary' : 'bg-gray-200'">
          STEP.2<br />
          訂購資料
        </div>
      </div>
      <div class="col-3 text-center text-white">
        <div class="rounded p-2 text-2 text-md-4"
        :class="step >= 3 ? 'bg-secondary' : 'bg-gray-200'">
          STEP.3<br />
          付款資訊
        </div>
      </div>
      <div class="col-3 text-center text-white">
        <div class="rounded p-2 text-2 text-md-4"
                :class="orderIsPaid == true ? 'bg-secondary' : 'bg-gray-200'">
          STEP.4<br />
          完成訂單
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['step', 'order'],
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    orderIsPaid() {
      if (this.order !== undefined) {
        return this.order.is_paid;
      }
      return false;
    },
  },
};
</script>

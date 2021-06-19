<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header text-black text-center">
          <h5 id="delProductModalLabel" class="modal-title font-weight-bold">
            <span>刪除產品</span>
          </h5>
        </div>
        <div class="modal-body text-center">
          <i class="fas fa-exclamation-triangle text-danger"></i><br /><br />
          是否刪除
          <strong class="text-danger">{{ productName }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click="$emit('cancel')"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('removeProduct')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productName'],
};
</script>

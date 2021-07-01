<template>
  <div
    id="delModal"
    ref="delModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header text-black text-center">
          <h4 id="delModalLabel" class="modal-title font-weight-bold mx-auto">
            <span><b>刪除提示</b></span>
          </h4>
        </div>
        <div class="modal-body text-center">
          <span class="material-icons text-danger text-7">
            warning
          </span><br/><br/>
          是否刪除
          <strong class="text-danger">{{ item.title }}</strong> (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-gray-100"
            data-bs-dismiss="modal"
            @click="$emit('cancel')"
          >
            取消
          </button>
          <button type="button"
          class="btn btn-danger text-white" data-bs-dismiss="modal"
          data-bs-toggle="modal"
          data-bs-target="#delModal"
          @click="$emit('delItem', item.id)">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['item'],
};
</script>

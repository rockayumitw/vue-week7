<template>
    <div class="mx-auto w-80 mb-10">
      <div class="row">
        <div class="col-3 text-center text-white">
          <div class="bg-secondary rounded p-2">
            STEP.1 <br/>
            確認購物清單
          </div>
        </div>
        <div class="col-3 text-center text-white">
          <div class="bg-gray-200 rounded p-2">
            STEP.2<br/>
            填寫訂購資料
          </div>
        </div>
        <div class="col-3 text-center text-white">
          <div class="bg-gray-200 rounded p-2">
            STEP.3<br/>
            付款
          </div>
        </div>
        <div class="col-3 text-center text-white">
          <div class="bg-gray-200 rounded p-2">
            STEP.4<br/>
            完成訂單
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['active'],
};
</script>

<template>
  <div class="inner-banner mb-17">
    <div
      class="text-white h-100 text-7 font-weight-bold
      d-flex justify-content-center align-items-center
      position-relative index-carousel"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  mounted() {
    console.log(this.msg);
  },
};
</script>

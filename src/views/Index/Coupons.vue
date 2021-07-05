<template>
<div class="inner-page bg-white">
    <InnerBanner :msg="msg" />
    <div class="text-center d-flex flex-column py-17">
        <span class="material-icons-outlined text-7">
            construction
        </span>
        <p class="text-center text-black text-7 py-17"> 施工中，盡情等待！ :D</p>
    </div>
</div>
</template>

<script>
import InnerBanner from '@/components/InnerBanner.vue';

export default {
  components: {
    InnerBanner,
  },
  data() {
    return {
      msg: '優惠活動',
    };
  },
};
</script>

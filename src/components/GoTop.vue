<template>
    <div class="goTop mx-auto index-gotop" role="button" @click="gotop()">
        <span
        class="material-icons-outlined
        text-white position-absolute top-5 left-y-12">expand_less</span>
    </div>
</template>

<script>

export default {
  data() {
  },
  methods: {
    gotop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

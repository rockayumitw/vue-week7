<template>
    <div>
        產品單一頁面
        {{product}}
        <loading v-model:active="loading" :can-cancel="true" loader="dots"></loading>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapGetters({
      loading: 'loading',
      product: 'product',
    }),
  },
  async created() {
    await this.$store.dispatch('getProductInfo', this.$route.params);
  },
};
</script>

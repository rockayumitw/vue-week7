<template>
    <Header />
    <loading
    v-model:active="loading"
    :can-cancel="true"
    loader="dots"></loading>
      <router-view/>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Loading from 'vue-loading-overlay';
import { mapGetters } from 'vuex';

export default {
  components: {
    Header,
    Footer,
    Loading,
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
    }),
  },
};
</script>

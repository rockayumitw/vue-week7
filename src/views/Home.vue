<template>
    <Header />
    <loading v-model:active="loading" loader="dots"
    :can-cancel="true"></loading>
      <router-view/>
    <GoTop/>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import GoTop from '@/components/GoTop.vue';
import Loading from 'vue-loading-overlay';
import { mapGetters } from 'vuex';

export default {
  components: {
    Header,
    Footer,
    GoTop,
    Loading,
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
    }),
  },
};
</script>

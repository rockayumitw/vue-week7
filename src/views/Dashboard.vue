<template>
  <Header />
  <loading v-model:active="loading" loader="dots"
    :can-cancel="true"></loading>
  <div class="inner-page">
    <router-view v-if="authCheck"></router-view>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/backend/Header.vue';
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
  data() {
    return {
      authCheck: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.axios.defaults.headers.common.Authorization = `${token}`;
        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.axios.post(api, token).then((res) => {
          if (res.data.success) {
            console.log('您已成功登入');
            this.authCheck = true;
            console.log(this.authCheck);
          } else {
            alert(res.data.message);
            this.$router.push('/login');
          }
        });
      } else {
        alert('您尚未登入。');
        this.$router.push('/login');
      }
    },
    signOut() {
      document.cookie = 'token=;expires=;';
      console.log('token 已清除');
      console.log('已經登出');
      this.$router.push('/login');
    },
  },
};
</script>

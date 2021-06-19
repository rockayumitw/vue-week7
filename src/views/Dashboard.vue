<template>
    <div>
    <h1>後台頁面</h1>
    <div id="nav">
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin/products">後台產品列表</router-link> |
      <router-link to="/admin/orders">後台訂單</router-link> |
      <a href="#" @click.prevent="signout">登出</a>
    </div>
    <router-view v-if="authCheck"></router-view>
  </div>
</template>

<script>

export default {
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

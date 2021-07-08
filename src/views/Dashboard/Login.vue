<template>
  <div class="inner-page mb-17 pb-0 pb-sm-17 pb-md-0">
    <div class="container mt-5 mb-17">
      <div class="row justify-content-center align-items-center py-17 my-17 py-md-10">
        <div class="col-md-6 d-none d-md-block" height="800">
          <img class="img-fluid rounded-sm" src="./image/login.jpg" alt="登入">
        </div>
        <div class="col-md-6">
          <form class="justify-content-center mt-0 mt-md-17 mt-lg-0" @submit.prevent="login">
            <div class="">
              <h4 class="h3 mb-15 font-weight-normal text-white">
                <img style="width: 250px" class="text-white img-fluid logo" :src="logo">
              </h4>
              <h4 class="h3 mb-3 font-weight-normal text-white">
                Sign Up
              </h4>
              <div class="mb-2">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control"
                      placeholder="Email address" v-model="user.username" required autofocus>
              </div>
              <div class="mb-2">
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword"
                class="form-control" v-model="user.password" placeholder="Password" required></div>
              <div class="text-end mt-4">
                <button class="btn btn-lg btn-secondary text-white" type="submit">
                  登入
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      logo: './image/logo.svg',
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      this.$store.commit('all/SAVE_LOADING', true);
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      await this.axios.post(api, this.user).then((res) => {
        this.$store.commit('all/SAVE_LOADING', false);
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `token=${token};expires=${new Date(expired)};`;
          this.$router.push('/admin/products');
        } else {
          alert(res.data.message);
        }
      });
    },
  },
};
</script>

<style scoped>
.logo{
    width: 250px;
    background: #2d2d2d;
    border-radius: 5px;
    padding: 8px;
}
</style>

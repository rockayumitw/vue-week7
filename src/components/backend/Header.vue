<template>
<nav ref="header" class="header navbar navbar-expand-lg navbar-light pt-0 pt-lg-1 pb-0 index-header"
:class="{'unpinned': scrolled,'sticky':isActive}">
  <div class="container d-flex d-lg-block p-0">
    <div class="navbar-content d-flex justify-content-between align-items-center">
      <div class="d-none d-lg-flex align-items-end">
        <!-- <span class="material-icons-outlined">facebook</span> -->
      </div>
      <div class="logo" style="height: 60px;">
        <router-link class="navbar-brand mr-0 position-relative
        position-lg-absolute top-0 text-5 text-white font-weight-bold"
        to="/home">
          <img class="text-white img-fluid w-100" :src="logo">
        </router-link>
      </div>
      <div class="navbar-tool">
        <div class="text-right">
          <span class="material-icons-outlined text-5 px-2">public</span>
        </div>
      </div>
    </div>
    <button class="navbar-toggler hamburger rounded-0" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <!-- <span class="navbar-toggler-icon"></span> -->
      <i></i>
      <i></i>
      <i></i>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item text-center">
          <router-link class="nav-link active text-5 text-lg-4"
          to="/home" @click="close">
            首頁
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4"
          to="/admin/products" @click="close">
            產品管理
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/admin/orders" @click="close">
            訂單管理
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/admin/coupons" @click="close">
            優惠券管理
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/admin/news" @click="close">
            文章管理
          </router-link>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link text-5 text-lg-4" href="javascript:;" @click="close"
          @click.prevent="signOut">
            登出
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      stickyPos: 500,
      limitPos: 1000,
      scrolled: false,
      lastPos: 0,
      sm_width: 767,
      isActive: false,
      qty: 1,
      logo: './image/logo.svg',
    };
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
      cartLists: 'frontend/cartLists',
      cartAmount: 'frontend/cartAmount',
      spinner: 'all/spinner',
    }),
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetCartLists');
  },
  mounted() {
    window.addEventListener('scroll', this.scrollAnimation);
  },
  methods: {
    close() {
      if (window.innerWidth < 992) {
        $('.hamburger').click();
      }
    },
    scrollAnimation() {
      this.scrollY = window.scrollY;
      if (window.scrollY > 100) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
    async delSingleProduct(id) {
      await this.$store.commit('all/SAVE_SPINNER', id);
      await this.$store.dispatch('frontend/fetchRemoveSingleProduct', id);
    },
  },
  destory() {
    window.addEventListener('scroll', this.ScrollAnimation);
  },
};
</script>

<template>
<nav ref="header" class="header navbar navbar-expand-lg navbar-light pt-1 pb-0 index-header"
:class="{'unpinned': scrolled,'sticky':isActive}">
  <div class="container d-flex d-lg-block p-0">
    <div class="navbar-content d-flex justify-content-between align-items-center">
      <div class="d-none d-lg-flex align-items-end">
        <span class="material-icons-outlined">facebook</span>
      </div>
      <div class="">
        <a class="navbar-brand mr-0 position-relative
        position-lg-absolute top-lg-20 text-5 text-white font-weight-bold"
        href="#">LOGO</a>
      </div>
      <div class="navbar-tool">
        <div class="text-right">
          <span class="material-icons-outlined text-5 px-2">public</span>
        </div>
        <div>
          <router-link to="/login">
            <span class="material-icons text-5 px-2 cursor-pointer">person</span>
          </router-link>
          <router-link to="/cart">
            <span class="position-relative" role="button">
              <span
              class="unread-message position-absolute top-y-5 left-30
              translate-middle badge rounded-pill bg-danger text-1">
                9
                <span class="visually-hidden">unread messages</span>
              </span>
              <span class="material-icons text-5 px-2">
                shopping_cart
              </span>
            </span>
          </router-link>
          <span class="material-icons-outlined text-5 px-2" role="button">bookmark</span>
        </div>
      </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active text-4" aria-current="page" to="/">
            首頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-4" to="/products">
            商品列表頁
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            前台購物車列表頁<span class="material-icons">face</span>
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link text-4" to="/News">
            最新消息
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/admin/products">
            後台購物車列表頁
            <i class="bi bi-arrow-bar-left"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/News">
            後台文章列表 {{ message }}
            <i class="bi bi-arrow-bar-left"></i>
          </router-link>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  data() {
    return {
      stickyPos: 500,
      limitPos: 1000,
      scrolled: false,
      lastPos: 0,
      sm_width: 767,
      isActive: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrollAnimation);
  },
  methods: {
    scrollAnimation() {
      console.log('捲動');
      this.scrollY = window.scrollY;
      console.log(this.$refs.header.offsetTop);
      console.log(window.scrollY);

      if (window.scrollY > 100) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
      // if (this.lastPos < window.scrollY && this.stickyPos < window.scrollY) {
      //   this.isActive = true;
      // }
      // if (this.lastPos < window.scrollY && this.limitPos < window.scrollY) {
      //   if (window.innerWidth < 768) {
      //     return false;
      //   }
      //   this.scrolled = true;
      // }
      // if (this.lastPos > window.scrollY) {
      //   this.scrolled = false;
      // }
      // this.lastPos = window.scrollY;
    },
  },
  created() {
  },
  destory() {
    window.addEventListener('scroll', this.ScrollAnimation);
  },
};
</script>

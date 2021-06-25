<template>
<nav class="header navbar navbar-expand-lg navbar-light bg-light"
:class="{'unpinned': scrolled,'sticky':isActive}">
  <div class="container d-flex d-lg-block">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <span class="material-icons-outlined">facebook</span>
      </div>
      <div class="mx-auto">
        <a class="navbar-brand" href="#">LOGO</a>
      </div>
      <div>
        <div class="text-right">
          <span class="material-icons-outlined">public</span>
        </div>
        <div>
          <span class="material-icons-outlined">perm_identity</span>
          <span class="material-icons-outlined">shopping_cart</span>
          <span class="material-icons-outlined">bookmark</span>
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
          <router-link class="nav-link active" aria-current="page" to="/">
            首頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">
            商品列表頁
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            前台購物車列表頁<span class="material-icons">face</span>
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/News">
            最新消息
            <i class="bi bi-arrow-bar-left"></i>
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
  methods: {
    scrollAnimation() {
      console.log('捲動');
      this.scrollY = window.scrollY;

      if (window.scrollY > 100) {
        this.isActive = true;
      }
      // if (window.scrollY < 100) {
      //   this.isActive = false;
      // }
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
    window.addEventListener('scroll', this.ScrollAnimation);
  },
  destory() {
    window.addEventListener('scroll', this.ScrollAnimation);
  },
};
</script>

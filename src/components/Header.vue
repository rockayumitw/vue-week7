<template>
<nav ref="header" class="header navbar navbar-expand-lg navbar-light pt-0 pt-lg-1 pb-0 index-header"
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
            <span class="cart position-relative" role="button">
              <span
              class="unread-message position-absolute top-y-5 left-30
              translate-middle badge rounded-pill bg-danger text-1">
                9
                <span class="visually-hidden">unread messages</span>
              </span>
            <router-link to="/cart">
              <span class="material-icons text-5 px-2">
                shopping_cart
              </span>
            </router-link>
            <!--購物車清單-->
            <div class="cart-list bg-white rounded p-4 position-absolute">
              <ul class="item-cart-list">
                <li class="d-flex align-items-center p-2 rounded" v-for="item in 10" :key="item">
                  <div class="item-cart-pic rounded mr-4"></div>
                  <div>
                    <div class="text-4">Faux Sued Ankle Boots</div>
                    <div class="text-4 text-secondary">$49.99</div>
                    <div>
                      <!-- <button class="btn btn-primary">-</button> -->
                      <input type="number" min="0" class="form-control border-0 w-80">
                      <!-- <button class="btn btn-primary">+</button> -->
                    </div>
                  </div>
                  <div>
                    <span class="material-icons text-danger text-6">
                      delete_forever
                      </span>
                  </div>
                </li>
              </ul>
              <hr class="text-gray-100"/>
              <div class="d-flex justify-content-between mb-3">
                <span class="text-secondary">總額</span>
                <span class="text-secondary">$700</span>
              </div>
              <div>
                <a href="/" class="btn btn-primary w-100 text-white">結帳去</a>
              </div>
            </div>
            <!--購物車清單-->
            </span>
          <span class="material-icons-outlined text-5 px-2" role="button">bookmark</span>
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
          <router-link class="nav-link active text-4" aria-current="page" to="/">
            首頁
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-4" to="/products">
            商品列表頁
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            前台購物車列表頁<span class="material-icons">face</span>
          </router-link>
        </li> -->
        <li class="nav-item text-center">
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
      this.scrollY = window.scrollY;
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

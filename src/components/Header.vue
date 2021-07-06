<template>
<nav ref="header" class="header navbar navbar-expand-lg navbar-light pt-0 pt-lg-1 pb-0 index-header"
:class="{'unpinned': scrolled,'sticky':isActive}">
  <div class="container d-flex d-lg-block p-0">
    <div class="navbar-content d-flex justify-content-between align-items-center">
      <div class="d-none d-lg-flex align-items-end">
        <Social/>
      </div>
      <div class="logo">
        <router-link class="navbar-brand mr-0 position-relative
        position-lg-absolute top-0 text-5 text-white font-weight-bold"
        to="/home">
          <img class="text-white img-fluid w-100" :src="logo">
        </router-link>
      </div>
      <div class="navbar-tool">
        <div class="tool-top text-right">
          <span class="material-icons-outlined text-5 px-2">public</span>
        </div>
        <div class="tool-bottom">
          <router-link to="/login">
            <span class="material-icons text-5 px-2 cursor-pointer">person</span>
          </router-link>
          <!--購物車-->
            <span class="cart position-relative" role="button">
              <span
              class="unread-message position-absolute top-y-5 left-30
              translate-middle badge rounded-pill bg-danger text-1" v-if="cartAmount > 0">
                {{cartAmount}}
                <span class="visually-hidden">unread messages</span>
              </span>
            <router-link to="/cart">
              <span class="material-icons text-5 px-2">
                shopping_cart
              </span>
            </router-link>
            <!--購物車清單-->
            <CartLists :cart-amount="cartAmount" :cart-lists="cartLists"
            @del-single-product="delSingleProduct"/>
            <!--購物車清單-->
          </span>
          <!--書籤-->
          <span class="bookmark-card position-relative">
            <span class="material-icons-outlined text-5 px-2" role="button">bookmark</span>
            <div class="bookmark-card">
              <FavoriateLists :bookmark-lists="bookmarkLists"/>
            </div>
          </span>
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
          aria-current="page" to="/home"  @click="close">
            首頁
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/products"  @click="close">
            商品列表頁
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/News" @click="close">
            最新消息
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/About" @click="close">
            關於我們
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/QA" @click="close">
            Q&A
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-5 text-lg-4" to="/Coupons" @click="close">
            優惠活動
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';
import Social from '@/components/Social.vue';
import CartLists from '@/components/CartLists.vue';
import FavoriateLists from '@/components/FavoritateLists.vue';

export default {
  components: {
    Social,
    CartLists,
    FavoriateLists,
  },
  data() {
    return {
      logo: './image/logo.svg',
      stickyPos: 500,
      limitPos: 1000,
      scrolled: false,
      lastPos: 0,
      sm_width: 767,
      isActive: false,
      qty: 1,
    };
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
      cartLists: 'frontend/cartLists',
      cartAmount: 'frontend/cartAmount',
      spinner: 'all/spinner',
      bookmarkLists: 'frontend/bookmarkLists',
    }),
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetCartLists');
  },
  mounted() {
    console.log(this.bookmarkLists);
    window.addEventListener('scroll', this.scrollAnimation);
  },
  methods: {
    close() {
      $('.hamburger').click();
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

<template>
<nav ref="header" class="header navbar navbar-expand-lg navbar-light pt-0 pt-lg-1 pb-0 index-header"
:class="{'unpinned': scrolled,'sticky':isActive}">
  <div class="container d-flex d-lg-block p-0">
    <div class="navbar-content d-flex justify-content-between align-items-center">
      <div class="d-none d-lg-flex align-items-end">
        <span class="material-icons-outlined">facebook</span>
      </div>
      <div class="logo">
        <router-link class="navbar-brand mr-0 position-relative
        position-lg-absolute top-lg-20 text-5 text-white font-weight-bold"
        to="/home">LOGO</router-link>
      </div>
      <div class="navbar-tool">
        <div class="text-right">
          <span class="material-icons-outlined text-5 px-2">public</span>
        </div>
        <div class="">
          <!-- <router-link to="/login">
            <span class="material-icons text-5 px-2 cursor-pointer">person</span>
          </router-link>
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
            <div class="cart-list bg-white rounded p-4 position-absolute">
              <div v-if="cartAmount > 0">
                <ul class="item-cart-list">
                  <li class="d-flex align-items-center mb-2 p-2 rounded"
                  v-for="item in cartLists.carts" :key="item">
                    <div class="item-cart-pic rounded mr-4"
                    :style="{backgroundImage: 'url('+ item.product.imageUrl +')'}"></div>
                    <div>
                      <div class="text-4">{{item.product.title}}</div>
                      <div class="text-4 text-secondary">
                        {{$filters.currency(item.product.price)}}
                      </div>
                      <div>
                        <input
                            v-model.number="item.qty"
                            min="1"
                            type="number"
                            class="form-control"
                            @blur="this.$store.dispatch('frontend/fetchAddToCart',
                            {product_id: item.product.id,qty: item.qty})"
                            :disabled="spinner === item.product.id"
                          />
                      </div>
                    </div>
                    <div>
                      <span class="material-icons text-danger text-6"
                      role="button" @click="delSingleProduct(item.id)">
                        delete_forever
                      </span>
                    </div>
                  </li>
                </ul>
                <hr class="text-gray-100"/>
                <div class="d-flex justify-content-between mb-3">
                  <span class="text-secondary">總額</span>
                  <span class="text-secondary">{{$filters.currency(cartLists.final_total)}}</span>
                </div>
                <div>
                  <router-link to="/cart" href="javascript:;"
                  class="btn btn-primary w-100 text-white">
                    結帳去
                  </router-link>
                </div>
              </div>
              <div class="text-center" v-else>
                <div class="p-5">
                  <p>您的購物車是空的</p>
                  <router-link to="/products" class="btn btn-primary text-white">
                    前往瀏覽商品
                  </router-link>
                </div>
              </div>
            </div>
          </span>
          <span class="material-icons-outlined text-5 px-2" role="button">bookmark</span> -->
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
          <router-link class="nav-link active text-4" aria-current="page" to="/home">
            首頁
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-4" to="/admin/products">
            後台產品列表
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-4" to="/admin/orders">
            後台訂單
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-4" to="/admin/coupons">
            優惠券列表
          </router-link>
        </li>
        <li class="nav-item text-center">
          <router-link class="nav-link text-4" to="/admin/news">
            文章列表
          </router-link>
        </li>
        <li class="nav-item text-center">
          <a class="nav-link text-4" href="/" @click.prevent="signOut">
            登出
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
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

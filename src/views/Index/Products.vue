<template>
  <div class="inner-page products">
    <InnerBanner :msg="msg" />
    <div class="container">
      <div class="mb-5 text-center d-flex">
        <button class="btn btn-secondary mr-1 text-white d-flex align-items-center"
        @click="priceSort(selectSort)">
          <span>依價格排序</span>
          <span class="material-icons-outlined text-3" v-if="selectSort === 'none'">
            unfold_more
          </span>
          <span class="material-icons-outlined text-3" v-if="selectSort === 'down'">
            expand_less
          </span>
          <span class="material-icons-outlined text-3" v-if="selectSort === 'up'">
            expand_more
          </span>
        </button>
        <select class="form-select btn btn-secondary w-40 text-white"
        aria-label="分類" v-model="selected">
          <option value=0 selected>全部</option>
          <option value=1>冰淇淋</option>
          <option value=2>蛋糕</option>
          <option value=3>派</option>
        </select>
      </div>
      <div class="">
      <!--商品列表-->
      <ul class="product-list row">
        <li class="item-product col-6 col-sm-6 col-md-4 col-lg-3"
        v-for="product in newLists" :key="product"
        data-aos="fade-up" data-duration="1000">
          <BuyProductCard :product="product" @add-to-cart="addToCart"/>
        </li>
      </ul>
      <!--商品列表-->
      <ul class="pagination justify-content-center">
         <Pagination
          :current-page="currentPage"
          :total-page="totalPage"
          @change-page="changePage"
        ></Pagination>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';
import InnerBanner from '@/components/InnerBanner.vue';
import BuyProductCard from '@/components/BuyProductCard.vue';
import AOS from 'aos';

export default {
  components: {
    Pagination,
    InnerBanner,
    BuyProductCard,
  },
  data() {
    return {
      msg: '商品列表',
      selected: '0',
      products: [],
      currentPage: 1,
      perPage: 12,
      selectSort: 'none',
    };
  },
  computed: {
    ...mapGetters({
      spinner: 'all/spinner',
      product: 'frontend/product',
      pagination: 'frontend/pagination',
      productLists: 'frontend/productLists',
      allPageProducts: 'frontend/allPageProducts',
    }),
    totalPage() {
      console.log(this.products.length);
      return Math.round(this.products.length / this.perPage);
    },
    newLists() {
      return this.products.slice(
        (this.currentPage - 1) * this.perPage, this.currentPage * this.perPage,
      );
    },
  },
  watch: {
    selected(newValue) {
      if (newValue) {
        this.init();
        let select = this.selected;
        switch (select) {
          case '0':
            select = '全部';
            break;
          case '1':
            select = '冰淇淋';
            break;
          case '2':
            select = '蛋糕';
            break;
          case '3':
            select = '派';
            break;
          default:
        }
        if (select !== '全部') {
          this.products = this.products.filter((item) => item.category === select);
        }
        this.changePage(this.currentPage);
      }
    },
  },
  async created() {
    await this.$store.dispatch('frontend/fetchgetProductLists');
    await this.$store.dispatch('frontend/fetchAllPageProductLists');
    this.products = this.allPageProducts;
    if (this.$route.query.categoryId !== undefined) {
      this.selected = this.$route.query.categoryId;
    } else {
      this.selected = this.$route.query.categoryId;
    }
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
  methods: {
    init() {
      this.selectSort = 'none';
      this.currentPage = 1;
      this.products = this.allPageProducts;
    },
    priceSort(value) {
      let sortValue = value;
      if (sortValue === 'none' || sortValue === 'down') {
        sortValue = 'up';
        this.selectSort = 'up';
        console.log(this.selectSort);
        let arySort = this.newLists;
        arySort = arySort.sort((a, b) => (a.price > b.price ? 1 : -1));
        this.newLists = arySort;
      } else if (sortValue === 'up') {
        this.selectSort = 'down';
        let arySort = this.newLists;
        arySort = arySort.sort((a, b) => (a.price < b.price ? 1 : -1));
        this.newLists = arySort;
      }
    },
    async changePage(page) {
      this.currentPage = page;
      let ary = this.products;
      ary = ary.slice(
        (page - 1) * this.perPage, page * this.perPage,
      );
      this.newLists = ary;
      // await this.$store.dispatch('frontend/fetchgetProductLists', page);
    },
    async addToCart(productId, qty = 1) {
      await this.$store.commit('all/SAVE_SPINNER', productId);
      await this.$store.dispatch('frontend/fetchAddToCart', {
        product_id: productId,
        qty,
      });
    },
  },
};
</script>

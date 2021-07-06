<template>
  <div class="card border-0 rounded-0">
    <!--書籤-->
    <div
      class="icon-bookmark position-absolute right-10 index-bookmarked"
      @click="$store.dispatch('frontend/fetchBookmark', product)"
    >
      <span class="material-icons-outlined text-white text-6" role="button">
        {{ bookmarkId ? "bookmark" : "bookmark_border" }}
      </span>
    </div>
    <!--書籤-->
    <router-link :to="'/product/' + product.id" target="_blank" class="">
      <div class="overflow-hidden rounded">
        <div
          class="item-product-pic _lg"
          :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"
        ></div>
      </div>
      <div class="item-product-title ellipsis text-gray-400 text-right font-weight-bold"
      style="height: 50px">{{ product.title }}</div>
      <div class="text-right">
        <del class="text-2 text-gray-200">
          {{ $filters.currency(product.origin_price) }}
        </del>
        <div class="item-product-price text-gray-400">
          {{ $filters.currency(product.price) }}
        </div>
      </div>
    </router-link>
    <button
      class="btn btn-secondary text-white w-100"
      @click="
        $store.dispatch('frontend/fetchAddToCart', { product_id: product.id, qty: qty })">
      加入購物車
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['product'],
  data() {
    return {
      qty: 1,
    };
  },
  computed: {
    ...mapGetters({
      bookmarkLists: 'frontend/bookmarkLists',
    }),
    bookmarkId() {
      const bookmarkIdGroup = [];
      this.bookmarkLists.forEach((item) => bookmarkIdGroup.push(item.id));
      return bookmarkIdGroup.indexOf(this.product.id) > -1;
    },
  },
};
</script>

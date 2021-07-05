<template>
  <div class="product-card">
     <div class="icon-bookmark position-absolute right-10 index-bookmarked"
    @click="$store.dispatch('frontend/fetchBookmark', product)">
      <span class="material-icons-outlined text-white text-6" role="button">
        {{ bookmarkId ? 'bookmark' : 'bookmark_border'}}
      </span>
    </div>
    <div class="overflow-hidden rounded">
      <router-link
        to="/"
        class="item-product-image"
        :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"
      >
      </router-link>
    </div>
    <div class="text-white text-5">
      {{ product.title }}
    </div>
    <div class="text-white">
      {{ $filters.currency(product.price) }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['product'],
  computed: {
    ...mapGetters({
      spinner: 'all/spinner',
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

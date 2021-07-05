<template>
  <div class="card mb-5 border-0 overflow-hidden">
    <div class="icon-bookmark position-absolute right-10 index-bookmarked"
    @click="addMyFavoriate(product)">
      <span class="material-icons-outlined text-white text-6" role="button">
        {{ myFavorite.includes(product.id) ? 'bookmark' : 'bookmark_border'}}
      </span>
    </div>
    <a
      @click="this.$router.push(`/product/${product.id}`)"
      href="javascript:;"
      class="card border-0 rounded-0"
    >
      <div class="overflow-hidden rounded-top">
        <div
          class="item-product-pic _lg"
          :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"
        ></div>
      </div>
      <div class="card-body">
        <h5
          class="card-title text-right text-white font-weight-bold"
          style="height: 50px"
        >
          {{ product.title }}
        </h5>
        <p class="card-text text-right text-white">
          <del>{{ $filters.currency(product.origin_price) }}</del> |
          <span>{{ $filters.currency(product.price) }}</span> /
          <span>{{ product.unit }}</span>
        </p>
      </div>
    </a>
    <div class="body-footer">
      <a
        href="javascript:;"
        class="btn btn-secondary rounded-0 text-white w-100 rounded-bottom"
        @click.prevent="$emit('addToCart', product.id)"
        :disabled="spinner === product.id"
        >加入購物車</a
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

// 轉型
const storageMethods = {
  save(favorite) {
    const favoriteString = JSON.stringify(favorite);
    localStorage.setItem('favorite', favoriteString);
  },
  get() {
    return JSON.parse(localStorage.getItem('favorite'));
  },
};

export default {
  props: ['product'],
  data() {
    return {
      myFavorite: storageMethods.get() || [],
    };
  },
  computed: {
    ...mapGetters({
      spinner: 'all/spinner',
    }),
  },
  methods: {
    addMyFavoriate(item) {
      console.log(item);
      if (this.myFavorite.includes(item.id)) {
        console.log('有重複');
        this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1);
      } else {
        this.myFavorite.push(item.id);
      }
      storageMethods.save(this.myFavorite);
      console.log(this.myFavorite);
    },
  },
};
</script>

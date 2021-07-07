<template>
    <div class="bookmark-list bg-white rounded p-4 position-absolute index-bookmarked">
    <div v-if="bookmarkLists.length>0">
      <ul class="item-bookmark-list">
        <li
          class="d-flex align-items-center mb-2 p-2 rounded"
          v-for="item in bookmarkLists"
          :key="item"
          @click="this.$router.push('/product/'+item.id)"
        >
          <div
            class="item-bookmark-pic rounded mr-4"
            :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
          ></div>
          <div class="w-100">
            <div class="text-4">{{ item.title }}</div>
            <div class="text-4 text-secondary">
              {{ $filters.currency(item.price) }}
            </div>
          </div>
          <div>
            <span
              class="material-icons text-danger text-6"
              role="button"
              @click="$store.dispatch('frontend/fetchBookmark', item)"
            >
              delete_forever
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="text-center">
      <div class="text-gray-100 text-7 mb-5">
        (^_^)b
      </div>
      <p class="text-gray-200">目前沒有收藏的產品</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['bookmarkLists'],
  computed: {
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.bookmarkLists);
  },
};
</script>

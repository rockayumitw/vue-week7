<template>
    <li
      class="page-item"
      :class="page == currentPage ? 'active' : ''"
      v-for="(page, index) in totalPage"
      :key="index"
    >
      <a class="page-link" href="javascript:;"
      @click="goTop(page)">{{ page }}</a>
    </li>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['currentPage', 'totalPage'],
  data() {
    return {};
  },
  methods: {
    goTop(page) {
      this.$emit('changePage', page);
      $('html, body').animate({ scrollTop: 250 }, 'fast');
    },
  },
};
</script>

<template>
    <li
      class="page-item"
      :class="page == currentPage ? 'active' : ''"
      v-for="(page, index) in totalPage"
      :key="index"
    >
      <a class="page-link" href="#"
      @click.prevent="goTop(), $emit('changePage', page)">{{ page }}</a>
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
    goTop() {
      console.log('in0');
      $('html, body').animate({ scrollTop: $('.container').offset().top - 0 }, 'fast');
    },
  },
};
</script>

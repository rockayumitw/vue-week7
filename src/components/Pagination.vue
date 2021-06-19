<template>
    <li
      class="page-item"
      :class="page == currentPage ? 'active' : ''"
      v-for="(page, index) in totalPage"
      :key="index"
    >
      <a class="page-link" href="#"
      @click.prevent="$store.dispatch('getProductLists', page)">{{ page }}</a>
    </li>
</template>

<script>
export default {
  props: ['currentPage', 'totalPage'],
};
</script>

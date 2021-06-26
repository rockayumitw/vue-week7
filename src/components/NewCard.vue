<template>
  <router-link :to="`/new/${article.id}`" class="item-new row bg-white g-0 mb-5">
    <div class="col-12 col-md-4">
      <div class="item-new-image">
        <img src="/assets/image/product/1.jpg" class="img-fluid" />
      </div>
    </div>
    <div class="col-12 col-md-8 text-left">
      <div class="item-new-content py-4 px-9">
        <small class="d-block text-gray-200 text-1">{{ article.create_at }}</small>
        <span class="badge rounded-pill bg-primary mr-1"
        v-for="tag in article.tag" :key="tag">{{tag}}</span>
        <div class="text-5 font-weight-bold">{{ article.title }}</div>
        <div class="text-gray-400 ellipsis" v-html="article.description"></div>
        <div class="d-flex justify-content-between">
          <small><span class="d-block d-md-none">{{ article.create_at }}</span></small>
          <small>more</small>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['article'],
  mounted() {
    console.log(this.article);
  },
};
</script>

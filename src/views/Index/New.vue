<template>
<div class="inner-page">
  <div class="inner-banner"></div>
  <div class="bg-white pb-17">
    <div class="container pt-17 position-relative top-y-250">
      <img class="img-fulid w-100 mb-17" :src="article.imageUrl">
      <div class="d-flex">
        <div class="d-none d-md-flex flex-column tool-share">
          <span class="material-icons-outlined text-center text-7 mb-3">facebook</span>
          <span class="material-icons-outlined text-center text-7 mb-3">facebook</span>
          <span class="material-icons-outlined text-center text-7 mb-3">facebook</span>
          <span class="back">
            <p class="mixed mt-4">SHARE</p>
            <span class="material-icons-outlined text-center text-7 mb-3">reply</span>
          </span>
        </div>
        <div class="pl-0 pl-md-9">
          <h3 class="font-weight-bold"> {{ article.title }} </h3>
          <div class="mb-5">
            <small class="text-gray-200">{{ $filters.date(article.create_at) }} / </small>
            <small class="text-gray-200">{{ article.author }} / </small>
            <span class="badge rounded-pill bg-primary mr-1"
              v-for="tag in article.tag" :key="tag">
              {{tag}}
            </span>
          </div>
          <div v-html="article.description"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      tempArticle: {},
    };
  },
  computed: {
    ...mapGetters({
      article: 'frontend/article',
    }),
  },
  mounted() {
    console.log(this.article);
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetArticle', this.$route.params.id);
  },
  methods: {
  },
};
</script>

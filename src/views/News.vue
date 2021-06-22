<template>
<Loading :active="loading" :z-index="1060"></Loading>
  <div class="container">
    <h1>前台文章列表</h1>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <template v-for="article in articleLists" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <div class="card">
            <img :src="article.imageUrl" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <router-link
                :to="`/new/${article.id}`"
                v-if="article.isPublic"
                class="btn btn-outline-primary"
              >
                文章頁面
              </router-link>
            </div>
          </div>
        </div>
      </template>
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
      articleLists: 'articleLists',
      loading: 'loading',
    }),
  },
  async created() {
    await this.$store.dispatch('getArticleLists', 1);
  },
  methods: {
    async changePage(page) {
      await this.$store.dispatch('getArticleLists', page);
    },
  },
};
</script>

<template>
  <div>
    <Loading :active="loading" :z-index="1060"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#articleModal">
        建立新的頁面
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articleLists" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td><p v-html="article.description"></p></td>
          <td>{{ $filters.date(article.create_at) }}</td>
          <td>
            <span v-if="article.isPublic">已公開</span>
            <span v-else>未公開</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="getArticle(article)"
                data-bs-toggle="modal"
                data-bs-target="#articleModal"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delModal"
                @click="getArticle(article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ArticleModal
      ref="articleModal"
      :article="tempArticle"
      @update-article="updateArticle"
    ></ArticleModal>
    <DelModal :item="tempArticle" ref="delModal" @del-item="delArticle" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleModal from '@/components/modal/ArticleModal.vue';
import DelModal from '@/components/modal/DelModal.vue';

export default {
  data() {
    return {
      tempArticle: {},
    };
  },
  components: {
    DelModal,
    ArticleModal,
  },
  computed: {
    ...mapGetters({
      articleLists: 'backend/articleLists',
      loading: 'all/loading',
    }),
  },
  async created() {
    await this.$store.dispatch('backend/fetchGetArticles', 1);
  },
  methods: {
    getArticle(article) {
      this.tempArticle = JSON.parse(JSON.stringify(article));
    },
    async updateArticle(tempArticle) {
      await this.$store.dispatch('backend/fetchUpdateArticle', tempArticle);
    },
    async delArticle(id) {
      await this.$store.dispatch('backend/fetchRemoveArticle', id);
    },
  },
};
</script>

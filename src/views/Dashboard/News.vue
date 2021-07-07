<template>
  <div>
    <div class="inner-banner mb-17">
      <InnerBanner :msg="msg" />
    </div>
    <div class="text-end mb-4">
      <button class="btn btn-secondary text-white"
      type="button"
      @click="$refs.articleModal.modal('show')">
        建立新的頁面
      </button>
    </div>
    <!---->
    <div class="table-box">
      <div class="table">
        <div class="table-thead row text-white w-100 py-3 align-items-center gx-1">
          <div class="col-3 col-md-2">標題</div>
          <div class="col-2 text-center">
            作者
          </div>
          <div class="col-2 text-center d-none d-md-block">描述</div>
          <div class="col-3 col-md-2 text-center">
            建立時間
          </div>
          <div class="col-2 text-center">狀態</div>
          <div class="col-2 text-center">編輯</div>
        </div>

        <div class="table-tr row text-white w-100 align-items-center py-3 align-items-center gx-1"
        v-for="article in articleLists" :key="article.id">
          <div class="col-3 col-md-2">{{ article.title }}</div>
          <div class="col-2 text-center">
            {{ article.author }}
          </div>
          <div class="col-2 text-left overflow-hidden d-none d-md-block">
            <div class="ellipsis py-0" v-html="article.description"></div>
          </div>
          <div class="col-3 col-md-2 text-center">
            {{ $filters.date(article.create_at) }}
          </div>
          <div class="col-2 text-center">
            <span v-if="article.isPublic" class="text-success">
              <span class="material-icons">toggle_on</span>
            </span>
            <span v-else class="text-muted">
              <span class="material-icons">toggle_on</span>
            </span>
          </div>
          <div class="col-2 text-center">
            <div class="btn-group p-0 p-md-1">
                <button
                  class="btn btn-outline-primary btn-sm"
                  type="button"
                  @click="getArticle(article), $refs.articleModal.modal('show');"
                >
                  <span class="material-icons text-3">edit</span>
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#delModal"
                  @click="getArticle(article)"
                >
                  <span class="material-icons text-3">delete</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
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
import InnerBanner from '@/components/InnerBanner.vue';

export default {
  data() {
    return {
      msg: '文章管理',
      tempArticle: {},
    };
  },
  components: {
    DelModal,
    ArticleModal,
    InnerBanner,
  },
  computed: {
    ...mapGetters({
      articleLists: 'backend/articleLists',
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

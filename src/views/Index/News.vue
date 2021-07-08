<template>
<div class="inner-page">
  <InnerBanner :msg="msg" />
  <div class="container">
    <!--搜尋-->
    <div class="mb-5 clearfix mr-1 mb-9">
      <select class="form-select float-start w-40" aria-label="Default select example" disabled>
        <option selected>選擇分類</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="mb-3 d-flex float-start w-40">
        <input type="text" class="form-control w-70 mr-1" placeholder="輸入關鍵字搜尋" disabled>
        <button class="btn btn-primary" disabled>搜尋</button>
      </div>
    </div>
    <!--搜尋-->
    <!--最新消息列表-->
    <ul>
      <li class="mb-9" v-for="article in articleLists" :key="article.id"
      data-aos="fade-up" data-duration="1000">
        <NewCard :article="article"/>
      </li>
    </ul>
    <!--最新消息列表-->
    <!--頁碼-->
    <ul class="pagination justify-content-center mb-17" v-if="pagination.total_pages > 1">
      <Pagination
        :current-page="pagination.current_page"
        :total-page="pagination.total_pages"
        @change-page="changePage"
      ></Pagination>
    </ul>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import NewCard from '@/components/NewCard.vue';
import Pagination from '@/components/Pagination.vue';
import AOS from 'aos';
import InnerBanner from '@/components/InnerBanner.vue';

export default {
  data() {
    return {
      msg: '最新消息',
      tempArticle: {},
    };
  },
  components: {
    NewCard,
    Pagination,
    InnerBanner,
  },
  computed: {
    ...mapGetters({
      articleLists: 'frontend/articleLists',
      pagination: 'frontend/pagination',
    }),
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetArticleLists', 1);
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
  methods: {
    async changePage(page) {
      await this.$store.dispatch('frontend/fetchGetArticleLists', page);
    },
  },
};
</script>

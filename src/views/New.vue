<template>
 <div>{{article}}</div>
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
      loading: 'all/loading',
    }),
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetArticle', this.$route.params.id);
  },
  methods: {
  },
};
</script>

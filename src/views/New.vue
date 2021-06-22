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
      article: 'article',
      loading: 'loading',
    }),
  },
  async created() {
    await this.$store.dispatch('getArticle', this.$route.params.id);
  },
  methods: {
  },
};
</script>

<template>
  <div class="home">
    <!--首頁-->
    <!-- <label
      v-for="(item, index) in optionsLang"
      v-bind:key="index"
    >
      <input type="radio"
      v-model="$store.state.lang"
      :value="item.value" v-on:change="setLang(item.value)"> {{ item.text }}
    </label>
    <h1>{{ $t('title')}}</h1>
    <h2>{{ $t('bye')}}</h2> -->
    <loading v-model:active="loading" :can-cancel="true" loader="dots"></loading>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapGetters } from 'vuex';
import Loading from 'vue-loading-overlay';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Loading,
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
      lang: 'all/lang',
    }),
  },
  data() {
    return {
      optionsLang: [
        { text: '中文', value: 'tw' },
        { text: 'English', value: 'en' },
      ],
    };
  },
  mounted() {
  },
  methods: {
    setLang(value) {
      this.$store.commit('all/SAVE_LANGUAGE', value);
      this.$i18n.locale = value;
    },
  },
};
</script>

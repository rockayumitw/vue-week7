// import axios from 'axios';
// import Swal from 'sweetalert2';

const all = {
  namespaced: true,
  state: () => ({
    loading: false,
    lang: null,
    spinner: '',
  }),
  mutations: {
    SAVE_LOADING(state, value) {
      state.loading = value;
    },
    SAVE_LANGUAGE(state, value) {
      state.lang = value;
    },
    SAVE_SPINNER(state, value) {
      state.spinner = value;
    },
  },
  getters: {
    loading: (state) => state.loading,
    lang: (state) => state.lang,
    spinner: (state) => state.spinner,
  },
};

export default all;

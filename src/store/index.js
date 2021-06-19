import { createStore } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';

export default createStore({
  state: {
    lang: null,
    loading: false,
    product: {
      category: '',
      content: '',
      description: '',
      id: '',
      imageUrl: '',
      is_enabled: 0,
      num: 0,
      origin_price: 0,
      price: 0,
      title: '',
      unit: '',
    },
    pagination: {},
    productLists: null,
    cartLists: {},
    spinner: '',
  },
  mutations: {
    SAVE_LOADING(state, value) {
      state.loading = value;
    },
    SAVE_SPINNER(state, value) {
      state.spinner = value;
    },
    SAVE_LANGUAGE(state, value) {
      state.lang = value;
    },
    SAVE_PAGINATION(state, value) {
      state.pagination = value;
    },
    SAVE_PRODUCT(state, data) {
      state.product = data;
    },
    SAVE_PRODUCT_LISTS(state, data) {
      state.productLists = data;
    },
    SAVE_CART_LISTS(state, data) {
      state.cartLists = data;
    },
  },
  getters: {
    loading: (state) => state.loading,
    spinner: (state) => state.spinner,
    lang: (state) => state.lang,
    product: (state) => state.product,
    pagination: (state) => state.pagination,
    productLists: (state) => state.productLists,
    cartLists: (state) => state.cartLists,
  },
  actions: {
    async getProductLists({ commit }, page = 1) { // 前台 -取得所有商品列表
      commit('SAVE_LOADING', true);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      await axios.get(url).then((res) => {
        if (res.data.success) {
          commit('SAVE_PRODUCT_LISTS', res.data.products);
          commit('SAVE_PAGINATION', res.data.pagination);
        } else {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
        }
        commit('SAVE_LOADING', false);
      }).catch((err) => console.log(err.response));
    },
    async getProductInfo({ commit }, paylod) { // 前台 -取得購物商品詳細資訊
      commit('SAVE_LOADING', true);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${paylod.id}`;
      await axios.get(url).then((res) => {
        if (res.data.success) {
          commit('SAVE_PRODUCT', res.data.product);
        } else {
          console.log(res.data.message);
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
        }
        commit('SAVE_LOADING', false);
      });
    },
    async addToCart({ state, commit, dispatch }, paylod) { // 前台 -加入購物車
      // await commit('SAVE_LOADING', true);
      let methods = null;
      let url = '';
      methods = paylod.product_id === '' ? 'put' : 'post';
      url = paylod.product_id === '' ? `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${paylod.product_id}` : `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const param = paylod;
      await axios[methods](url, { data: param })
        .then(async (res) => {
          if (res.data.success) {
            if (methods === 'post') {
              Swal.fire({
                icon: 'success',
                title: res.data.message,
                text: '',
              });
              commit('SAVE_SPINNER', '');
            } else {
              Swal.fire({
                icon: 'success',
                title: res.data.message,
                text: '',
              });
              commit('SAVE_SPINNER', '');
            }
            await dispatch('getProductLists', state.pagination.current_page);
            await dispatch('getCartLists');
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => console.log(err.response));
    },
    async getCartLists({ commit }) { // 前台 -取得購物車列表
      await commit('SAVE_LOADING', true);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      await axios
        .get(url)
        .then(async (res) => {
          await commit('SAVE_CART_LISTS', res.data.data);
          await commit('SAVE_LOADING', false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async delSingleProduct({ commit, dispatch }, paylod) { // 前台 -刪除單一商品
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${paylod}`;
      await axios
        .delete(url)
        .then(async (res) => {
          if (res.data.message) {
            Swal.fire({
              icon: 'success',
              title: res.data.message,
              text: '',
            });
            await commit('SAVE_SPINNER', '');
            await dispatch('getCartLists');
          }
        }).catch((err) => console.log(err));
    },
    async delAllProduct({ dispatch }) { // 前台 -刪除所有商品
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      await axios.delete(url).then(async (res) => {
        Swal.fire({
          icon: 'success',
          title: res.data.message,
          text: '',
        });
        await dispatch('getCartLists');
      }).catch((err) => {
        console.log(err.response);
      });
    },
  },
  modules: {
  },
});

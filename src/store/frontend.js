import axios from 'axios';
import Swal from 'sweetalert2';

const moduleA = {
  namespaced: true,
  state: () => ({
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
    article: {},
    articleLists: [],
    productLists: [],
    cartLists: [],
    cartAmount: 0,
    pagination: {},
    order: {},
    recommendProducts: [],
    allPageProducts: [],
  }),
  mutations: {
    SAVE_ALLPAGE_PRODUCTS(state, data) {
      state.allPageProducts = data;
    },
    SAVE_RECOMMEND_PRODUCTS(state, data) {
      state.recommendProducts = data;
    },
    SAVE_ORDER(state, data) {
      state.order = data;
    },
    SAVE_ARTICLE(state, data) {
      state.article = data;
    },
    SAVE_PRODUCT(state, data) {
      state.product = data;
    },
    SAVE_ARTICLE_LISTS(state, data) {
      state.articleLists = data;
    },
    SAVE_PRODUCT_LISTS(state, data) {
      state.productLists = data;
    },
    SAVE_CART_AMOUNT(state, value) {
      state.cartAmount = value;
    },
    SAVE_CART_LISTS(state, data) {
      state.cartLists = data;
    },
    SAVE_PAGINATION(state, value) {
      state.pagination = value;
    },
  },
  getters: {
    product: (state) => state.product,
    article: (state) => state.article,
    articleLists: (state) => state.articleLists,
    productLists: (state) => state.productLists,
    cartLists: (state) => state.cartLists,
    cartAmount: (state) => state.cartAmount,
    pagination: (state) => state.pagination,
    order: (state) => state.order,
    recommendProducts: (state) => state.recommendProducts,
    allPageProducts: (state) => state.allPageProducts,
  },
  actions: {
    async fetchAllPageProductLists({ state, commit }) {
      commit('all/SAVE_LOADING', true, { root: true });
      const arr = [];
      // eslint-disable-next-line no-plusplus
      for (let page = 1; page <= state.pagination.total_pages; page++) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
        arr.push(axios.get(url).then().catch((err) => console.log(err.response)));
      }

      const allProducts = [];
      await Promise.all(arr).then(async (res) => {
        console.log(res);
        await res.forEach(async (item) => {
          allProducts.push(...item.data.products);
          await commit('SAVE_ALLPAGE_PRODUCTS', allProducts);
          await commit('all/SAVE_LOADING', false, { root: true });
        });
      });
    },
    async fetchgetProductLists({ commit }, page = 1) { // 前台 -取得所有商品列表
      commit('all/SAVE_LOADING', true, { root: true });
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      await axios.get(url).then(async (res) => {
        if (res.data.success) {
          await commit('SAVE_PRODUCT_LISTS', res.data.products);
          await commit('SAVE_PAGINATION', res.data.pagination);
        } else {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
        }
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err.response));
    },
    async fetchGetProductInfo({ commit }, paylod) { // 前台 -取得購物商品詳細資訊
      commit('all/SAVE_LOADING', true, { root: true });
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${paylod.id}`;
      await axios.get(url).then((res) => {
        console.log(res);
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
        commit('all/SAVE_LOADING', false, { root: true });
      });
    },
    async fetchAddToCart({ state, commit, dispatch }, paylod) { // 前台 -加入購物車
      await commit('all/SAVE_LOADING', true, { root: true });
      let methods = null;
      let url = '';
      let carId = '';
      await state.cartLists.carts.forEach((item) => {
        if (item.product.id === paylod.product_id) {
          methods = 'put';
          carId = item.id;
        }
      });
      if (methods == null) { methods = 'post'; }
      url = methods === 'put' ? `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${carId}` : `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const param = paylod;
      await axios[methods](url, { data: param })
        .then(async (res) => {
          if (res.data.success) {
            if (methods === 'post') {
              commit('all/SAVE_SPINNER', false, { root: true });
              Swal.fire({
                icon: 'success',
                title: res.data.message,
                text: '',
              });
            } else {
              console.log('加入購物車');
              commit('all/SAVE_SPINNER', false, { root: true });
              Swal.fire({
                icon: 'success',
                title: res.data.message,
                text: '',
              });
            }
            await dispatch('fetchGetCartLists');
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'success',
            title: err.response,
            text: '',
          });
        });
    },
    async fetchGetCartLists({ commit }) { // 前台 -取得購物車列表
      await commit('all/SAVE_LOADING', true, { root: true });
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      await axios
        .get(url)
        .then(async (res) => {
          await commit('SAVE_CART_AMOUNT', res.data.data.carts.length);
          await commit('SAVE_CART_LISTS', res.data.data);
          await commit('all/SAVE_LOADING', false, { root: true });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async fetchRemoveSingleProduct({ commit, dispatch }, paylod) { // 前台 -刪除單一商品
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
            await commit('all/SAVE_SPINNER', '', { root: true });
            await dispatch('fetchGetCartLists');
          }
        }).catch((err) => console.log(err));
    },
    async fetchRemoveAllProduct({ dispatch }) { // 前台 -刪除所有商品
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      await axios.delete(url).then(async (res) => {
        Swal.fire({
          icon: 'success',
          title: res.data.message,
          text: '',
        });
        await dispatch('fetchGetCartLists');
      }).catch((err) => {
        console.log(err.response);
      });
    },
    async fetchGetArticle({ commit }, paylod) { // 前台 -取得最新消息
      commit('all/SAVE_LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${paylod}`;
      await axios.get(api).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          commit('SAVE_ARTICLE', res.data.article);
        }
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err));
    },
    async fetchGetArticleLists({ commit }, paylod) { // 前台 -取得最新消息
      commit('all/SAVE_LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${paylod}`;
      await axios.get(api).then((res) => {
        if (res.data.success) {
          commit('SAVE_ARTICLE_LISTS', res.data.articles);
          commit('SAVE_PAGINATION', res.data.pagination);
        }
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err));
    },
    async fetchGetOrder({ commit }, paylod) { // 前台 -取得某一筆訂單資料
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${paylod}`;
      await axios.get(url).then(async (res) => {
        if (res.data.success) {
          await commit('SAVE_ORDER', res.data.order);
        } else {
          console.log(res.data.message);
          Swal.fire({
            icon: 'error',
            title: res.data.message,
            text: '',
          });
        }
      }).catch((err) => console.log(err.response));
    },
    async fetchPayOrder({ commit, dispatch }, paylod) { // 前台 -結帳
      commit('all/SAVE_LOADING', true, { root: true });
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${paylod}`;
      await axios.post(url).then(async (res) => {
        if (res.data.success) {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
          await dispatch('fetchGetOrder', paylod);
        } else {
          console.log(res.data.message);
          Swal.fire({
            icon: 'error',
            title: res.data.message,
            text: '',
          });
        }
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err.response));
    },
    async fetchUseCoupon({ commit, dispatch }, paylod) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      await axios.post(url, { data: { code: paylod } }).then(async (res) => {
        if (res.data.success) {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
          await dispatch('fetchGetCartLists');
        } else {
          console.log(res.data.message);
          Swal.fire({
            icon: 'error',
            title: res.data.message,
            text: '',
          });
        }
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err.response));
    },
    async getRecommendProducts({ commit }, paylod) {
      const { category } = paylod.product;
      const filterProducts = paylod.productLists.filter((item) => item.category === category);
      const arrSet = new Set([]);
      const recommendProducts = [];
      // eslint-disable-next-line no-plusplus
      for (let index = 0; arrSet.size < 4; index++) {
        const num = Math.floor(Math.random() * filterProducts.length);
        arrSet.add(num);
      }
      arrSet.forEach((i) => {
        recommendProducts.push(filterProducts[i]);
      });
      console.log(recommendProducts);
      commit('SAVE_RECOMMEND_PRODUCTS', recommendProducts);
    },
  },
};

export default moduleA;

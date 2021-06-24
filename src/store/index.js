import { createStore } from 'vuex';
import axios from 'axios';
import Swal from 'sweetalert2';

export default createStore({
  namespaced: true,
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
    article: {},
    articleLists: [],
    couponLists: [],
    pagination: {},
    productLists: [],
    cartLists: [],
    orderLists: [],
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
    SAVE_ARTICLE(state, data) {
      state.article = data;
    },
    SAVE_COUPON(state, data) {
      state.coupon = data;
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
    SAVE_CART_LISTS(state, data) {
      state.cartLists = data;
    },
    SAVE_ORDERS_LISTS(state, data) {
      state.orderLists = data;
    },
    SAVE_COUPONS_LISTS(state, data) {
      state.couponLists = data;
    },
  },
  getters: {
    loading: (state) => state.loading,
    spinner: (state) => state.spinner,
    lang: (state) => state.lang,
    product: (state) => state.product,
    article: (state) => state.article,
    pagination: (state) => state.pagination,
    articleLists: (state) => state.articleLists,
    productLists: (state) => state.productLists,
    cartLists: (state) => state.cartLists,
    orderLists: (state) => state.orderLists,
    couponLists: (state) => state.couponLists,
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
    async addToCart({ commit, dispatch }, paylod) { // 前台 -加入購物車
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
            // await dispatch('getProductLists', state.pagination.current_page);
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
    async getArticle({ commit }, paylod) {
      commit('SAVE_LOADING', true);
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${paylod}`;
      await axios.get(api).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          commit('SAVE_ARTICLE', res.data.article);
        }
        commit('SAVE_LOADING', false);
      }).catch((err) => console.log(err));
    },
    async getArticleLists({ commit }, paylod) {
      commit('SAVE_LOADING', true);
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${paylod}`;
      console.log(api);
      await axios.get(api).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          commit('SAVE_ARTICLE_LISTS', res.data.articles);
          commit('SAVE_PAGINATION', res.data.pagination);
        }
        commit('SAVE_LOADING', false);
      }).catch((err) => console.log(err));
    },
    async getAdminProductLists({ commit }, paylod) { // 後台 -取得所有商品列表
      // await commit('SAVE_LOADING', true);
      console.log('取得後台產品列表');
      const url = `https://vue3-course-api.hexschool.io/api/traveltime1221/admin/products?page=${paylod}`;
      await axios
        .get(url)
        .then(async (res) => {
          console.log(res);
          if (res.data.success) {
            commit('SAVE_PRODUCT_LISTS', res.data.products);
            commit('SAVE_PAGINATION', res.data.pagination);
          } else {
            Swal.fire({
              icon: 'error',
              title: res.data.message,
              text: '',
            });
          }
          // commit('SAVE_LOADING', false);
        })
        .catch((err) => console.log(err.response));
    },
    async changeAdminProduct({ state, dispatch }, paylod) {
      const methods = paylod.id === '' ? 'post' : 'put';
      let url = 'https://vue3-course-api.hexschool.io/api/traveltime1221/admin/product';
      const data = { data: { ...paylod } };
      url = paylod.id === '' ? url : url += `/${paylod.id}`;
      console.log(methods);
      await axios[methods](url, data).then(async (res) => {
        console.log(res);
        if (!res.data.success) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.data.message,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
          await dispatch('getAdminProductLists', state.pagination.current_page);
        }
      }).catch((err) => console.log(err));
    },
    async removeAdminProduct({ dispatch }, paylod) { // 後台 -刪除選取產品
      const url = `https://vue3-course-api.hexschool.io/api/traveltime1221/admin/product/${paylod}`;
      await axios.delete(url).then((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '已經刪除產品',
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch('getAdminProductLists');
        // delModal.hide();
      }).catch((err) => {
        console.log(err.response);
      });
    },
    async getAdminOrders({ commit }, paylod) { // 後台 -取得訂單列表
      commit('SAVE_LOADING', true);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${paylod}`;
      console.log(url);
      await axios.get(url).then((res) => {
        console.log(res);
        commit('SAVE_ORDERS_LISTS', res.data.orders);
        commit('SAVE_PAGINATION', res.data.pagination);
        commit('SAVE_LOADING', false);
      }).catch((err) => console.log(err.response));
    },
    async updateAdminOrderPaid({ state, commit, dispatch }, paylod) { // 後台 -改付款狀態
      commit('SAVE_ORDER', paylod);
      commit('SAVE_LOADING', true);
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${paylod.id}`;
      console.log(api);
      const paid = {
        is_paid: paylod.is_paid,
      };
      await axios.put(api, { data: paid }).then((res) => {
        console.log(res.data.message);
        dispatch('getAdminOrders', state.pagination.current_page);
      }).catch((err) => console.log(err));
    },
    async delAdminOrder({ state, commit, dispatch }, paylod) { // 後台 -刪除訂單
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${paylod}`;
      console.log(url);
      commit('SAVE_LOADING', true);
      await axios.delete(url).then((res) => {
        dispatch('getAdminOrders', state.pagination.current_page);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }).catch((err) => console.log(err.response));
    },
    async delAllAdminOrder({ state, commit, dispatch }) { // 後台 -刪除全部訂單
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      commit('SAVE_LOADING', true);
      await axios.delete(url).then((res) => {
        dispatch('getAdminOrders', state.pagination.current_page);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }).catch((err) => console.log(err.response));
    },
    async getAdminCoupons({ commit }) { // 後台 -取得優惠券列表
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`;
      commit('SAVE_LOADING', true);
      await axios.get(url).then((res) => {
        console.log(res);
        commit('SAVE_COUPONS_LISTS', res.data.coupons);
        commit('SAVE_LOADING', false);
      }).catch((err) => console.log(err));
    },
    async changeAdminCoupons({ commit, dispatch }, paylod) { // 後台 -新增/修改優惠券
      console.log(paylod);
      commit('SAVE_LOADING', true);
      console.log(paylod.id);
      const url = paylod.id === undefined ? `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon` : `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${paylod.id}`;
      const methods = paylod.id === undefined ? 'post' : 'put';
      commit('SAVE_COUPON', paylod);
      console.log(methods);
      await axios[methods](url, { data: { ...paylod } }).then((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch('getAdminCoupons');
        commit('SAVE_LOADING', false);
      }).catch((err) => console.log(err));
    },
    async delAdminSingleCoupon({ commit, dispatch }, paylod) {
      console.log(paylod);
      commit('SAVE_LOADING', true);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${paylod}`;
      await axios.delete(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch('getAdminCoupons');
        } else {
          console.log(res, '刪除優惠券');
        }
      });
    },
    async getAdminArticles({ commit }, paylod) { // 後台 -取得最新消息列表
      commit('SAVE_LOADING', true);
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${paylod}`;
      console.log(api);
      await axios.get(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          commit('SAVE_ARTICLE_LISTS', res.data.articles);
          commit('SAVE_PAGINATION', res.data.pagination);
          commit('SAVE_LOADING', false);
        }
      }).catch((err) => {
        // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
        console.log(err.message);
      });
    },
    async getAdminSingleArticles({ commit }, paylod) { // 後台 -取得單一則最新消息
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${paylod}`;
      commit('SAVE_LOADING', true);
      await axios.get(api).then((res) => {
        if (res.data.success) {
          console.log(res.data);
        }
        commit('SAVE_LOADING', false);
      }).catch((error) => {
        commit('SAVE_LOADING', false);
        console.log(error.message);
      });
    },
    async updateAdminArticle({ state, commit, dispatch }, paylod) { // 後台 -新增/編輯最新消息
    // 依樣用id判斷是否為新增或編輯文章
      commit('SAVE_LOADING', true);
      console.log(paylod.id);
      const methods = paylod.id === undefined ? 'post' : 'put';
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
      const param = paylod;
      param.content = paylod.description;
      const data = { data: { ...param } };
      url = paylod.id === undefined ? url : url += `/${paylod.id}`;
      console.log(data);
      console.log(url);
      console.log(methods);
      commit('SAVE_LOADING', false);
      await axios[methods](url, data).then(async (res) => {
        if (!res.data.success) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: res.data.message,
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
          await dispatch('getAdminArticles', state.pagination.current_page);
        }
      }).catch((err) => console.log(err));
    },
    async delAdminArticle({ state, commit, dispatch }, paylod) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${paylod}`;
      commit('SAVE_LOADING', true);
      await axios.delete(url).then(async (res) => {
        if (res.data.success) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          await dispatch('getAdminArticles', state.pagination.current_page);
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        commit('SAVE_LOADING', false);
      });
    },
  },
  modules: {
  },
});

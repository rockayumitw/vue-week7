import axios from 'axios';
import Swal from 'sweetalert2';

const backend = {
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
    articleLists: [],
    orderLists: [],
    couponLists: [],
    productLists: [],
    pagination: {},
  }),
  mutations: {
    SAVE_ARTICLE(state, data) {
      state.article = data;
    },
    SAVE_ARTICLE_LISTS(state, data) {
      state.articleLists = data;
    },
    SAVE_PRODUCT(state, data) {
      state.product = data;
    },
    SAVE_PAGINATION(state, value) {
      state.pagination = value;
    },
    SAVE_PRODUCT_LISTS(state, data) {
      state.productLists = data;
    },
    SAVE_ORDERS_LISTS(state, data) {
      state.orderLists = data;
    },
    SAVE_COUPONS_LISTS(state, data) {
      state.couponLists = data;
    },
  },
  getters: {
    product: (state) => state.product,
    article: (state) => state.article,
    articleLists: (state) => state.articleLists,
    productLists: (state) => state.productLists,
    orderLists: (state) => state.orderLists,
    couponLists: (state) => state.couponLists,
    pagination: (state) => state.pagination,
  },
  actions: {
    async fetchGetOrders({ commit }, paylod) { // 後台 -取得訂單列表
      commit('all/SAVE_LOADING', true, { root: true });
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${paylod}`;
      console.log(url);
      await axios.get(url).then((res) => {
        console.log(res);
        commit('SAVE_ORDERS_LISTS', res.data.orders);
        commit('SAVE_PAGINATION', res.data.pagination);
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err.response));
    },
    async fetchRemoveOrder({ state, commit, dispatch }, paylod) { // 後台 -刪除訂單
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${paylod}`;
      console.log(url);
      commit('all/SAVE_LOADING', true, { root: true });
      await axios.delete(url).then((res) => {
        dispatch('fetchGetOrders', state.pagination.current_page);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }).catch((err) => console.log(err.response));
    },
    async fetchgetProductLists({ commit }, paylod) { // 後台 -取得所有商品列表
      await commit('all/SAVE_LOADING', true, { root: true });
      console.log('取得後台產品列表');
      const url = `https://vue3-course-api.hexschool.io/api/traveltime1221/admin/products?page=${paylod}`;
      await axios.get(url).then(async (res) => {
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
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err.response));
    },
    async fetchChangeProduct({ state, dispatch }, paylod) {
      console.log(paylod.id);
      const methods = paylod.id === undefined ? 'post' : 'put';
      let url = 'https://vue3-course-api.hexschool.io/api/traveltime1221/admin/product';
      const data = { data: { ...paylod } };
      url = paylod.id === undefined ? url : url += `/${paylod.id}`;
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
          await dispatch('fetchgetProductLists', state.pagination.current_page);
        }
      }).catch((err) => console.log(err));
    },
    async fetchRemoveProduct({ dispatch }, paylod) { // 後台 -刪除選取產品
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
        dispatch('fetchgetProductLists');
        // delModal.hide();
      }).catch((err) => {
        console.log(err.response);
      });
    },
    async fetchUpdateOrderPaid({ state, commit, dispatch }, paylod) { // 後台 -改付款狀態
      // commit('SAVE_ORDER', paylod);
      commit('all/SAVE_LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${paylod.id}`;
      console.log(api);
      const paid = {
        is_paid: paylod.is_paid,
      };
      await axios.put(api, { data: paid }).then((res) => {
        console.log(res.data.message);
        dispatch('fetchGetOrders', state.pagination.current_page);
      }).catch((err) => console.log(err));
    },
    async fetchRemoveAllOrder({ state, commit, dispatch }) { // 後台 -刪除全部訂單
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      commit('all/SAVE_LOADING', true, { root: true });
      await axios.delete(url).then((res) => {
        dispatch('fetchGetOrders', state.pagination.current_page);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }).catch((err) => console.log(err.response));
    },
    async fetchGetCoupons({ commit }) { // 後台 -取得優惠券列表
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`;
      commit('all/SAVE_LOADING', true, { root: true });
      await axios.get(url).then((res) => {
        console.log(res);
        commit('SAVE_COUPONS_LISTS', res.data.coupons);
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err));
    },
    async fetchChangeCoupons({ commit, dispatch }, paylod) { // 後台 -新增/修改優惠券
      console.log(paylod);
      commit('all/SAVE_LOADING', true, { root: true });
      console.log(paylod.id);
      const url = paylod.id === undefined ? `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon` : `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${paylod.id}`;
      const methods = paylod.id === undefined ? 'post' : 'put';
      console.log(methods);
      await axios[methods](url, { data: { ...paylod } }).then((res) => {
        console.log(res);
        if (res.data.message) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        dispatch('fetchGetCoupons');
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((err) => console.log(err));
    },
    async fetchRemoveSingleCoupon({ commit, dispatch }, paylod) {
      console.log(paylod);
      commit('all/SAVE_LOADING', true, { root: true });
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
          dispatch('fetchGetCoupons');
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    },
    async fetchGetArticles({ commit }, paylod) { // 後台 -取得最新消息列表
      commit('all/SAVE_LOADING', true, { root: true });
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${paylod}`;
      console.log(api);
      await axios.get(api).then((res) => {
        console.log(res);
        if (res.data.success) {
          commit('SAVE_ARTICLE_LISTS', res.data.articles);
          commit('SAVE_PAGINATION', res.data.pagination);
          commit('all/SAVE_LOADING', false, { root: true });
        }
      }).catch((err) => {
        // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
        console.log(err.message);
      });
    },
    async getAdminSingleArticles({ commit }, paylod) { // 後台 -取得單一則最新消息
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${paylod}`;
      commit('all/SAVE_LOADING', true, { root: true });
      await axios.get(api).then((res) => {
        if (res.data.success) {
          console.log(res.data);
        }
        commit('all/SAVE_LOADING', false, { root: true });
      }).catch((error) => {
        commit('all/SAVE_LOADING', false, { root: true });
        console.log(error.message);
      });
    },
    async fetchUpdateArticle({ state, commit, dispatch }, paylod) { // 後台 -新增/編輯最新消息
    // 依樣用id判斷是否為新增或編輯文章
      commit('all/SAVE_LOADING', true, { root: true });
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
      commit('all/SAVE_LOADING', false, { root: true });
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
          await dispatch('fetchGetArticles', state.pagination.current_page);
        }
      }).catch((err) => console.log(err));
    },
    async fetchRemoveArticle({ state, commit, dispatch }, paylod) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${paylod}`;
      commit('all/SAVE_LOADING', true, { root: true });
      await axios.delete(url).then(async (res) => {
        if (res.data.success) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          await dispatch('fetchGetArticles', state.pagination.current_page);
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        commit('all/SAVE_LOADING', false, { root: true });
      });
    },
  },
};

export default backend;

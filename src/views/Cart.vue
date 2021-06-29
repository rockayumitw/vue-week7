<template>
<div class="inner-page">
  <div class="inner-banner mb-17"></div>
    <div>購物車頁面</div>
  <div class="table-box container">
    <div class="text-end mb-2">
      <button class="btn btn-primary text-white" type="button"
      @click="$store.dispatch('frontend/fetchRemoveAllProduct')">
        清空購物車
        <!--@click="delAllProduct()"-->
      </button>
    </div>
    <table class="table cart-list-table align-middle">
      <thead>
        <tr>
          <th scope="col">商品圖片</th>
          <th class="text-left" scope="col">商品名稱</th>
          <th scope="col">數量/單位</th>
          <th class="text-right" scope="col">小計</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartLists.carts" :key="item.id">
          <td>
            <div class="overflow-hidden rounded item-product-box">
              <div class="item-product-pic _sm"
            :style="{backgroundImage: 'url('+ item.product.imageUrl +')'}"></div>
            </div>
          </td>
          <td>
            <div class="font-weight-bold">{{ item.product.title }}</div>
            <div class="input-group input-group-sm d-table d-md-none">
              <input
                v-model.number="item.qty"
                min="1"
                type="number"
                class="form-control"
                @blur="this.$store.dispatch('frontend/fetchAddToCart',
                {product_id: item.product.id,qty: qty})"
                :disabled="spinner === item.product.id"
              />
              <span class="input-group-text" id="basic-addon2">{{
                item.product.unit
              }}</span>
            </div>
          </td>
          <td class="d-none d-md-table">
            <div class="input-group input-group-sm">
              <input
                v-model.number="item.qty"
                min="1"
                type="number"
                class="form-control"
                @blur="this.$store.dispatch('frontend/fetchAddToCart',
                {product_id: item.product.id,qty: qty})"
                :disabled="spinner === item.product.id"
              />
              <span class="input-group-text" id="basic-addon2">{{
                item.product.unit
              }}</span>
            </div>
          </td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            <del>{{origin_price}}</del> / <span>{{price}}</span>
            <div>{{ item.final_total }}</div>
            <span class="material-icons-outlined text-success">
              confirmation_number
            </span>
          </td>
          <td class="text-right" width="100">
            <button
              type="button"
              class="btn js-del btn-sm"
              @click="delSingleProduct(item.id)"
              :disabled="spinner === item.id"
            >
              <span class="material-icons text-danger text-6"
                role="button">
                  delete_forever
              </span>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="text-end">總計</td>
          <td class="text-end">{{ cartLists.total }}</td>
        </tr>
        <tr>
          <td></td>
          <!-- <td colspan="4" class="text-end text-success">折扣價</td> -->
          <!-- <td class="text-end text-success">{{ cartLists.final_total }}</td> -->
        </tr>
      </tfoot>
    </table>
  </div>
  <h1 class="text-white text-center pt-5 mt-5">表單</h1>
  <div class="my-5 row justify-content-center" data-aos="fade-In" data-aos-duration="1000">
    <Form ref="form" v-slot="{ errors }" class="col-md-6" @submit="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label text-white">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        ></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label text-white">收件人姓名</label>
        <Field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label text-white">收件人電話</label>
        <Field
          id="tel"
          name="電話"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required|min:8|max:10"
          v-model="form.user.tel"
        ></Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label text-white">收件人地址</label>
        <Field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label text-white">留言</label>
        <textarea
          name=""
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="text-center mb-2">
        <button type="submit" class="btn btn-primary" :disabled="submitSpinner">
          <i class="fas fa-spinner fa-pulse" v-if="submitSpinner"></i>
          <span v-else>送出訂單</span>
        </button>
      </div>
    </Form>
  </div>
  <loading v-model:active="loading" :can-cancel="true" loader="dots"></loading>
</div>
</template>

<script>
import AOS from 'aos';
import { mapGetters } from 'vuex';
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      qty: 1,
      submitSpinner: false,
      form: {
        message: '',
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
      cartLists: 'frontend/cartLists',
      spinner: 'all/spinner',
    }),
  },
  components: {
    Loading,
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetCartLists');
  },
  mounted() {
    console.log(this.cartLists.cart);
    this.$nextTick(() => {
      AOS.init();
    });
  },
  methods: {
    initForm() {
      this.form = {
        message: '',
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
        },
      };
    },
    async delSingleProduct(id) {
      await this.$store.commit('all/SAVE_SPINNER', id);
      await this.$store.dispatch('frontend/fetchRemoveSingleProduct', id);
    },
    async onSubmit() { // 付款訂單
      this.submitSpinner = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      await this.axios.post(url, { data: this.form }).then((res) => {
        this.submitSpinner = false;
        this.$store.dispatch('frontend/fetchGetCartLists');
        if (res.data.success) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.message,
            text: '',
          });
          this.initForm();
        } else {
          console.log(res.data.message);
          this.$swal.fire({
            icon: 'error',
            title: res.data.message,
            text: '',
          });
          this.initForm();
        }
      }).catch((err) => console.log(err.response));
    },
  },
};
</script>

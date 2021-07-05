<template>
<div class="inner-page">
  <InnerBanner :msg="msg" />
  <div class="table-box container">
    <!--步驟化-->
    <Step :step="step" />
    <!--步驟化-->
    <table class="table cart-list-table align-middle mb-17">
      <thead>
        <tr>
          <th scope="col">圖片</th>
          <th class="text-left" scope="col">商品名稱</th>
          <th width="80" class="text-right">數量</th>
          <th width="80" class="text-right" scope="col">小計</th>
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
          <td><div class="font-weight-bold text-3">{{ item.product.title }}</div></td>
          <td width="80" class="text-right">
            {{item.qty}} / {{item.product.unit}}
          </td>
          <td class="text-end" width="80">
            <del class="text-1 text-gray-200">
              {{ $filters.currency(item.product.origin_price) }}
            </del><br/>
            <span class="text-3">{{ $filters.currency(item.product.price) }}</span>
            <div class="text-4">{{ $filters.currency(item.final_total) }}</div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td class="text-end text-primary font-weight-bold">實付金額</td>
          <td>{{ $filters.currency( Math.round(cartLists.final_total) )}}</td>
        </tr>
      </tfoot>
    </table>

    <div class="my-5 row justify-content-center" data-aos="fade-In" data-aos-duration="1000">
    <div class="bg-secondary text-white w-100 p-2 text-center">填寫訂購資料</div>
    <Form ref="form" v-slot="{ errors }" class="row p-4" @submit="onSubmit">
      <div class="mb-3 col-12 col-md-6">
        <label for="email" class="form-label text-white">
          <small class="text-danger">*</small>
          Email
        </label>
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

      <div class="mb-3 col-12 col-md-6">
        <label for="name" class="form-label text-white">
          <small class="text-danger">*</small>
          收件人姓名
        </label>
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

      <div class="mb-3 col-12 col-md-6">
        <label for="tel" class="form-label text-white">
          <small class="text-danger">*</small>
          收件人電話
        </label>
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

      <div class="mb-3 col-12 col-md-6">
        <label for="address" class="form-label text-white">
          <small class="text-danger">*</small>
          收件人地址
        </label>
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

      <div class="mb-3 col-12">
        <label for="payment" class="form-label text-white">
          <small class="text-danger">*</small>
          支付方式
        </label>
        <Field name="支付方式" as="select"
        id="payment"
        class="form-select"
        :class="{ 'is-invalid': errors['支付方式'] }"
        v-model="form.user.payment_method">
          <option selected disabled value="">請選擇支付方式</option>
          <option value="WebATM">WebATM</option>
          <option value="ATM">ATM</option>
          <option value="CVS">CVS</option>
          <option value="Credit">Credit</option>
          <option value="ApplePay">ApplePay</option>
          <option value="GooglePay">GooglePay</option>
        </Field>
        <ErrorMessage name="支付方式" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label text-white">
          留言
        </label>
        <textarea
          name=""
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="row w-100 mx-auto">
      <div class="col-6">
        <router-link class="btn btn-gray-200 w-100 text-white" to="/Cart">返回確認清單</router-link>
      </div>
      <!-- <div class="col-4">
        <a v-if="cartAmount > 0" href="javascript:;" class="btn btn-danger w-100 text-white"
        @click="$store.dispatch('frontend/fetchRemoveAllProduct')">清空購物車</a>
      </div> -->
      <div class="col-6">
        <!-- <router-link class="btn btn-secondary w-100 text-white"
        to="/createOrder">前往結帳</router-link> -->
        <button type="submit" class="btn btn-secondary w-100 text-white"
        :disabled="submitSpinner" @click="onSubmit">
          <i class="fas fa-spinner fa-pulse" v-if="submitSpinner"></i>
          <span v-else>送出訂單</span>
        </button>
      </div>
    </div>
    </Form>
  </div>
  </div>
</div>
</template>

<script>
import AOS from 'aos';
import { mapGetters } from 'vuex';
import InnerBanner from '@/components/InnerBanner.vue';
import Step from '@/components/Step.vue';

export default {
  components: {
    InnerBanner,
    Step,
  },
  data() {
    return {
      step: 2,
      msg: '填寫訂單資料',
      qty: 1,
      submitSpinner: false,
      form: {
        message: '',
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
          payment_method: '',
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      cartLists: 'frontend/cartLists',
      spinner: 'all/spinner',
    }),
    cartAmount: 'frontend/cartAmount',
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetCartLists');
  },
  watch: {
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
          payment_method: '',
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
          this.$router.push(`/order/${res.data.orderId}`);
        } else {
          console.log(res.data.message);
          this.$swal.fire({
            icon: 'error',
            title: res.data.message,
            text: '',
          });
        }
      }).catch((err) => console.log(err.response));
    },
  },
};
</script>

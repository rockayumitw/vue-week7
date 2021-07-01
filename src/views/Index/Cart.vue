<template>
<div class="inner-page">
  <div class="inner-banner mb-17"></div>
  <div class="table-box container">
    <!--步驟化-->
    <div class="mx-auto w-80 mb-10">
      <div class="row">
        <div class="col-3 text-center text-white">
          <div class="bg-secondary rounded p-2">
            STEP.1 <br/>
            確認購物清單
          </div>
        </div>
        <div class="col-3 text-center text-white">
          <div class="bg-gray-200 rounded p-2">
            STEP.2<br/>
            填寫訂購資料
          </div>
        </div>
        <div class="col-3 text-center text-white">
          <div class="bg-gray-200 rounded p-2">
            STEP.3<br/>
            付款
          </div>
        </div>
        <div class="col-3 text-center text-white">
          <div class="bg-gray-200 rounded p-2">
            STEP.4<br/>
            完成訂單
          </div>
        </div>
      </div>
    </div>
    <!--步驟化-->
    <table class="table cart-list-table align-middle">
      <thead>
        <tr>
          <th scope="col">圖片</th>
          <th class="text-left" scope="col">商品名稱/數量</th>
          <th class="text-right" scope="col">小計</th>
          <th class="text-right" scope="col">功能</th>
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
            <div class="font-weight-bold text-3">{{ item.product.title }}</div>
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
          <!-- <td class="d-none d-md-table">
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
          </td> -->
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            <del class="text-1 text-gray-200">
              {{ $filters.currency(item.product.origin_price) }}
            </del><br/>
            <span class="text-3">{{ $filters.currency(item.product.price) }}</span>
            <div class="text-4">{{ $filters.currency(item.final_total) }}</div>
            <!-- <span class="material-icons-outlined text-success">
              confirmation_number
            </span> -->
          </td>
          <td class="text-right">
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
          <td></td>
          <td></td>
          <td class="text-end">總計</td>
          <td class="text-end">{{ $filters.currency(cartLists.total) }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="text-end">運費</td>
          <td class="text-end"> +0</td>
        </tr>
        <tr>
          <td class="d-none d-md-table-cell"></td>
          <td colspan="2"
          class="text-end text-success d-flex justify-content-end align-items-center">
            <span class="material-icons-outlined text-success mr-2">
              confirmation_number
            </span>
            <span class="d-none d-md-table-cell mr-2">優惠券折抵</span>
            <div class="input-group">
              <input type="text" class="form-control"
              placeholder="輸入優惠碼"
              aria-label="輸入優惠碼"
              aria-describedby="button-addon2"
              v-model="coupon">
              <button class="btn btn-outline-secondary"
              type="button" id="button-addon2" @click="useCoupon">
                使用優惠券
              </button>
            </div>
          </td>
          <td class="text-end text-success" width="150">
            <span>
              - {{ $filters.currency(Math.round(cartLists.total - cartLists.final_total)) }}</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td class="text-end text-primary font-weight-bold">實付金額</td>
          <td>{{ $filters.currency(Math.round(cartLists.final_total)) }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="row w-100 mx-auto">
      <div class="col-4">
        <router-link class="btn btn-gray-200 w-100 text-white" to="/">繼續購物</router-link>
      </div>
      <div class="col-4">
        <a href="javascript:;" class="btn btn-danger w-100 text-white"
        @click="$store.dispatch('frontend/fetchRemoveAllProduct')">清空購物車</a>
      </div>
      <div class="col-4" v-if="cartAmount>0">
        <router-link class="btn btn-secondary w-100 text-white" to="/createOrder">
          前往結帳
        </router-link>
      </div>
    </div>
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
      coupon: '',
    };
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
      cartLists: 'frontend/cartLists',
      spinner: 'all/spinner',
      cartAmount: 'frontend/cartAmount',
    }),
  },
  components: {
    Loading,
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetCartLists');
  },
  mounted() {
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
    async useCoupon() {
      await this.$store.dispatch('frontend/fetchUseCoupon', this.coupon);
    },
  },
};
</script>

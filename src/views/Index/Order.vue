<template>
<div class="inner-page">
  <InnerBanner :msg="msg" />
  <div class="table-box container">
    <!--步驟化-->
    <Step :step="step" :order="order"/>
    <!--步驟化-->
    <table class="table cart-list-table align-middle mb-17">
      <thead>
        <tr>
          <th scope="col">圖片</th>
          <th class="text-left" scope="col">商品名稱</th>
          <th width="80">數量</th>
          <th width="80" class="text-right" scope="col">小計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>
            <div class="overflow-hidden rounded item-product-box">
              <div class="item-product-pic _sm"
            :style="{backgroundImage: 'url('+ item.product.imageUrl +')'}"></div>
            </div>
          </td>
          <td><div class="font-weight-bold text-3">{{ item.product.title }}</div></td>
          <td width="80" >
            <div class="input-group input-group-sm">
              {{item.qty}} / {{item.product.unit}}
            </div>
          </td>
          <td class="text-end" width="80" >
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
          <td class="text-right">{{ $filters.currency(order.total) }}</td>
        </tr>
      </tfoot>
    </table>

    <div class="my-5 row justify-content-center" data-aos="fade-In" data-aos-duration="1000">
    <div class="bg-secondary text-white w-100 p-2 text-center">訂購資料</div>
    <table class="table text-left text-3">
    <tbody>
        <tr>
            <td width="150" class="text-4 font-weight-bold">收件人</td>
            <td>{{order.user.name}}</td>
        </tr>
        <tr>
            <td width="150" class="text-4 font-weight-bold">電子信箱</td>
            <td>{{order.user.email}}</td>
        </tr>
        <tr>
            <td  width="150" class="text-4 font-weight-bold">電話</td>
            <td>{{order.user.tel}}</td>
        </tr>
        <tr>
            <td  width="150" class="text-4 font-weight-bold">地址</td>
            <td>{{order.user.address}}</td>
        </tr>
        <tr>
            <td  width="150" class="text-4 font-weight-bold">支付方式</td>
            <td>{{order.user.payment_method}}</td>
        </tr>
        <tr>
            <td  width="150" class="text-4 font-weight-bold">備註</td>
            <td>{{order.message}}</td>
        </tr>
        <tr>
            <td  width="150" class="text-4 font-weight-bold">付款狀態</td>
            <td>{{order.is_paid}}</td>
        </tr>
    </tbody>
    </table>
  </div>
  <div class="row w-100 mx-auto" v-if="!order.is_paid">
      <div class="col-12">
        <button type="submit" class="btn btn-secondary w-100 text-white"
        :disabled="spinner"
        @click="$store.dispatch('frontend/fetchPayOrder', $route.params.id)">
          <i class="fas fa-spinner fa-pulse" v-if="spinner"></i>
          <span v-else>結帳</span>
        </button>
      </div>
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
      msg: '確認訂單資料',
      step: 3,
    };
  },
  computed: {
    ...mapGetters({
      spinner: 'all/spinner',
      order: 'frontend/order',
    }),
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetOrder', this.$route.params.id);
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>

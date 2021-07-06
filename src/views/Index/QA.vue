<template>
<div class="inner-page bg-white">
    <InnerBanner :msg="msg" />
    <div class="container py-17 mb-17">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <!---->
        <div class="accordion-item" v-for="item in qaLists" :key="item"
         data-aos="fade-up" data-duration="1000">
          <h2 class="accordion-header" :id="`flush-headingOne-${item.id}`">
            <button class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#flush-collapseOne-${item.id}`"
            aria-expanded="false"
            :aria-controls="`flush-collapseOne-${item.id}`">
              {{ item.q }}
            </button>
          </h2>
          <div :id="`flush-collapseOne-${item.id}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`flush-headingOne-${item.id}`"
          data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div v-html="item.a"></div>
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
</div>
</template>

<script>
import InnerBanner from '@/components/InnerBanner.vue';

export default {
  components: {
    InnerBanner,
  },
  data() {
    return {
      msg: 'Q&A',
      qaLists: [
        {
          id: 'a',
          q: '今天訂購，最快幾天可到貨？',
          a: `訂單完成前即會顯示「最快到貨日期」。<br/>
            ．提醒您，黑貓宅急便週日無配送服務，敬請見諒。<br/>
            ．天氣狀況不佳、特殊節慶活動貨量龐大、交通道路中斷等配送困難的情況下，送達時間有可能變動。<br/>
            ．特殊節日需求，建議安排前一日到貨，以避免不可抗因素造成的延遲狀況。`,
        },
        {
          id: 'b',
          q: '取消訂單與退款',
          a: `．出貨日前 10 天，將無法再取消訂單。<br/>
              ．取消之訂單如為信用卡付款，款項退刷需 7-14 個工作天入帳。<br/>
              ．ATM、超商代碼退款，於 5 個工作天入帳。`,
        },
        {
          id: 'c',
          q: '收貨方式有哪些？',
          a: `．【店內自取】<br/>
                  地址:台中市西屯區惠中二街26號<br/>
                  營業時間:周一~周五 ; 早上08:30~下午6:00，如有調整將另行通知。<br/>
              ．【宅配】<br/>
                  配送區域:台灣黑貓宅急便服務區域`,
        },
        {
          id: 'd',
          q: '門市取貨需要本人？',
          a: '取貨請告知訂購人姓名與手機號碼，核對無誤即可取貨。',
        },
        {
          id: 'e',
          q: '當天無法取貨、收貨該怎麼辦？',
          a: `．【店內自取】<br/>
                  請來電04-22512636或fb臉書私訊告知，自取可先為您保存商品，但請於賞味期限內完成取貨。<br/>
              ．【宅配】<br/>
                  請於到貨1周前告知需延後配送的日期，會為您聯繫貨運做安排，但考量最佳賞味期不建議延後太多天。`,
        },
      ],
    };
  },
};
</script>

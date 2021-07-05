<template>
  <div class="inner-page bg-white">
    <InnerBanner :msg="msg" />
    <div class="container py-17">
      <div class="py-17">
        <ul class="list-unstyled row">
          <li class="col-6 col-md-3 text-center">
            <div>
              <span class="material-icons-outlined text-5 text-md-7 p-5 mb-3">
                signal_cellular_alt
              </span>
            </div>
            <p class="font-weight-bold text-4 text-md-5 mb-3">備受肯定</p>
            <p>客戶回購率高、網路熱銷多家百貨邀約、多次受邀網媒採訪</p>
          </li>
          <li class="col-6 col-md-3 text-center">
            <div>
              <span class="material-icons-outlined text-5 text-md-7 p-5 mb-3">
                takeout_dining
              </span>
            </div>
            <p class="font-weight-bold text-4 text-md-5 mb-3">注重細節</p>
            <p>注重原料品質來源、包裝細節不馬虎</p>
          </li>
          <li class="col-6 col-md-3 text-center">
            <div>
              <span class="material-icons-outlined text-5 text-md-7 p-5 mb-3"> share </span>
            </div>
            <p class="font-weight-bold text-4 text-md-5 mb-3">創新、樂於分享</p>
            <p>
              喜歡創新、運用季節性的產地水果開發新的驚喜，同時也樂於分享甜點製作，創造快樂的氣氛
            </p>
          </li>
          <li class="col-6 col-md-3 text-center">
            <div>
              <span class="material-icons-outlined text-5 text-md-7 p-5 mb-3"> request_quote </span>
            </div>
            <p class="font-weight-bold text-4 text-md-5 mb-3">平價美食</p>
            <p>無店面成本直接回饋顧客</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="parallax text-center d-flex align-items-center justify-content-center"
    :style="{ backgroundImage: 'url(' + image2 + ')' }">
        <p class="text-white text-5 index-carousel">觸動你的視覺，抓住您的味蕾，療育您的心靈</p>
    </div>
    <div class="container py-17">
      <div class="row py-17 align-items-center">
        <div class="col-md-5">
          <img class="img-fluid mb-10 mb-md-0" :src="image" />
        </div>
        <div class="col-md-7">
          <div class="text-center mb-2">
            <img :src="logo" width="200"/>
          </div>
          <div class="about-content text-4 py-5 text-center">
            XX店面座落在XX市XXXX域，<br />
            我們是來自一群喜愛巧克力的夥伴一起合作，<br />
            秉持"療育您的心靈"的理念，<br />
            讓每一位遠道而來的貴賓，<br />
            都能感受本店細緻、溫暖、熱忱．<br />
            讓巧克力甜點成為療育您的心靈，<br />
            並且不定期帶來新的作品，<br />
            以及沒見過的創意，分享給大家！
          </div>
        </div>
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
      msg: '關於我們',
      image: './product/玫瑰禮讚巧克力蛋糕.jpg',
      image2: './slider/3.jpg',
      logo: './image/logo-black.svg',
    };
  },
};
</script>

<style lang="scss" scoped>
.parallax{
    height: 28vw;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    &:before{
        content: '';
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
}
.material-icons-outlined {
  border-radius: 50%;
  border: 2px solid;
}
.about-content{
    line-height: 35px;
}
</style>

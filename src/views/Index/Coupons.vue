<template>
<div class="inner-page bg-white">
    <InnerBanner :msg="msg" />
    <div class="container py-17 mb-17 w-100" style="height: 500px;">
      <div class="row">
        <div class="col-6" v-for="card in couponGroup" :key="card">
          <div class="game-box text-center position-relative">
            <div class="card" :class="select === `${card.select}` ? 'active' : ''"
            @click="selectCard(card.select)">
              <div class="content">
                <div class="front bg-gray-400 d-flex align-items-center">
                  <img class="text-white img-fluid w-100" :src="logo">
                </div>
                <div class="back  d-flex align-items-center justify-content-center flex-column">
                  <p class="font-weight-bold text-5">恭喜獲得優惠碼</p>
                  <p class="text-5">{{card.code}}</p>
                </div>
              </div>
            </div>
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
      msg: '優惠活動',
      select: '',
      action: true,
      poke: './card.png',
      logo: './image/logo.svg',
      couponGroup: [
        {
          select: 'a',
          code: 'aaa',
        },
        {
          select: 'b',
          code: 'bbb',
        },
      ],
    };
  },
  methods: {
    selectCard(value) {
      if (this.action === true) {
        this.select = value;
        this.action = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.card {
  position: absolute;
  width: 100%;
  max-width: 300px;
  height: 28vw;
  max-height: 300px;
  perspective: 500px;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card{
  &.active{
    .content {
      transform: rotateY( 180deg ) ;
    }
  }
}

.front {
  background-size: cover;
  background-position: top;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  backface-visibility: hidden; /* 隐藏背面 */
}

.back {
  transform: rotateY( 180deg ); /* 反面卡片翻转和正面卡片贴合 */
}

</style>

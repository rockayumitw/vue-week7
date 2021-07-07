<template>
  <div class="recommend-products">
    <div class="maybe-you-like text-5 mb-5">你可能會喜歡</div>
    <div class="">
      <swiper
        :observer="true"
        :slidesPerView="3"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :breakpoints='{
            "320": {
              "slidesPerView": 2,
              "spaceBetween": 10
            },
            "640": {
              "slidesPerView": 2,
              "spaceBetween": 10
            },
            "768": {
              "slidesPerView": 3,
              "spaceBetween": 10
            },
            "1024": {
              "slidesPerView": 4,
              "spaceBetween": 10
            }
          }'
        :navigation="true"
        class="mySwiper"
      >
        <swiper-slide v-for="item in recommendProducts" :key="item">
          <RecommendProductCard :product="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';
import RecommendProductCard from '@/components/RecommendProductCard.vue';

SwiperCore.use([Pagination]);

export default {
  props: ['recommendProducts'],
  components: {
    Swiper,
    SwiperSlide,
    RecommendProductCard,
  },
};
</script>

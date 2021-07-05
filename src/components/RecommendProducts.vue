<template>
  <div class="recommend-products">
    <div class="text-5 mb-5">你可能會喜歡</div>
    <div class="">
      <swiper
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
          <router-link
            :to="'/product/'+item.id"
            target= '_blank'
            class="card border-0 rounded-0"
          >
            <div class="overflow-hidden rounded">
              <div
                class="item-product-pic _lg"
                :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
              ></div>
            </div>
            <div class="ellipsis text-gray-400" style="height: 50px;">{{ item.title }}</div>
            <div>
                <del class="text-2 text-gray-200">
                    {{ $filters.currency(item.origin_price) }}
                </del>
                <div class="text-gray-400">{{ $filters.currency(item.price) }}</div>
            </div>
          </router-link>
          <button class="btn btn-primary text-white w-100"
          @click="$store.dispatch('frontend/fetchAddToCart', {product_id: item.id, qty: qty})">
            加入購物車
          </button>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]);

export default {
  props: ['recommendProducts'],
  data() {
    return {
      qty: 1,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

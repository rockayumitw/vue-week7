<template>
    <div class="home">
    <!--slider-->
    <div class="slider index-carousel">
      <div v-for="slide in swiperList" :key="slide"
        style="height: 30vw; overflow: hidden; index-carousel">
        <router-link to="/" style="display: block;">
          <img :src="slide" class="img-fluid w-100 h-100">
        </router-link>
      </div>
    </div>
    <!--slider-->
    <!--最新消息-->
    <div class="news py-7">
      <div class="container">
        <div class="section-title text-center mb-10">
          <small class="text-primary">News</small>
          <div class="text-5 text-white">最新消息</div>
        </div>
        <!--最新消息項目-->
        <ul>
          <li class="mb-9" v-for="article in articleLists" :key="article.id">
            <NewCard :article="article"/>
          </li>
        </ul>
        <!--最新消息項目-->
        <div class="text-center mb-17">
          <router-link to="/News" class="btn btn-secondary text-white">
            瀏覽更多最新消息
          </router-link>
        </div>
      </div>
    </div>
    <!--最新消息-->
    <!--熱門商品-->
    <div class="hot-products mt-17">
      <div class="row">
        <div class="col-12 col-md-4 text-left d-none d-md-flex">
          <div class="p-5 pl-12 d-flex justify-content-center flex-column">
            <div class="font-weight-bold text-6 text-white">HOT PRODUCT</div>
            <small class="text-white text-3 font-weight-bold mb-2">熱門商品</small>
            <p class="text-white">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Eu mi bibendum neque egestas congue quisque egestas.
              Varius morbi enim nunc faucibus a pellentesque.
              Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-8">
          <swiper
          :centeredSlides="true"
          :spaceBetween="10"
          :grabCursor="true"
          :loop="true"
          :scrollbar='{
            "hide": true
          }'
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
              "slidesPerView": 2,
              "spaceBetween": 10
            },
            "1024": {
              "slidesPerView": 4,
              "spaceBetween": 10
            }
          }' class="mySwiper">
              <swiper-slide v-for="product in hotProductLists" :key="product">
                <a href="/" class="item-hot-product-image"
                :style="{ backgroundImage: 'url(' + product + ')' }">
                </a>
              </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!--新品上架-->
    <br/><br/><br/><br/><br/><br/><br/><br/>

  </div>
</template>

<script>
// @ is an alias to /src

import $ from 'jquery';
import 'slick-carousel/slick/slick';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';
import { mapGetters } from 'vuex';
import NewCard from '@/components/NewCard.vue';

SwiperCore.use([Pagination]);

export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide,
    NewCard,
  },
  computed: {
    ...mapGetters({
      articleLists: 'frontend/articleLists',
      loading: 'all/loading',
      pagination: 'frontend/pagination',
    }),
  },
  data() {
    return {
      swiperList: [
        './slider/1.jpg',
        './slider/2.jpg',
        './slider/3.jpg',
        './slider/4.jpg',
      ],
      hotProductLists: [
        './img/hotProduct/1.jpg',
        './img/hotProduct/1.jpg',
        './img/hotProduct/1.jpg',
        './img/hotProduct/1.jpg',
        './img/hotProduct/1.jpg',
      ],
    };
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetArticleLists', 1);
  },
  mounted() {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      speed: 1500,
      autoplay: true,
      cssEase: 'ease',
      easing: 'easeInOutCirc',
      autoplaySpeed: 3500,
      pauseOnHover: false,
      centerMode: true,
      accessibility: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: true,
            centerMode: false,
            fade: true,
          },
        },
      ],
    });
  },
};
</script>

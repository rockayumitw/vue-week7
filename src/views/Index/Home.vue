<template>
    <div class="home">
    <!--slider-->
    <div class="carousel index-carousel">
      <div v-for="slide in swiperLists" :key="slide"
        class="slick-item overflow-hidden index-carousel position-relative">
        <router-link :to="slide.url" style="display: block;">
          <div class="slick-item-pic">
            <img :src="slide.imageUrl" class="img-fluid w-100 h-100">
          </div>
        </router-link>
        <!--description-->
        <div class="slick-description position-absolute bottom-0">
          <div class="text-gray-100 text-1 item-sub-title">
            {{slide.subTitle}}
          </div>
          <div class="item-title text-white text-5 font-weight-bold">
            《 {{slide.title}} 》
          </div>
          <div class="item-content text-gray-200">{{slide.content}}</div>
        </div>
        <!--description-->
      </div>
    </div>
    <!--分類-->
    <div class="category py-17 pt-md-0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="item-category overflow-hidden position-relative rounded">
              <div class="item-grid" role="button" @click="$router.push('/products?categoryId=1')">
                <a href="javascript:;" class="item-box pic1"></a>
                <div class="item-content
                text-white d-flex justify-content-center align-items-center flex-column">
                  <h2 class="text-white text-center">
                    精選甜品
                  </h2>
                  <div class="text-white text-center">
                    創新精緻甜點，療育您的心靈
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="item-category overflow-hidden position-relative rounded">
            <div class="item-grid" role="button" @click="$router.push('/products?categoryId=2')">
              <a href="/" class="item-box pic2"></a>
              <div class="item-content
              text-white d-flex justify-content-center align-items-center flex-column">
                <h2 class="text-white text-center">
                  特調飲品
                </h2>
                <div class="text-white text-center">
                  獨家特調巧克力比例，值得您來品嘗
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="item-category overflow-hidden position-relative rounded">
            <div class="item-grid" role="button" @click="$router.push('/products?categoryId=3')">
              <a href="/" class="item-box pic3"></a>
              <div class="item-content
              text-white d-flex justify-content-center align-items-center flex-column">
                <h2 class="text-white text-center">
                  消暑冰品
                </h2>
                <div class="text-white text-center">
                  特製黃金比例，夏天消暑的好利器
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <!--slider-->
    <!--最新消息-->
    <div class="news py-17">
      <div class="container">
        <div class="section-title text-center mb-10">
          <small class="text-primary">News</small>
          <div class="text-5 text-white">最新消息</div>
        </div>
        <!--最新消息項目-->
        <ul>
          <li class="mb-9" v-for="article in newsLists" :key="article.id">
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
    <div class="hot-products products-section my-17">
      <div class="container font-weight-bold text-6 text-white mb-5">
        HOT PRODUCT
      </div>
          <swiper
          :spaceBetween="10"
          :grabCursor="true"
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
              "spaceBetween": 20
            },
            "1024": {
              "slidesPerView": 6,
              "spaceBetween": 20
            }
          }' class="mySwiper">
              <swiper-slide v-for="product in hotProductLists"
              :key="product" class="overflow-hidden product-list">
                <BuyProductCard :product="product" @add-to-cart="addToCart"/>
              </swiper-slide>
          </swiper>
    </div>

    <!--新品上架-->
    <div class="newProducts products-section my-17">
      <div class="container">
        <div class="section-title text-center mb-10">
          <small class="text-primary">New Product</small>
          <div class="text-5 text-white">新品上市</div>
        </div>
        <swiper
          :spaceBetween="10"
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
          }' class="mySwiper">
              <swiper-slide v-for="product in NewProductLists"
              :key="product" class="overflow-hidden position-relative product-list">
                <!-- <ProductCard :product="product"/> -->
                <BuyProductCard :product="product" @add-to-cart="addToCart"/>
              </swiper-slide>
          </swiper>
      </div>
    </div>
    <!--相關連結-->
    <div class="newProducts products-section my-17">
      <div class="container">
        <div class="section-title text-center mb-10">
          <small class="text-primary">Related Links</small>
          <div class="text-5 text-white">相關連結</div>
        </div>
        <swiper
          :spaceBetween="10"
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
              "slidesPerView": 4,
              "spaceBetween": 10
            },
            "1024": {
              "slidesPerView": 5,
              "spaceBetween": 10
            }
          }' class="mySwiper">
              <swiper-slide v-for="item in relatedLists"
              :key="item" class="overflow-hidden position-relative product-list">
                <a :href="item.url" target="_blank">
                  <img :src="item.image">
                </a>
              </swiper-slide>
          </swiper>
      </div>
    </div>
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
// import ProductCard from '@/components/ProductCard.vue';
import BuyProductCard from '@/components/BuyProductCard.vue';

SwiperCore.use([Pagination]);

export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide,
    NewCard,
    // ProductCard,
    BuyProductCard,
  },
  computed: {
    ...mapGetters({
      articleLists: 'frontend/articleLists',
      pagination: 'frontend/pagination',
      productLists: 'frontend/productLists',
    }),
    newsLists() {
      return this.articleLists.slice(1, 5);
    },
    hotProductLists() {
      return this.productLists;
    },
    NewProductLists() {
      const data = this.productLists.slice(1, 7);
      return data;
    },
  },
  data() {
    return {
      swiperLists: [
        {
          imageUrl: './slider/1.jpg',
          subTitle: '新 品 上 市',
          title: '巧克力櫻桃香草冰淇淋蛋糕',
          content: '酸中帶甜的櫻桃內餡',
          url: '/product/-MdX80JGdfjDT8JzNXSB',
        },
        {
          imageUrl: './slider/2.jpg',
          subTitle: '新 品 上 市',
          title: '玫瑰禮讚榛果巧克力蛋糕',
          content: '高雅氣質尊貴不凡',
          url: '/product/-MbqMiKg71j3E2bykz6l',
        },
        {
          imageUrl: './slider/3.jpg',
          subTitle: '新 品 上 市',
          title: '巧克力甜甜圈',
          content: '大人與小朋友都喜愛的口味 :D',
          url: '/product/-MaYvinjJ0Ahi-_Y7C-u',
        },
        {
          imageUrl: './slider/4.jpg',
          subTitle: '新 品 上 市',
          title: '白/黑巧克力交響曲蛋糕',
          content: '生日蛋糕的首選 :D',
          url: '/product/-M_kblUuQett2o1b4PSH',
        },
      ],
      relatedLists: [
        {
          url: 'https://www.starbucks.com.tw/home/index.jspx?r=55',
          image: './related/1.png',
        },
        {
          url: 'https://cjsj-official.com/shop/',
          image: './related/2.png',
        },
        {
          url: 'https://www.creamtea.com.tw/tw/about/index.aspx',
          image: './related/3.png',
        },
        {
          url: 'https://www.heti-hotel.com.tw/index.php',
          image: './related/4.png',
        },
        {
          url: 'https://www.pinkoi.com/',
          image: './related/5.png',
        },
      ],
    };
  },
  async created() {
    await this.$store.dispatch('frontend/fetchGetArticleLists', 1);
    await this.$store.dispatch('frontend/fetchgetProductLists', 1);
  },
  mounted() {
    $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      speed: 1500,
      // autoplay: true,
      cssEase: 'ease',
      easing: 'easeInOutCirc',
      autoplaySpeed: 3500,
      pauseOnHover: false,
      centerMode: true,
      accessibility: false,
      nextArrow: '<button class="slick-next slick-arrow"><span class="material-icons-outlined text-gray-200 text-6">arrow_forward_ios</span></button>',
      prevArrow: '<button class="slick-prev slick-arrow"><span class="material-icons-outlined text-gray-200 text-6">arrow_back_ios</span></button>',
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
  methods: {
    async addToCart(productId, qty = 1) {
      console.log(productId);
      await this.$store.commit('all/SAVE_SPINNER', productId);
      await this.$store.dispatch('frontend/fetchAddToCart', {
        product_id: productId,
        qty,
      });
    },
  },
};
</script>

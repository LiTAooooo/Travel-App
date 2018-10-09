<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/2d/0d7dc3400a50b502.jpg_750x200_4ca95dd4.jpg',
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg',
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg',
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg',
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/87/534cf2e0a71fff02.jpg_750x200_5c778719.jpg',
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/73/d1ba8edc561d1f02.jpg_750x200_1ae7b013.jpg',
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/7e/19b06067afac3402.jpg_750x200_f613313a.jpg',
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/8a/ef38d29f2791f02.jpg_750x200_c2defee1.jpg',
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg',
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/84/dac9ec3547803502.jpg_750x200_c4906943.jpg',
      }],
    };
  },
};
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
    .wrapper >>> .swiper-pagination-bullet
      width: 6px
      height: 6px
      margin: 0 4px
    >>> .swiper-pagination-bullets
      bottom: 6px
    .wrapper
      height: 0
      padding-bottom: 26.67%
      background: #eee
      .swiper-img
        width: 100%
</style>


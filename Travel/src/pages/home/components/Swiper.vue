<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
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
    };
  },
  props: {
  swiperList: Array,
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    }
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
      padding-bottom: 31.25%
      background: #eee
      .swiper-img
        width: 100%
</style>


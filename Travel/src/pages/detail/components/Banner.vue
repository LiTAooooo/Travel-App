<template>
  <div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1412/89/66dadfb4d982e6f88abad45a3e062342.water.jpg_600x330_4e043224.jpg" />
        <div class="banner-info">
            <div class="banner-title">曲江海洋极地公园(AAAA景区)</div>
            <div class="banner-num">
                <span class="iconfont banner-icon">&#xe600;</span>{{this.imgs.length}}
            </div>
        </div>
        <div class="bg-gradient"></div>
    </div>
    <common-gallery
      v-show="showGallery"
      @closeGallery="handleCloseGallery"
      :imgs="imgs"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery';

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
  },
  data() {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_r_800x800_e9c1d2be.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_r_800x800_56e729ef.png'],
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleCloseGallery() {
      this.showGallery = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      justify-content: space-between
      align-items: center
      position: absolute
      left: .2rem
      right: .2rem
      bottom: .36rem
      color: #fff
      .banner-title
        font-size: .36rem
      .banner-num
        width: 1.2rem
        height: .4rem
        line-height: .4rem
        text-align: center
        font-size: .24rem
        background: rgba(0, 0, 0, .5)
        border-radius: .2rem
        .banner-icon
          font-size: .24rem
          margin-right: .1rem
    .bg-gradient
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .6rem
      background: linear-gradient(
                    to bottom, 
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, .8)
                  )
</style>

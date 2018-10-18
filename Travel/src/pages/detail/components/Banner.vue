<template>
  <div>
      <div class="banner" @click="handleBannerClick">
          <img class="banner-img" :src="bannerImg" />
          <div class="banner-info">
              <div class="banner-title">{{this.sightName}}</div>
              <div class="banner-num">
                  <span class="iconfont banner-icon">&#xe600;</span>{{this.gallaryImgs.length}}
              </div>
          </div>
          <div class="bg-gradient"></div>
      </div>
      
      <fade-animation>
          <common-gallery
            v-show="showGallery"
            @closeGallery="handleCloseGallery"
            :imgs="gallaryImgs"
          ></common-gallery>
      </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery';
import FadeAnimation from 'common/fade-animation/fadeAnimation';

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation,
  },
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array,
  },
  data() {
    return {
      showGallery: false,
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

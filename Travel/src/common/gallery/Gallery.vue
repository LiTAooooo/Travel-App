<template>
    <div class="container" @click="handleGalleryClick">
        <swiper :options="swiperOption">
            <swiper-slide
              v-for="(img, index) of imgs"
              :key="index"
            >
                <div class="img-wrapper">
                    <img class="gallery-img" :src="img" />
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
      },
    };
  },
  methods: {
    handleGalleryClick() {
      this.$emit('closeGallery');
    },
  },
};
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: visible
    width: 100%
  .container
    display: flex
    align-items: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .swiper-pagination
      bottom: -.6rem
      color: #fff
    .img-wrapper
      position: relative
      height: 0
      padding-bottom: 100%
      .gallery-img
        width: 100%
        position: absolute
        top: 0
        bottom: 0
        margin: auto
</style>

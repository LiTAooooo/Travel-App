<template>
    <swiper :options="swiperOption" class="icons">
        <swiper-slide v-for="(page, index) of swiperPages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl">
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
      },
    };
  },
  computed: {
    swiperPages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (Object.prototype.toString.call(pages[page]) !== '[object Array]') {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    >>> .swiper-pagination-bullet
      width: 6px
      height: 6px
      margin: 0 4px !important
      opacity: 1
      background: rgba(144,144,144,0.8)
    >>> .swiper-pagination-bullets
      bottom: 6px
    >>> .swiper-pagination-bullet-active
      background: rgba(0,175,190,.8)
    .swiper-slide
      display: flex
      flex-wrap: wrap
    .icons
      height: 0
      padding-bottom: 50%
      .icon
        width: 25%
        height: 0
        padding-bottom: 1.6rem
        text-align: center
        .icon-img
          height: 0
          padding: 0.15rem 0 1.1rem 0
          .icon-img-content
            width: 1.1rem
        .icon-desc
          margin-top: .1rem
          height: .32rem
          line-height: .32rem
          ellipsis()
</style>

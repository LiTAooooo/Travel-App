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
  data() {
    return {
      iconList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票',
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png',
        desc: '去赏花',
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '成都必游',
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '川剧变脸',
      }, {
        id: '005',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '打卡圣地',
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png',
        desc: '赏秋色',
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游',
      }, {
        id: '008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        desc: '成都熊猫基地',
      }, {
        id: '009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        desc: '成都熊猫基地',
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        desc: '成都熊猫基地',
      }],
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
          height: .28rem
          line-height: .28rem
          ellipsis()
</style>

<template>
    <div>
        <router-link
          tag="span"
          to="/"
          class="back-icon iconfont"
          v-show="!showHeader"
        >&#xe624;</router-link>
        <div class="detail-header" v-show="showHeader" :style="opacityStyle">
            <router-link
              class="detail-back-icon iconfont"
              tag="span"
              to="/"
            >&#xe624;</router-link>景点详情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showHeader: false,
      scrollTimer: null,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        this.showHeader = true;
        this.opacityStyle.opacity = scrollTop <= 163 ? scrollTop / 163 : 1;
      } else {
        this.showHeader = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .detail-header
    z-index: 1
    position: fixed
    top: 0
    left: 0
    right: 0
    color: #fff
    background: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    font-size: .36rem
    .detail-back-icon
      position: absolute
      left: 0
      font-size: .38rem
      padding: 0 .2rem
  .back-icon
    position: fixed
    left: .16rem
    top: .16rem
    width: .7rem
    height: .7rem
    color: #fff
    line-height: .7rem
    text-align: center
    border-radius: 50%
    background: rgba(0, 0, 0, .6)
</style>

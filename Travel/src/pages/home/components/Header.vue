<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
          <div class="header-right">
              {{this.city}}
              <span class="iconfont arrow-icon">&#xe64a;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
  },
};
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
      display: flex
      background: $bgColor
      color: #fff
      height: $headerHeight
      line-height: $headerHeight
      .header-left
        width: .64rem
        text-align: center
        .back-icon
          font-size: .4rem
      .header-input
        flex: 1
        margin: .12rem 0 0 .2rem
        padding-left: .2rem
        height: .62rem
        line-height: .62rem
        background: #fff
        border-radius: .1rem
        color: #ccc
      .header-right
        color: #fff
        padding: 0 .1rem
        .arrow-icon
          font-size: .24rem
</style>


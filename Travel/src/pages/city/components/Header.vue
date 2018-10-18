<template>
    <div class="header">
        <router-link to="/">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader',
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .back-icon
      color: #fff
      float: left
      width: .64rem
      text-align: center
      font-size: .4rem
</style>

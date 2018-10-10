<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array,
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .weekend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    padding-bottom: .1rem
    background: #eee
    .item-img-wrapper
      height: 0
      padding-bottom: 37.87%
      .item-img
        width: 100%
    .item-info
      padding: .14rem .2rem .2rem .2rem
      background: #fff
      .item-title
        line-height: .48rem
        font-size: .28rem
        ellipsis()
      .item-desc
        line-height: .42rem
        font-size: .24rem
        color: #616161
        ellipsis()
</style>


<template>
    <div class="list">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                      class="button-wrapper"
                      v-for="hotCity of hotCities"
                      :key="hotCity.id"
                      @click="handleCityClick(hotCity.name)"
                    >
                        <div class="button">{{hotCity.name}}</div>
                    </div>
                </div>
            </div>
            
            <div
              class="area"
              v-for="(city, key) of cities"
              :key="key"
              :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <ul class="item-list">
                    <li
                      class="item border-bottom"
                      v-for="item of city"
                      :key="item.id"
                      @click="handleCityClick(item.name)"
                    >
                      {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
  },
  computed: {
    ...mapState(['city']),
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']),
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
  mounted() {
    this.scroll = new Bscroll('.list', { click: true });
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: fixed
    top: $cityListOffsetTop
    left: 0
    right: 0
    bottom: 0
    z-index: -1
    .title
      line-height: .72rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .30rem
    .button-list
      display: flex
      flex-wrap: wrap
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        width: 33.33%
        text-align: center
        .button
          margin: .1rem
          padding: .16rem 0
          border: .02rem solid #ccc
          border-radius: .06rem
          font-size: .30rem
    .item-list
      .item
        padding-left: .2rem
        line-height: .82rem
        font-size: .32rem
</style>

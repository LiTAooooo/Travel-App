<template>
  <div>
      <div class="search">
          <span class="iconfont search-icon">&#xe632;</span>
          <input
            v-model="keyword"
            class="search-input"
            type="text"
            placeholder="输入城市名或拼音" 
            @focus="handleInputFocus"
            @blur="handleInputBlur"/>
      </div>
      <div
        class="search-content"
        v-show="keyword"
      >
          <ul>
              <li
                v-for="item of queryList"
                :key="item.id"
                class="search-item border-bottom"
                @click="handleCityClick(item.name)"
              >
                {{item.name}}
              </li>
              <li class="search-item border-bottom" v-show="!hasQueryResult">无匹配城市</li>
          </ul>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex';

export default {
  name: 'CitySearch',
  data() {
    return {
      keyword: '',
      queryTimer: null,
      queryList: [],
    };
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']),
    ...mapMutations(['changeInputState']),
    handleInputFocus() {
      this.changeInputState(true);
    },
    handleInputBlur() {
      this.changeInputState(false);
    },
  },
  props: {
    cities: Object,
  },
  computed: {
    hasQueryResult() {
      return this.queryList.length;
    },
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.queryList = [];
        return;
      }
      if (this.queryTimer) {
        clearTimeout(this.queryTimer);
      }
      this.queryTimer = setTimeout(() => {
        const result = [];
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) === 0 || value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
        }
        this.queryList = result;
      }, 100);
    },
  },
  mounted() {
    this.scroll = new Bscroll('.search-content', { click: true });
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    position: relative
    padding: 0 .1rem
    height: $searchHeight
    background: $bgColor
    .search-icon
      position: absolute
      top: .14rem
      left: .24rem
      color: #666
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: .13rem .16rem .13rem .56rem
      font-size: .30rem
      line-height: .36rem
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: fixed
    top: $cityListOffsetTop
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .82rem
      padding-left: .2rem
      font-size: .32rem
      color: #666
      background: #fff
</style>

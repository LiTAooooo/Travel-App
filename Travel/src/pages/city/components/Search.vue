<template>
  <div>
      <div class="search">
          <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
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
    this.scroll = new Bscroll('.search-content');
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    padding: 0 .1rem
    height: $searchHeight
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      padding: 0 .1rem
      height: .62rem
      line-height: .62rem
      text-align: center
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
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>

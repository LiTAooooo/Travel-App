<template>
    <ul class="list">
        <li
          class="item"
          v-for="letter of letters"
          :key="letter"
          :ref="letter"
          @click="handleAlphabetClick"
          @touchmove="handleTouchMove"
        >
          {{letter}}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object,
  },
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    handleAlphabetClick(e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchMove(e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        const currentClientY = e.touches[0].clientY;
        const index = Math.floor((currentClientY - this.firstLetterClientY) / 20);
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index]);
        }
      }, 16);
    },
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
    firstLetterClientY() {
      const firstLetter = this.letters[0];
      return this.$refs[firstLetter][0].offsetTop;
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    bottom: 0
    right: 0
    padding-top: $cityListOffsetTop
    .item
      text-align: center
      width: .5rem
      line-height: .4rem
      color: $bgColor
</style>

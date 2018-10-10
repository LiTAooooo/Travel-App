<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">B</li>
        <li class="item">C</li>
        <li class="item">D</li>
        <li class="item">E</li>
    </ul>
</template>

<script>

export default {
  name: 'CityAlphabet',
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: $headerHeight + .72rem;
    bottom: 0
    right: 0
    padding-right: .12rem
    .item
      line-height: .4rem
      color: $bgColor
</style>

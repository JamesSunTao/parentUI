<template lang="pug">
  .vk-report-achievement-container
    .vk-achievement-bg
      .vk-achievement-hint
      .vk-achievement-rote(:style="roteStyle")
</template>
<script>
import aPuls from '../../asstes/images/head-a+.png'
import a from '../../asstes/images/head-a.png'
import bPuls from '../../asstes/images/head-b+.png'
import b from '../../asstes/images/head-b.png'
import cPuls from '../../asstes/images/head-c+.png'
import c from '../../asstes/images/head-c.png'

const achienementMapping = {
  aPuls: aPuls,
  a: a,
  bPuls: bPuls,
  b: b,
  cPuls: cPuls,
  c: c
}
export default {
  props: {
    rote: String
  },
  computed: {
    roteStyle() {
      return {'background-image': `url(${achienementMapping[this.rote]})`}
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../asstes/style/mixin.styl'
.vk-achievement-bg
  margin 0 auto
  width 150px
  height 150px
  position relative
  background-image url('../../asstes/images/head-bg.png')
  background-size cover
  .vk-achievement-rote
    width 52px
    height 70px
    allCenter()
</style>


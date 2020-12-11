<template lang="pug">
  .vk-report-achievement-container
    .vk-achievement-bg
      .vk-achievement-hint(v-if="hintText" @click="openHint")
      .vk-achievement-rote(:style="roteStyle")
</template>
<script>
import aPuls from '../../asstes/images/head-a+.png'
import a from '../../asstes/images/head-a.png'
import bPuls from '../../asstes/images/head-b+.png'
import b from '../../asstes/images/head-b.png'
import cPuls from '../../asstes/images/head-c+.png'
import c from '../../asstes/images/head-c.png'
import $dialog from '../../../dialog/index.js'
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
    rote: String,
    hintText: String
  },
  computed: {
    roteStyle() {
      return {'background-image': `url(${achienementMapping[this.rote]})`}
    }
  },
  methods: {
    openHint() {
      $dialog({
        hasCancel: false,
        textCenter: true,
        text: this.hintText,
        confirm: '我知道了'
      })
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
  .vk-achievement-hint
    display inline-block
    height 13px
    width 13px
    position absolute
    top 30%
    right 15%
    background-image url('../../asstes/images/hint.png')
    position absolute
    background-size cover
  .vk-achievement-rote
    width 52px
    height 70px
    allCenter()
</style>


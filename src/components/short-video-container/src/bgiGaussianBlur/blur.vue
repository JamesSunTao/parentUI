<template>
  <div class="bgi-blur" v-if="bgi">
    <img :src="bgi" alt="">
  </div>
</template>
<script>
export default {
  name: 'blur',
  props: {
    bgi: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
// chrome 18.0 firefox 35.0 safari 6.0 open 15.0 IE X
// filter CSS3 滤镜 blur 高斯模糊
  .bgi-blur
    position absolute
    height 100vh
    top 0
    opacity .7
    z-index 1
    img
      width 100%
      height 100%
      -webkit-filter: blur(25px);
      -moz-filter: blur(25px);
      -ms-filter: blur(25px);
      filter: blur(25px);
</style>


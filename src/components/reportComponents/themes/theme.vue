<template lang="pug">
  .vk-report-container(style="background-size: contain")
    component(:is="'report-head-image'")
</template>

<script>
import queryString from 'query-string'
const qs = queryString.parse(window.location.search) || queryString.parse(window.location.hash)
export default {
  created() {
   let {theme}  = this.$route.query
    window.document.documentElement.setAttribute('data-theme', theme)
  }
}
</script>

<style lang="stylus" scoped>
@import '../asstes/style/mixin.styl'
.vk-report-container
  height 100vh
  text-align left
  bg_color(background)
</style>

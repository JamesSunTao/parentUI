<template lang="pug">
  .container
    .content
      short-video-container(:videolist="videolist" :allowProgress="blur" :viewHeight="600")
</template>
<script>
import videolist from '../../util/__videoList.js'
export default {
  data() {
    return {
      videolist: videolist.data,
      blur: false
    }
  },
  created() {
    if (this.$route.query.progress == 1){
      this.blur = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  text-align left
  background #000
  height 100%
  .content
    height calc(100% - 80px)
</style>

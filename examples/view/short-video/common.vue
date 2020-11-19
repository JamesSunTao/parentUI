<template lang="pug">
  .container
    .content
      short-video-container(:active-index="2" :videolist="videolist")
</template>
<script>
import videolist from '../../util/__videoList.js'
export default {
  data() {
    return {
      videolist: videolist.data
    }
  },
}
</script>
<style lang="stylus" scoped>
.container
  text-align left
  background #000
  height 100%
  .content
    height 100%
</style>

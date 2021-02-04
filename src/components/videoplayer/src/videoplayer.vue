<template>
  <div class="video-palyer-panel">
    <img class="close-btn" src="../img/icon-close.png" @click="closeFn"/>
    <div class="video">
      <video v-show="videoPlaying" ref="jsvideo" custom-cache="false" preload="none" :src="videoUrl" controls="controls" webkit-playsinline="true" x-webkit-airplay="true"></video>
      <div class="cover" v-show="!videoPlaying">
        <img class="cover-img" :src="coverUrl"/>
        <img class="icon-play" src="../img/icon-play-video.png" @click="watchVideo"/>
      </div>
      <div v-show="!videoPlaying" class="cover-opacity"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoplayer',
  props: {
    coverUrl: {
      type: String,
      default: ''
    },
    videoUrl: {
      required: true,
      type: String,
      default: ''
    },
  },
  data: function() {
    return {
      videoPlaying: false
    }
  },
  methods: {
    watchVideo() {
      this.videoPlaying = true
      let video = this.$refs.jsvideo
      video.play()
      video.addEventListener('pause', () => {
        this.videoPlaying = false
      })
      video.addEventListener('play', () => {
        this.videoPlaying = true
      })
    },
    closeFn() {
      this.videoPlaying = false
      this.$emit('videoclose')
    }
  }
}
</script>

<style lang="stylus" scoped>
.video-palyer-panel
  position: fixed
  width: 100%
  height: 100%
  top: 0px
  bottom: 0px
  left: 0px
  background-color: #333333
  z-index: 20
  .close-btn
    position: absolute
    width: 35px
    height: 35px
    right: 12px
    top: 12px
    &:active
      opacity: 0.7
  .video
    position: relative
    width: 100%
    height: 300px
    left: 0px
    top: 50%
    margin-top: -150px
    video 
      width: 100%
      height: 100%
    .cover-opacity
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      z-index: 12
      background-color: #333
      opacity: 0.1
    .cover
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      .cover-img
        width: 100%
        height: 100%
      .icon-play
        position: absolute
        display: inline-block
        z-index: 13
        top: 50%
        left: 50%
        margin-left: -32.5px
        margin-top: -32.5px
        width: 65px
        height: 65px
        &:active
          opacity: 0.9

</style>

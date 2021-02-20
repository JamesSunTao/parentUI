<template>
  <div class="vk-video-palyer-panel" @click="videoPause">
    <img class="vk-close-btn" src="../img/icon-close.png" @click.stop="closeFn"/>
    <div class="vk-video">
      <video v-show="videoPlaying" :autoplay="autoplay" ref="jsvideo" :loop="loop" custom-cache="false" preload="none" :src="videoUrl" :controls="controls" webkit-playsinline="true" x-webkit-airplay="true"></video>
      <div class="vk-cover" v-show="!videoPlaying">
        <img class="vk-cover-img" :src="coverUrl"/>
        <img class="vk-icon-play" src="../img/icon-play-video.png" @click.stop="videoPlay"/>
      </div>
      <div v-show="!videoPlaying" class="vk-cover-opacity"></div>
    </div>
    <div class="vk-video-controls" v-if="!controls">
      <div class="vk-video-progress" ref='video-progres'>
        <div class="vk-video-progress-bar" :style="barStyle">
          <span ref="video-progres-bar"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoplayer',
  props: {
    coverUrl: {
      type: String,
      default: 'https://img.vipkidstatic.com/prt/image/tools/upload/gJXZOOBM6NlrD.png'
    },
    videoUrl: {
      required: true,
      type: String,
      default: ''
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    customControls: {
      type: String,
      default: 'normal'
    }
  },
  data: function() {
    return {
      videoPlaying: false,
      videoTime: 0,
      videoTimeTotal: 1000,
    }
  },
  computed: {
    barStyle() {
      return { width: (100 * this.videoTime / this.videoTimeTotal).toFixed(2) + '%' }
    }
  },
  mounted() {
    let video = this.$refs.jsvideo
    let progres = this.$refs['video-progres'] // 外
    let bar = this.$refs['video-progres-bar'] // 里
    video.addEventListener('loadstart', () => {
      this.$emit('loadstart')
      this.videoTime = 0
    })
    video.addEventListener('pause', () => {
      // 视频暂停
      this.$emit('pause')
    })
    video.addEventListener('play', () => {
      this.videoPlaying = true
      this.$emit('play')
    })
    video.addEventListener('timeupdate', () => {
      // 目前的播放位置已更改时，播放时间更新
      this.$emit('timeupdate', video.currentTime)
      this.videoTime = video.currentTime
    })
    video.addEventListener('durationchange', () => {
      // 时长变化时
      this.$emit('durationchange', video.duration)
      this.videoTimeTotal = video.duration
    })
    if (!this.controls) {
      let touchWidth = 0
      let cirW = bar.offsetWidth / 2
      bar.addEventListener('touchstart', (event) => {
        this.videoPlay()
        let touch = event.targetTouches[0]
        touchWidth = touch.clientX - bar.offsetLeft - progres.offsetLeft
      })
      bar.addEventListener('touchmove', (event) => {
        event.preventDefault()
        let touch = event.targetTouches[0]
        let oLeft = touch.clientX - progres.offsetLeft - touchWidth
        let durationWidth = oLeft + cirW
        // 边界检测
        if (oLeft < -cirW) {
          oLeft = -cirW
          durationWidth = 0
        } else if (oLeft > progres.offsetWidth - cirW) {
          oLeft = progres.offsetWidth - cirW
          durationWidth = progres.offsetWidth
        }
        let rate = durationWidth / progres.offsetWidth * 100
        this.videoTime = (rate * this.videoTimeTotal) / 100
        video.currentTime = this.videoTime
      })
    }
  },
  methods: {
    videoPlay() {
      this.videoPlaying = true
      let video = this.$refs.jsvideo
      video && video.play()
    },
    videoPause() {
      if (this.controls) return
      this.videoPlaying = false
      let video = this.$refs.jsvideo
      video && video.pause()
    },
    closeFn() {
      this.videoPlaying = false
      this.$emit('videoclose')
    }
  }
}
</script>

<style lang="stylus" scoped>
.vk-video-palyer-panel
  position: fixed
  width: 100%
  height: 100%
  top: 0px
  bottom: 0px
  left: 0px
  background-color: #333333
  z-index: 20
  .vk-close-btn
    position: absolute
    width: 35px
    height: 35px
    right: 12px
    top: 12px
    &:active
      opacity: 0.7
  .vk-video
    position: relative
    width: 100%
    height: 300px
    left: 0px
    top: 50%
    margin-top: -150px
    video 
      width: 100%
      height: 100%
    .vk-cover-opacity
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      z-index: 12
      background-color: #333
      opacity: 0.1
    .vk-cover
      position: absolute
      width: 100%
      height: 100%
      top: 0
      left: 0
      .vk-cover-img
        width: 100%
        height: 100%
      .vk-icon-play
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
  .vk-video-controls
    position absolute
    width 100%
    bottom 10%
    .vk-video-progress
      position relative
      height 3px
      background #787878
      .vk-video-progress-bar
        display inline-block
        background #ffffff
        position absolute
        left 0
        bottom 0
        height 100%
        span
          display inline-block
          width 8px
          height 8px
          position absolute
          right -4px
          bottom -2px
          background #ffffff
          border-radius 50%
</style>
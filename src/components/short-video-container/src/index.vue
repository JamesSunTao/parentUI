<template>
    <div class="vk-video-list" v-cloak v-if="videolist.length > 0">
      <div class="vk-video-cover-list"
        :style="trackStyle"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @touchcancel="handleTouchEnd"
        @transitionend="handleTransitionEnd"
      >
        <div class="video-content" :style="{height: viewHeight + 'px', top: viewHeight * active + 'px'}">
          <video
            v-if="videolist.length > 0"
            :src="videolist[videoContentId].url"
            :poster="videolist[videoContentId].coverImage"
            :class="[!videoHasPlay? 'hide':'', videolist[videoContentId][screenConfig.screenTypeCode] == screenConfig.screenType? 'vertical':'horizontal']"
            ref="videoContainer"
            type="video/mp4"
            autoplay="autoplay"
            preload="none"
            webkit-playsinline="true"
            playsinline="true"
            x-webkit-airplay="true"
          >
          </video>
        </div>
        <div class="video-item"
          v-for="(item, idx) in videolist"
          :key="idx"
          :style="{height: viewHeight + 'px'}">
            <img
              :class="['video-cover', item[screenConfig.screenTypeCode] == screenConfig.screenType? 'vertical':'horizontal']"
              :src="item.coverImage"
              ref='img'
              v-show="!videoHasPlay || idx !== videoContentId"
            >
            <div class="video-playbtn" v-show="!userPlaying || idx !== videoContentId"></div>
            <slot :row="item"></slot>
        </div>
      </div>
        <div class="info-progress" ref='video-progress'>
          <span :style="barStyle"></span><i ref="video-progres" v-if="allowProgress"></i>
        </div>
    </div>
</template>
<script>
import _blur from './bgiGaussianBlur/index.js'
export default {
  name: 'short-video-container',
  data() {
    return {
      start: 0, //滑动
      delta: 0, //滑动距离
      isOver: false,
      active: 0,
      hasView: NaN, //用于判断当前播放视频是否是当前active
      videoContentId: 0,
      videoTime: 0,
      videoTimeTotal: 1000,
      videoHasPlay: false,
      videoPlaying: false,
      videoLoading: false,
      userPlaying: false,
      startTime: 0,
      clickCount: 0
    }
  },
  watch: {
    active(value) {
      if (this.blur) {
        this.openBlur(value)
      }
    }
  },
  computed: {
    deltaY() {
      return -this.viewHeight * this.active + this.delta
    },
    trackStyle() {
      return {
        transform: `translateY(${this.deltaY}px)`,
        transition: this.isOver ? 'transform 0.4s ease 0s' : '',
      }
    },
    barStyle() {
      return { width: (100 * this.videoTime / this.videoTimeTotal).toFixed(2) + '%' }
    }
  },
  props: {
    videolist: {
      type: Array,
      default: () => {
        /**
         * @url {String} 视频路径
         * @coverImage {String} 视频封面图
         * @horizontal {Boolean} 视频是为横屏 默认为 true
         */
        return []
      }
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    allowProgress: { //是否支持进度条拖拽
      type: Boolean,
      default: false
    },
    blur: { //是否开启视频封面 背景高斯模糊
      type: Boolean,
      default: false
    },
    delayClick: { //单击延时时长
      type: Number,
      default: 10
    },
    viewHeight: {
      type: Number,
      default: window.innerHeight
    },
    screenConfig: {
      type: Object,
      default: () => {
        return {
          screenTypeCode: 'horizontal',
          screenType: '1',
        }
      }
    },
    pauseImage: { //自定义暂停图片
      type: String,
      default: ''
    }
  },
  created() {
    if(this.activeIndex > 0) {
      this.active = this.activeIndex
      this.videoContentId = this.active
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.videoPause()
    _blur({
      bgi: ''
    })
  },
  methods: {
    init() {
      setTimeout(this.addVideoEvent, 500)
      if (this.blur) {
        this.openBlur(0)
      }
    },
    // 监听媒体视频组件
    addVideoEvent() {
      let v = this.$refs.videoContainer
      let progres = this.$refs['video-progres']
      let progress = this.$refs['video-progress']
      if (v) {
        v.addEventListener('loadstart', () => {
          // 暴露视频加载事件
          this.$emit('loadstart', this.videolist[this.active])
          this.videoTime = 0
          this.videoLoading = this.userPlaying
        })
        v.addEventListener('canplay', () => {
          // 视频能够播放时 事件
          this.$emit('canplay', this.videolist[this.active])
          this.videoLoading = false
          this.userPlaying ? this.videoPlay() : this.videoPause()
        })
        v.addEventListener('waiting', () => {
          this.videoLoading = true
        })
        v.addEventListener('durationchange', () => {
          // 时长变化时
          this.$emit('durationchange', v.duration, this.videolist[this.active])
          this.videoTimeTotal = v.duration
        })
        v.addEventListener('timeupdate', () => {
          // 目前的播放位置已更改时，播放时间更新
          this.$emit('timeupdate', v.currentTime, this.videolist[this.active])
          this.videoTime = v.currentTime
        })
        v.addEventListener('ended', () => {
          // 视频播放完毕
          this.$emit('ended', this.videolist[this.active])
          this.videoPlay()
        })
      }
      // 进度条滑动事件
      if (progres) {
        let touchWidth = 0
        let cirW = progres.offsetWidth / 2
        progres.addEventListener('touchstart', (event) => {
          this.videoPlay()
          let touch = event.targetTouches[0]
          touchWidth = touch.clientX - progres.offsetLeft - progress.offsetLeft
        })
        progres.addEventListener('touchmove', (event) => {
          event.preventDefault()
          let touch = event.targetTouches[0]
          let oLeft = touch.clientX - progress.offsetLeft - touchWidth
          let durationWidth = oLeft + cirW
          // 边界检测
          if (oLeft < -cirW) {
            oLeft = -cirW
            durationWidth = 0
          } else if (oLeft > progress.offsetWidth - cirW) {
            oLeft = progress.offsetWidth - cirW
            durationWidth = progress.offsetWidth
          }
          let rate = durationWidth / progress.offsetWidth * 100
          this.videoTime = (rate * this.videoTimeTotal) / 100
          v.currentTime = this.videoTime
        })
        progres.addEventListener('touchend', () => {
          this.videoPlay()
        })
      }
    },
    videoPlay() {
      let v = this.$refs.videoContainer
      v && v.play()
      this.videoHasPlay = true
      this.videoPlaying = true
      this.userPlaying = true
      const option = {
        flag: this.getHasView(this.active),
        index: this.active
      }
      this.$emit('play', this.videolist[this.active], option)
      this.hasView = this.active
    },
    getHasView(active) {
      return active !== this.hasView
    },
    //视频暂停
    videoPause() {
      let v = this.$refs.videoContainer
      v && v.pause()
      this.userPlaying = false
      this.videoPlaying = false
    },
    //开始滑动
    handleTouchStart(event) {
      this.startTime = new Date().getTime()
      this.delta = 0
      this.start = event.touches[0].clientY
    },
    //滑动中
    handleTouchMove(event) {
      let moving = event.touches[0].clientY
      this.delta = moving - this.start
    },
    //滑动结束
    handleTouchEnd() {
      if (this.delta < -50 && this.active < this.videolist.length - 1) { // 上滑
        this.isOver = true
        this.videoPlaying = false
        this.videoHasPlay = false
        this.active += 1
        this.$emit('slidingup', this.videolist.length - this.active)
      } else if (this.delta > 50 && this.active > 0) { // 下滑
        this.isOver = true
        this.videoPlaying = false
        this.videoHasPlay = false
        this.active -= 1
        this.$emit('slidingdown', this.active)
      } else if (this.delta < 5 && this.delta > -5) { // 点击
        // 单击
        if ( new Date().getTime() - this.startTime >= this.delayClick ) {
          this.videoPlaying ? this.videoPause() : this.videoPlay()
        } else { //双击
          this.clickCount += 1
          if (this.clickCount == 2) {
            this.handleDbclick()
          }
        }
      } else {
        this.isOver = true
      }
      this.delta = 0
    },
    //滑块过度结束
    handleTransitionEnd() {
      this.isOver = false
      this.videoContentId = this.active
    },
    handleDbclick() {
      this.clickCount = 0
      // 双击
      this.$emit('dbvedioclick')
    },
    //开启背景图片高斯模糊
    openBlur(index) {
      _blur({
        bgi: this.videolist[index].coverImage
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.vk-video-list
  overflow hidden
  width 100%
  height 100%
  position relative
  z-index 2
  .vk-video-cover-list
    position relative
    .video-content
      overflow: hidden
      position: absolute
      z-index: 50
      width: 100%
      video
        position: absolute
        width: 100%
        top: 35%
        left: 0
        transform: translateY(-50%)
        &.horizontal
          top: 35%
        &.vertical
          top: 0
          transform: translate(0);
        &.hide
          top: 100%
          transform: none
    .video-item
      overflow hidden
      position relative
      z-index 51
      .video-cover
        position absolute
        left: 0
        top: 35%
        width: 100%
        transform: translateY(-50%)
        &.horizontal
          top: 35%
        &.vertical
          top: 0
          transform: translate(0);
      .video-playbtn
        position: absolute
        top: -20%
        right: 0
        bottom: 0
        left: 0
        margin: auto
        width: 56px
        height: 56px
        background: url('./img/icon-music-play.png') center/contain no-repeat
        background-size: cover
  .info-progress
    width 100%
    height 1px
    background #787878
    position: absolute
    bottom: 0
    span
      position: relative
      display: inline-block
      width: 0
      height: 3px
      vertical-align: top
      background: #fff
      z-index: 2
    i
      position absolute
      top -2px
      display: inline-block
      width 8px
      height 8px
      background: #fff
      border-radius 50%
      vertical-align: top
      z-index 2
</style>

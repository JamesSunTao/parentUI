<template lang="pug">
  .vk-pull-loading(:style="{height: pullHeight + 'px'}" :class="{'vk-pull-close':closeShow}")
    span.vk-loading-icon(v-if="loadingShow" :class="statusClass")
</template>
<script>
export default {
  name: 'pullRefresh',
  data() {
    return {
      pullHeight: 0,
      isEnable: true, // 开启下拉刷新
      closeShow: false, // 正常关闭
      status: 'pull', //pull pedding push
      loadingShow: false
    }
  },
  props: {
    refreshClassName: {
      require: true,
      type: String,
    }
  },
  mounted() {
    this.refresh()
  },
  computed: {
    statusClass() {
      return this.status == 'pull' ? 'vk-pull-loading' :  this.status == 'pedding' ? 'vk-pedding-loading' : 'vk-push-loading'
    }
  },
  methods: {
    isEnableFunction(enable) {
      this.isEnable = enable
    },
    refresh() {
      let startYPosition = 0
      let startStatus = false
      document.getElementsByClassName(this.refreshClassName)[0].addEventListener('touchstart', () => {
        if (this.isEnable) {
          this.status = 'pull'
        }
      })
      document.getElementsByClassName(this.refreshClassName)[0].addEventListener('touchmove', (e) => {
        if (!this.isEnable) {
          return
        }
        if (window.pageYOffset <= 0) {
          let nStartY = e.targetTouches[0].pageY
          if (!startStatus) {
            startYPosition = nStartY
            startStatus = true
          } else {
            let movingDistance = nStartY - startYPosition
            if (movingDistance >= 40) {
              this.loadingShow = true
            } else {
              this.loadingShow = false 
            }
            if (movingDistance >= 100) {
              this.pullHeight = 100
              this.status = 'pedding'
              this.closeLoadingSmallShow = true
            } else if (movingDistance <= 0) {
              this.pullHeight = 0
            } else {
              this.pullHeight = movingDistance
            }
          }
        }
      })
      document.getElementsByClassName(this.refreshClassName)[0].addEventListener('touchend', () => {
        if (!this.isEnable) {
          return
        }
        if (!startStatus || this.pullHeight <= 0) {
          startStatus = false
          return
        }
        startStatus = false
         if (this.pullHeight == 100) {
          setTimeout(() => {
            this.$emit('refresh')
            this.closePull()
            this.status = 'push'
          }, 1000)
         } else {
          this.closePull()
         }
      })
    },
    closePull() {
      this.closeShow = true
      setTimeout(() => {
        this.closeShow = false
        this.loadingShow = false
        this.pullHeight = 0
      }, 500)
    }
  }
}
</script>
<style lang="stylus" scoped>
.vk-pull-loading
  width 100%
  max-height: 100px
  background-color: #fff
  text-align: center
  position: relative
  &.vk-pull-close
    animation: close-animation .5s
  .vk-loading-icon
    display inline-block
    width 40px
    height 40px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background-size cover
    &.vk-pull-loading
      background-image: url('../img/push.png')
    &.vk-pedding-loading
      background-image: url('../img/pedding.gif')
    &.vk-push-loading
      background-image: url('../img/pedding.png')
@keyframes close-animation
  100%
    margin-top: -100px
</style>

<template>
  <div
    ref="pswpWrap"
    class="pswp"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    v-cloak
  >
    <div class="pswp__bg"></div>
    <div
      :class="{
        'pswp__scroll-wrap': true,
        'pswp__scroll-withop': showBack || showDelete,
      }"
    >
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>
      <div class="pswp__ui pswp__ui--hidden"></div>
      <div class="pswp__top-bar">
        <!-- <div class="pswp__counter"></div> -->
      </div>
    </div>
    <span
      v-if="showBack"
      class="pswp__button pswp__button--close"
      @click.stop="handleBack"
    ></span>
    <span
      v-if="showDelete"
      class="pswp__button pswp__button--delete"
      @click.stop="deleteImg"
    ></span>
  </div>
</template>
<script>

import PhotoSwipe from 'photoswipe/dist/photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min'

const imageSizeCache = {}
const defaultConfig = {
  pinchToClose: false,
  closeOnScroll: false,
  closeOnVerticalDrag: false,
  tapToClose: true,
  closeEl: true,
  captionEl: false,
  fullscreenEl: false,
  zoomEl: false,
  shareEl: false,
  counterEl: false,
  arrowEl: false,
  preloaderEl: false,
  focus: false,
  hideAnimationDuration: 0,
  spacing: 0,
  history: false,
  errorMsg: '<div class="pswp__error-msg">图片加载失败</div>',
  getDoubleTapZoom: () => 1
}

export default {
  name: 'PreviewImage',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    imageIndex: {
      type: Number,
      default: 0,
    },
    showDelete: {
      type: Boolean,
      default: false
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      slides: this.data || [],
      gallery: null, //
      delItems: []
    }
  },
  watch: {
    data(newVal) {
      if (Array.isArray(newVal)) {
        this.slides = Object.assign([], newVal)
        if (newVal.length > 0) {
          this.$nextTick(() => {
            this.initPhotoSwipe()
          })
        }
      }
    },
  },
  mounted() {
    if (this.slides.length > 0) {
      this.$nextTick(() => {
        this.initPhotoSwipe()
      })
    }
  },
  methods: {
    handleBack() {
      this.$emit('close')
    },
    deleteImg() {
      if (this.$listeners.beforeDelete) {
        this.$listeners.beforeDelete().then(()=>{
          this.delCallback()
        })
      }
    },
    delCallback() {
      let currentIndex = this.gallery.getCurrentIndex()
      this.delItems.push(currentIndex)
      if (this.gallery.items.length === 1) {
        this.$emit('close')
      } else {
        if (currentIndex == this.gallery.items.length - 1) {
          this.gallery.goTo(currentIndex - 1)
        } else {
          this.gallery.goTo(currentIndex)
        }
        this.gallery.invalidateCurrItems()
        this.gallery.items.splice(currentIndex, 1)
        this.gallery.updateSize(true)
      }
    },
    async initPhotoSwipe() {
      let items = []
      for (let i = 0; i < this.slides.length; i++) {
        try {
          let item = await this.loadImage(this.slides[i])
          items.push(item)
        } catch (err) {
          /* eslint-disabled */
        }
      }
      if (items.length) {
        let pswpElement = this.$refs.pswpWrap
        this.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, Object.assign({}, defaultConfig, {
          index: this.imageIndex,
          getThumbBoundsFn: (index) => {
            let thumbnail = items[index].el
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          }
        }))
        this.gallery.init()
        this.gallery.listen('close', () => {
          this._destroy()
          this.$emit('close')
        })
      }
    },
    loadImage(image) {
      return new Promise((resolve, reject) => {
        let src = image && image.src
        if (!src) {
          reject(new Error('不是图片'))
          return
        }
        // 取缓存的图片信息
        let cachedItem = imageSizeCache[src]
        if (cachedItem) {
          resolve({
            el: image,
            src,
            w: cachedItem.w,
            h: cachedItem.h
          })
        } else {
          let imageTest = new Image()
          imageTest.onload = () => {
            imageSizeCache[src] = {w: imageTest.width, h: imageTest.height}
            resolve({
              el: image,
              src,
              w: imageTest.width,
              h: imageTest.height
            })
          }
          imageTest.onerror = () => {
            reject(new Error('图片加载失败'))
          }
          imageTest.src = src
        }
      })
    },
    _destroy() {
      // 销毁
      if (this.gallery) {
        this.gallery.close()
        if (this.delItems.length) {
          this.$emit('delete', this.delItems)
          this.delItems = []
        }
        this.gallery = null
      }
    },
  },
  beforeDestroy() {
    this._destroy()
  },
}
</script>
<style lang="stylus">
.pswp
  display: none
  position: absolute
  width: 100%
  height: 100%
  left: 0
  top: 0
  overflow: hidden
  -ms-touch-action: none
  touch-action: none
  z-index: 150
  -webkit-text-size-adjust: 100%
  -webkit-backface-visibility: hidden
  outline: none
  *
    -webkit-box-sizing: border-box
    box-sizing: border-box
  img
    max-width: none
.pswp__top-bar
  display: flex
  justify-content: space-between
  margin: 16px
.pswp__button
  width: 22px
  height: 22px
  border: 0
  margin: 0
  padding: 0
  &--close
    position: absolute
    top: 16px
    left: 16px
    background: url('../img/back.png') center no-repeat
    background-size: cover
  &--delete
    position: absolute
    top: 16px
    right: 16px
    background: url('../img/trashcan.png') center no-repeat
    background-size: cover
.pswp--animate_opacity
  opacity: 0.001
  will-change: opacity
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1)
  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1)
.pswp--open
  display: block
.pswp--zoom-allowed .pswp__img
  cursor: -webkit-zoom-in
  cursor: -moz-zoom-in
  cursor: zoom-in
.pswp--zoomed-in .pswp__img
  cursor: -webkit-grab
  cursor: -moz-grab
  cursor: grab
.pswp--dragging .pswp__img
  cursor: -webkit-grabbing
  cursor: -moz-grabbing
  cursor: grabbing
.pswp__bg
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  background: #000
  opacity: 0
  -webkit-backface-visibility: hidden
  will-change: opacity
.pswp__scroll-wrap
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  overflow: hidden
.pswp__scroll-withop
  top: 44px
  .pswp__zoom-wrap
    margin-top: -44px
.pswp__container, .pswp__zoom-wrap
  -ms-touch-action: none
  touch-action: none
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
.pswp__container, .pswp__img
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  -webkit-tap-highlight-color: transparent
  -webkit-touch-callout: none
.pswp__zoom-wrap
  position: absolute
  width: 100%
  -webkit-transform-origin: left top
  -ms-transform-origin: left top
  transform-origin: left top
  -webkit-transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1)
  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1)
.pswp__bg
  will-change: opacity
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1)
  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1)
.pswp--animated-in .pswp__bg, .pswp--animated-in .pswp__zoom-wrap
  -webkit-transition: none
  transition: none
.pswp__container, .pswp__zoom-wrap
  -webkit-backface-visibility: hidden
  will-change: transform
.pswp__item
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 0
  overflow: hidden
.pswp__img
  position: absolute
  width: auto
  height: auto
  top: 0
  left: 0
.pswp__img--placeholder
  -webkit-backface-visibility: hidden
.pswp__img--placeholder--blank
  background: #222
.pswp--ie .pswp__img
  width: 100% !important
  height: auto !important
  left: 0
  top: 0
.pswp__error-msg
  position: absolute
  left: 0
  top: 50%
  width: 100%
  text-align: center
  font-size: 14px
  line-height: 16px
  margin-top: -8px
  color: #ccc
  a
    color: #ccc
    text-decoration: underline
.pswp__ui
  -webkit-font-smoothing: auto
  visibility: visible
  opacity: 1
  z-index: 1550
.pswp__element--disabled
  display: none !important
</style>
<template lang="pug">
.container
  headerbar(title="popover")
  .ui-popover
    span.reference-panel
      slot(name="reference" @click="showFn")
    .popover-pannel(
      v-if="isShow"
      :class="{[`position-${position}`]:true, [`theme-${theme}`]:true, 'listpopover': isList }"
      :style="locationstr"
    )
      .popover-arrow
      slot(name="content")
      .popover-text {{text}}
      .close-btn(v-if="hasClosebtn" @click="closeFn")
</template>
<script>
let locationstr
export default {
  name: 'popover',
  // text 传入的文本
  // isList 是否传入的是个列表
  // reference 触发dom
  // position popover 的位置,支持 top,topstart,topend,bottom,bottomstart,bottomend
  // theme主题颜色 dark(黑色) light(白色)
  // hasClosebtn 是否有关闭按钮
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    isList: {
      type: Boolean,
      required: false,
      default: false
    },
    isShow: {
      type: Boolean,
      required: false,
      default: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    trigger: {
      type: String,
      required: false,
      default: 'click'
    },
    position: {
      type: String,
      required: false,
      default: 'bottom'
    },
    hasClosebtn: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  watch: {
    theme(newval) {
      if (newval == 'dark') {
        this.isdark = true
      }
    }
  },
  data() {
    return {
      referenceElm: '',
      popper: '',
      // isShow: true,
      isdark: null,
      location: {
        left: 0
      },
      locationstr: ''
    }
  },
  mounted() {
    if (this.$slots.reference) {
      this.referenceElm = this.$slots.reference[0].elm
    }
    if (this.$slots.content) {
      this.popper = this.$slots.content[0].elm
    }

    if (this.referenceElm) {
      let {width,height,left,top,right} = this.referenceElm.getBoundingClientRect()
      window.console.log(width, height, left, top, right)
      switch (this.position){
        case 'topstart':
        case 'bottomstart':
          this.location.left = this.referenceElm.offsetLeft + 'px'
          break
        case 'top':
        case 'bottom':
          this.location.left = ''
          break
        case 'topend':
        case 'bottomend':
          this.location.left = this.referenceElm.offsetLeft + width + 'px'
          window.console.log(this.location.left)
          break
      }
      window.console.log(this.location)
      for (let key in this.location) {
        this.locationstr += `${key}: ${this.location[key]}`
        window.console.log(key)
      }
      window.console.log(this.locationstr)
    }
    // switch (this.trigger) {
    //   case 'click':
    //     this.referenceElm.addEventListener('click', this.showFn)
    //     document.addEventListener('click', this.handleDocumentClick)
    //     break
    //   case 'focus':
    //     this.referenceElm.addEventListener('focus', this.showFn)
    //     this.referenceElm.addEventListener('blur', this.closeFn)
    //     break;
    // }
  },
  methods: {
    closeFn() {
      this.isShow = false
    },
    showFn() {
      this.isShow = true
    },
    handleDocumentClick(e) {
      if (this.elementContains(this.$el, e.target)) {
        return
      } else {
        this.closeFn()
      }
    },
    elementContains(elm, otherElm) {
      if (typeof elm.contains === 'function') {
        return elm.contains(otherElm)
      }
      return false
    }
  },
}
</script>
<style lang="stylus" scoped>
.ui-popover
  position: relative
  display: flex
  justify-content: center
  font-size: 0
.reference-panel
  display: inline-block
  font-size: 0
.close-btn
  width: 10px
  height: 10px
  background: url('../img/Popoverclose.png') center center/ 100% 100% no-repeat
  position: absolute
  top: 12px
  right: 12px
.popover-arrow
  position: absolute
  width: 0
  height: 0
  border: 6px solid transparent
  &:after
    width: 0
    height: 0
    display: block
    position: absolute
    content: ''
.popover-pannel
  position: absolute
  z-index: 99
  padding: 0 9px
  min-width: 100px
  max-width: 260px
  text-align: left
  font-size: 15px
  color: #2f3338
  background: #ffffff
  border: 1px solid #f2f2f2
  box-shadow: 0px 1px 13px 0px rgba(179,179,179,0.24)
  &.position-bottom .popover-arrow
  &.position-bottomend .popover-arrow
  &.position-bottomstart .popover-arrow
    position: absolute
    top: -12px
    width: 0
    height: 0
    border: 6px solid transparent
    border-bottom-color: #f2f2f2
    &:after
      width: 0
      height: 0
      display: block
      position: absolute
      left: -6px
      top: -5px
      content: ''
      border: 6px solid transparent
      border-bottom-color: #ffffff
  &.position-bottom
    top: 100%
    margin-top: 6px
    .popover-arrow
      left: 50%
      transform: translateX(-50%)
      top: -12px
  &.position-bottomend
    // right: 0
    top: 100%
    margin-top: 6px
    transform: translateX(-100%)
    .popover-arrow
      position: absolute
      right: 30px
      top: -12px
  &.position-bottomstart
    left: 0
    top: 100%
    margin-top: 6px
    .popover-arrow
      left: 30px
      top: -12px

  &.position-top .popover-arrow
  &.position-topend .popover-arrow
  &.position-topstart .popover-arrow
    position: absolute
    bottom: -12px
    width: 0
    height: 0
    border: 6px solid transparent
    border-top-color: #f2f2f2
    &:after
      width: 0
      height: 0
      display: block
      position: absolute
      left: -6px
      top: -6px
      content: ''
      border: 6px solid transparent
      border-top-color: #ffffff
  &.position-top
    bottom: 100%
    margin-bottom: 6px
    .popover-arrow
      position: absolute
      left: 50%
      transform: translateX(-50%)
      width: 0
      height: 0
    &start
      left: 0
      bottom: 100%
      margin-bottom: 6px
      .popover-arrow
        position: absolute
        left: 30px
        width: 0
        height: 0
    &end
      bottom: 100%
      margin-bottom: 6px
      transform: translateX(-100%)
      .popover-arrow
        position: absolute
        right: 30px
        width: 0
        height: 0
.theme-light
  padding: 9px 12px
  border-radius: 16px
  .popover-text
    font-size: 14px
    color: #2F3338
    padding-right: 8px
.theme-dark
  opacity: 0.8
  background: #000000
  padding: 9px 12px
  border-radius: 16px
  border: #000000 !important
  .popover-text
    font-size: 14px
    color: #ffffff
    padding-right: 8px
  &.position-bottom .popover-arrow
  &.position-bottomend .popover-arrow
  &.position-bottomstart .popover-arrow
    border-bottom-color: #000000 !important
    &:after
      border-bottom-color: #000000 !important
  &.position-top .popover-arrow
  &.position-topend .popover-arrow
  &.position-topstart .popover-arrow
    border-top-color: #000000 !important
    &:after
      border-top-color: #000000 !important
.listpopover
  border-radius: 4px
</style>
<template>
<div class='vfe-ui-header'>
  <div class='header-left' @click="back" v-if="isHeaderLeftShow && !$slots.left"></div>
  <div class='header-middle'>{{title}}</div>
  <slot name='right'></slot>
  <slot name='left'></slot>
</div>
</template>
<script>
import { CommonBridge } from 'vk-hybrid'
import appVersion from '../../../utils/_app_version.js'
export default {
  name: 'headerbar',
  props: {
    title: {
      type: String,
      default: 'vipkid'
    },
    backfn: {
      type: Function
    },
    isHeaderLeftShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    isFunction(fn) {
      return Object.prototype.toString.call(fn) === '[object Function]'
    },
    back() {
      this.isFunction(this.backfn) ? this.backfn() : this.appBack()
    },
    appBack() {
      if (appVersion.isApp) {
        CommonBridge.historyBack()
      } else {
        window.history.back(-1)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.vfe-ui-header
  position: fixed
  top: 0
  width: 100%
  height: h = 44px
  line-height: h
  z-index: 2
  background-color: #fff
  .header-middle
    text-align: center
    font-size: 19px
    width: 50%
    margin: auto
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    font-weight: bold
    color: #333
  .header-left
    position: absolute
    left: 4px
    width: h
    height: h
    background: url('./header-fix-left.png') center no-repeat
    -webkit-background-size: 50%
    background-size: 50%
  .header-right
    position: absolute
    right: 0
    width: 100px
    padding: 0 12px
    top: 0px
    text-align: right
</style>

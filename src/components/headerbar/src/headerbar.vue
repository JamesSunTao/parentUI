<template>
<div class='vfe-ui-header'>
  <div class='header-left' @click="back" v-if="isHeaderLeftShow && !$slots.left"></div>
  <div class='header-middle' v-if="typeof title === 'string'">{{title}}</div>
  <div class='header-middle' v-else>
    <div :style="setWidth" v-for="item in title" :key="item.mark" :class="['tab', {active: item.active}]" @click="clickHandle(item)">
      <span>{{item.text}}</span>
    </div>
  </div>
  <slot name='right'></slot>
  <slot class="slot-left" name='left'></slot>
</div>
</template>
<script>
import { CommonBridge } from 'vk-hybrid'
import appVersion from '../../../utils/_app_version.js'
export default {
  name: 'headerbar',
  props: {
    title: {
      type: String | Array,
      default: () => {
        return 'VIPKID-在线青少儿英语'
      }
    },
    backfn: {
      type: Function
    },
    isHeaderLeftShow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    setWidth() {
      return {'width': (1/this.title.length) * 100 + '%'}
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
    },
    clickHandle(item) {
      this.title.forEach(opt => {opt.active = false})
      item.active = true
      this.$emit('select', item)
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '../../../style/var.styl'
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
    max-width: 70%
    margin: auto
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    font-weight: bold
    color: #333
    .tab
      display inline-block
      height 100%
      color $vk-font-color-text
    .active
      position: relative
      color $vk-font-color-2
      &::after
        content: ' '
        display: inline-block
        width: 8px
        height: 4px
        position: absolute
        bottom: 0
        left: 45%
        background $vk-main-color
        border-radius 2px
  .header-left
    position: absolute
    left: 4px
    width: h
    height: h
    background: url('./header-fix-left.png') center no-repeat
    -webkit-background-size: 50%
    background-size: 50%
  .slot-left
    position: absolute
    left: 4px
  .header-right
    position: absolute
    right: 0
    padding: 0 12px
    top: 0px
    text-align: right
</style>

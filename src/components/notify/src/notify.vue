<template>
  <div class="vk-notify-container" v-if="notifyshow">
    <div v-if="type == 'normal'" class="vk-notify vk-notify-normal">
      <div class="vk-notify-icon" :style="notifyIcon" v-if="icon"></div>
      <div class="vk-notify-message" :style="{width: messageWidth}">{{message}}</div>
      <div class="vk-notify-close" @click="closed"></div>
    </div>
    <div v-else-if="type == 'multi'" class="vk-notify vk-notify-multi">
      <div :class="['vk-notify-message', button ? 'vk-notify-button' : '']">
        <span class="vk-notify-icon" :style="notifyIcon" v-if="icon"></span>
        {{message}}
      </div>
       <span class="vk-button" @click="handleclick" :style="{'right': close ? '12%' : '5%'}" v-if="button">{{button}}</span>
      <div class="vk-notify-close" v-if="close" @click="closed"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notify',
  data() {
    return {
      notifyshow: true,
    }
  },
  props: {
    type: { // 提示类型
      type: String,
      default: 'normal'
    },
    message: { // 展示文案，支持 \n 换行 
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: { //字体颜色
      type: String,
      default: ''
    },
    background: { //字体颜色
      type: String,
      default: ''
    },
    className: { //自定义 className
      type: String,
      default: ''
    },
    button: {
      type: String,
      default: ''
    },
    close: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    notifyIcon() {
      if (this.icon) {
        return {
          'background-image': `url(${this.icon})`
        }
      }
    },
    messageWidth() {
      let offsetWidth = window.outerWidth - 32 - 10
      if (this.icon) {
        return (offsetWidth - (18 * 2)) + 'px'
      } else {
        return (offsetWidth - 18) + 'px'
      }
    }
  },
  methods: {
    handleclick() {
      this.$emit('handleclick')
    },
    closed() {
      this.notifyshow = false
      this.$emit('closed')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl'
.vk-notify-container
  height 100%
  text-align left
  .vk-notify-normal
    height 42px
    line-height 42px
    padding 0 $vk-padding-sm
    background $vk-notify-normal-background
    div
      display inline-block
      vertical-align middle
      &.vk-notify-icon
        width 18px
        height 18px
        background-size cover
      &.vk-notify-message
        font-size $vk-font-size-xs
        color $vk-notify-normal-font-color
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      &.vk-notify-close
        display inline-blcok
        float: right
        position relative
        &::before
          content ' '
          vertical-align sub
          width 18px
          height 18px
          display inline-block
          background url('./close.png')
          background-size cover
  .vk-notify-multi
    height 60px
    line-height 18px
    background $vk-bgc-while-pure
    padding 0 $vk-padding-sm
    border-radius $vk-radius-sm
    box-shadow 0px 1px 10px 0px rgba(179,179,179,0.3);
    position relative
    .vk-notify-message
      font-size: $vk-font-size-xs
      color: $vk-font-color-2
      position absolute
      width 82%
      top 50%
      transform  translateY(-50%)
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp: 2
      line-clamp: 2
      -webkit-box-orient: vertical
      .vk-notify-icon
        display inline-block
        height 13px
        width 13px
        background-size cover
      &.vk-notify-button
        width 65%
    .vk-notify-close
      display inline-blcok
      float: right
      position relative
      height 100%
      width 18px
      &::before
        content ' '
        width inherit 
        height 18px
        display inline-block
        position absolute
        top 50%
        transform translateY(-50%)
        background url('./close1.png')
        background-size cover
.vk-button
  display inline-block
  width 60px
  height 30px
  line-height 30px
  background $vk-main-color
  color $vk-bgc-while-pure
  font-size 13px
  text-align center
  border-radius $vk-radius-md
  position absolute
  top 50%
  transform translateY(-50%)
  right 12%
</style>

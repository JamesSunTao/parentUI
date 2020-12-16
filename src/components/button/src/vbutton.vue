<template>
<button
  :class="['ui-button', `ui-button__${type}`, `ui-button__${size}`, plain ? 'ui-button__plain': null, disabled ? 'ui-button-disabled' : null]"
  :style="getStyle()"
  :disabled="disabled"
  @click.capture="onClick"
  @click.capture.native="onClick"
  ref="button"
>
  <div class="ui-button__content">
      <div v-if="loading" class="ui-loading ui-button__loading">
      </div>
      <span v-if="loadingText" class="ui-button__text">
        {{loadingText}}
      </span>
      <span v-else class="ui-button__text">
        <slot></slot>
      </span>
  </div>
</button>
</template>
<script>
import Vue from 'vue'

export default {
  name: 'vbutton',
  props: {
    color: String,
    plain: Boolean,
    loading: Boolean,
    disabled: Boolean,
    loadingText: String,
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {

    }
  },
  computed: {
  },
  methods: {
    onClick() {
      if (!this.loading && !this.disabled) {
        this.$emit('click')
      }
    },
    getStyle() {
      if (this.color) {
        const style = {}
        style.color = this.plain ? this.color : 'white'
        if (!this.plain) {
          style.background = this.color
        }
        if (this.color.indexOf('gradient') !== -1) {
          style.border = 0
        } else {
          style.borderColor = this.color
        }

        return style
      }
    },
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl'
@keyframes myrotate
  0%
    -webkit-transform rotate(0deg)
  100%
    -webkit-transform rotate(360deg)
.ui-button
  position relative
  display inline-block
  box-sizing border-box
  height 44px
  line-height 1.2
  text-align center
  border-radius 16px
  margin 0
  border 0
  outline none
  // cursor pointer
  &::before
    position absolute
    top 50%
    left 50%
    width 100%
    height 100%
    background-color #000000
    border-radius inherit
    transform translate(-50%, -50%)
    opacity 0
    content ' '
  &:active::before {
    opacity: 0.1;
  }
.ui-button__content
  display flex
  justify-content center
  align-items center
.ui-button__default
  color #000
  background-color #fff
  border 1px solid #ebedf0
.ui-button__primary
  color #ffffff
  background-color $vk-main-color
  border 1px solid $vk-main-color
.ui-button__plain
  background-color #fff
  color $vk-main-color
  border 1px solid $vk-main-color
.ui-button__large
  width 100%
  height 50px
  font-size 16px
.ui-button__normal
  padding 0 15px
  font-size 14px
.ui-button__small
  height 32px
  padding 0 8px
  font-size 12px
.ui-button-disabled
  cursor not-allowed
  opacity 0.5
.ui-button__loading
  width 20px
  height 20px
  background url("../img/loading.png") center / 100% 100% no-repeat
  animation myrotate 1.5s linear infinite
  transform-origin 50% 50%
.ui-button__text
  padding-left 5px
</style>
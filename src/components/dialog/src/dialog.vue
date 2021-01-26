<template lang="pug">
.ui-dialog(v-if="iShow" v-scroll-fixed)
  transition(name="ui-dialog")
    .ui-dialog__wrap(v-cloak)(:class="{'ui-dialog__icon-type': iconClass || type}")
      .ui-dialog__wrap__info.ui-bottom-line(:class="{'ui-dialog__hidden-button': hiddenButton}")
        .ui-dialog__wrap__info__title(v-if="title" :class="{'ui-dialog__wrap__info__title-left': titleLeft}") {{title}}
        .ui-dialog__wrap__info__icon(v-if="iconClass || type" :class="iconClass || type" :style="style")
        .ui-dialog__wrap__info__text(v-if="text" :class="{'margin-top-12': title, 'ui-dialog__wrap__info__text-center': textCenter}") {{text}}
        .ui-dialog__wrap__info__text.ui-dialog__wrap__info__list(v-if="textList.length > 0" :class="{'margin-top-12': title}")
          .ui-dialog__wrap__info__text__list(v-for="(item, index) in textList" :key="index")
            p(v-if="typeof(item) === 'string'") {{item}}
            p(v-else-if="typeof item === 'object'" :style="item.style") {{item.content}}
      .ui-dialog__wrap__btn-group(v-if="!hiddenButton")
        .ui-dialog__wrap__btn-group__btn.ui-dialog__wrap__btn-group__btn-minor(@click.stop="cancelFunction" v-if="hasCancel") {{cancel}}
        .ui-dialog__wrap__btn-group__btn.ui-dialog__wrap__btn-group__btn-main(@click.stop="confirmFunction" :class="{'ui-dialog__wrap__btn-group__btn-only': !hasCancel, 'ui-left-line': hasCancel}") {{confirm}}
</template>
<script>
import Vue from 'vue'
import scrollFixedPlugin from '../../../utils/_scrollFixed.js'

Vue.use(scrollFixedPlugin)

export default {
  name: 'ui-dialog',
  data() {
    return {
      iShow: true,
      title: '',
      text: '',
      hasCancel: true,
      confirm: '',
      confirmFn: null,
      cancel: '',
      cancelFn: null,
      textList: [],
      textCenter: false,
      titleLeft: false,
      icon: '',
      hiddenButton: false,
      type: '',
      iconClass: '',
      callback: null,
      styleIconMap: {
        success: 'https://img.vipkidstatic.com/prt/image/tools/upload/gJMvOBE8QO73l.gif',
        fail: 'https://img.vipkidstatic.com/prt/image/tools/upload/73Vlmv7YNoKOy.gif',
        warning: 'https://img.vipkidstatic.com/prt/image/tools/upload/qxLJqPW4A9Vrk.gif'
      }
    }
  },
  computed: {
    style () {
      return this.type ? {
        background: `url("${this.styleIconMap[this.type]}?${Math.random()}") center / 100% 100% no-repeat`
      } : {}
    }
  },
  methods: {
    confirmFunction() {
      this.callback('confirm')
      if (this.confirmFn) {
        Promise.resolve().then(() => {
          return this.confirmFn()
        }).then(() => {
          this.autoCloseFn()
        })
      } else {
        this.autoCloseFn()
      }
    },
    cancelFunction() {
      this.callback('cancel')
      if (this.cancelFn) {
        Promise.resolve().then(() => {
          return this.cancelFn()
        }).then(() => {
          this.autoCloseFn()
        })
      } else {
        this.autoCloseFn()
      }
    },
    autoCloseFn() {
      this.iShow = false
      this.type = ''
    }
  },
}
</script>
<style lang="stylus" scoped>
p 
  margin 0
  padding 0

.ui-dialog-enter-active, .ui-dialog-fade-leave-active 
  transition opacity .3s
.ui-dialog-fade-enter, .ui-dialog-fade-leave-to
  opacity 0
.ui-bottom-line:after
  content ''
  position absolute
  bottom 0
  height 1px
  width 100%
  background-color #D8D8D8
  transform scaleY(0.5)
  left 0
.ui-left-line:after
  content ''
  position absolute
  left 0
  height 100%
  width 1px
  background-color #D8D8D8
  transform scaleX(0.5)
  top 0
.ui-dialog
  background rgba(0,0,0,0.6)
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  z-index 200
  .margin-top-12
    margin-top 12px
  &__wrap
    position absolute
    left 50%
    top 50%
    transform translateX(-50%) translateY(-50%)
    background-color #ffffff
    border-radius 10px
    text-align center
    width 295px
    &__info
      padding 24px 20px
      min-height 54px
      display flex
      flex-direction column
      justify-content center
      position relative
      &__title
        font-size 18px
        color #2F3338
        font-weight bolder
        line-height 22px
      &__title-left
        text-align justify
      &__text
        overflow-y auto
        font-size 14px
        line-height 21px
        color #4B525C
        max-height 115px
        word-break break-all
        text-align justify
      &__text-center
        text-align center
      &__list
        max-height 265px
      &__icon
        width 100px
        height 100px
        margin 0 auto
    &__btn-group
      overflow hidden
      font-size 16px
      &__btn
        font-size 16px
        display inline-block
        width 50%
        padding 13px
        box-sizing border-box
        float left
      &__btn-main
        color #FF6422
        position relative
      &__btn-minor
        color #333333
      &__btn-only
        border none
        width 100%
        color #FF6422
  &__icon-type
    width 220px
    .ui-dialog__hidden-button
      padding-bottom 40px
    .ui-dialog__wrap__info__text
      text-align center
      font-size 16px
      color #2F3338
</style>
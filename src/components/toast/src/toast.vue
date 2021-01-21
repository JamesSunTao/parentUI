<template lang="pug">
  transition(name="fade")
    .ui-toast(v-cloak)
      .ui-toast__text(v-if="!type" :class="{'ui-toast__image__text-left': textLeft}") {{text}}
      .ui-toast__image(v-if="type")
        .ui-toast__image__icon(:class="type")
        .ui-toast__image__text(:class="{'ui-toast__image__text-left': textLeft}") {{text}}
</template>
<script>
export default {
  name: 'toast',
  data() {
    return {
      text: '',
      timeout: 2000,
      type: '', // success fail warinig loading
      textLeft: false,
    }
  },
  mounted() {
    setTimeout(() => {
      typeof this.cb === 'function' && this.cb()
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }, this.timeout)
  }
}
</script>
<style lang='stylus' scoped> 
.fade-enter-active, .fade-leave-active
  transition opacity .5s
.fade-enter, .fade-leave-to
  opacity 0
@keyframes myrotate
  0%
    -webkit-transform rotate(0deg)
  100%
    -webkit-transform rotate(360deg)
.ui-toast
  position fixed
  left 0
  width 100%
  height 100%
  top 0
  text-align center
  z-index 999
  &__text
    position relative
    top 50%
    left 0
    background rgba(0,0,0,0.8)
    color #fff
    font-size 14px
    padding 16px 12px
    border-radius 10px
    display inline-block
    min-width 25.6%
    max-width 76.53%
    text-align center
    line-height 20px
    box-sizing border-box
    transform translate(0, -50%)
  &__image
    position relative;
    top 50%
    left 0
    transform translate(0, -50%)
    background rgba(0,0,0,0.8)
    color #fff
    font-size 14px
    border-radius 10px
    padding 22px
    text-align center
    min-width 106px
    min-height 106px
    box-sizing border-box
    line-height 19px
    max-width 80%
    display inline-block
    &__icon
      width 36px
      height 36px
      margin 0 auto 10px;
      &.success
        background url("../img/success.png") center / 100% 100% no-repeat
      &.fail
        background url("../img/fail.png") center / 100% 100% no-repeat
      &.warning
        background url("../img/warning.png") center / 100% 100% no-repeat
      &.loading
        background url("../img/loading.png") center / 100% 100% no-repeat
        animation myrotate 1.5s linear infinite
        transform-origin 50% 50%
  .ui-toast__image__text-left
    text-align justify 
</style>

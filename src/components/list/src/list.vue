<template>
  <div :class="{list: true, fillet, 'list-border': border}">
    <div class="list-header" v-if="header">
      {{ header }}
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'list',
  props: {
    header: String, // header
    border: Boolean, // 边框
    fillet: Boolean, // 圆角
  }
}
</script>
<style lang='stylus' scoped>
*
  box-sizing: border-box
p
  margin: 0
.list
  &-header
    height: 32px
    background: #f7f8fa
    font-size: 12px
    font-family: PingFangSC, PingFangSC-Regular
    font-weight: 400
    color: #979da6
    padding: 7px 0 8px 16px
.fillet
  border-radius: 8px
  overflow hidden
.list-border
  .list-item
    &::after
      content: ''
      display: inline-block
      border-bottom 1px solid #f2f2f2
      -webkit-transform-origin: 0 100%
      transform-origin: 0 100%
      -webkit-transform: scaleY(0.5)
      transform: scaleY(0.5)
      position: absolute
      bottom: 0
      left: 17px
      right: 16px
    &:last-child
      &::after
        display: none
</style>
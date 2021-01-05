<template>
  <div class="list-item" @click="itemClick">
    <div class="left-pannel inline-block">
      <span :class="{'left-icon': true, [leftIconType]: true}" v-if="leftIconType"></span>
      <img :src="leftIconUrl" alt="" class="left-icon" v-if="leftIconUrl">
    </div>
    <div class="center-pannel inline-block">
      <p class="msg">{{title}}</p>
      <p class="remark" v-if="remark" :style="remarkStyle">{{remark}}</p>
      <p class="description" v-if="description">{{description}}</p>
    </div>
    <div class="right-bannel inline-block">
      <span class="right-icon" v-if="!isRightSlot" />
      <span class="right-slot" v-if="isRightSlot">
        <slot name="right-slot" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'list-item',
  props: {
    leftIconType: String, // icon type
    leftIconUrl: String, // 左边icon 图片地址
    title: String, // 标题
    remark: String, // 辅助文字
    remarkStyle: Object, // remark样式
    description: String, // 说明
  },
  computed: {
    isRightSlot () {
      return this.$slots['right-slot']
    }
  },
  methods: {
    itemClick(){
      const { click } = this._events
      if(click) {
        this.$emit('click', arguments)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
*
  box-sizing: border-box
p
  margin: 0
.list-item
  display: flex
  align-items: center
  position: relative
  background: #ffffff
  font-size: 16px
  font-family: PingFangSC, PingFangSC-Regular
  font-weight: 400
  text-align: left
  color: #2f3338
  padding: 15px 16px
  &:hover
    background: #fbfbfb
  .left-icon,.msg,.right-icon
    display: inline-block
    vertical-align: middle
  .left-icon,.right-icon
    background-size: cover
  .left-icon
    margin-right: 12px
    width: 20px
    height: 20px
    &.set
      background-image: url(./img/set.png)
    &.active
      background-image: url(./img/active.png)
    &.task
      background-image: url(./img/task.png)
    &.coupon
      background-image: url(./img/youhui.png)
  .msg
    width: 128px
    font-size: 16px
    font-family: PingFangSC, PingFangSC-Regular
    font-weight: 400
    text-align: left
    color: #2f3338
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
  .right-icon
    background-image: url(./img/right.png)
    width: 12px
    height: 12px
    background-size: cover
    float: right
  .right-slot
    float: right
  .remark
    width: 108px
    font-size: 12px
    font-family: PingFangSC, PingFangSC-Regular
    font-weight: 400
    text-align: right
    color: #979da6
    float: right
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    line-height: 20px
  .description  
    font-size: 12px
    font-family: PingFangSC, PingFangSC-Regular
    font-weight: 400
    color: #979da6
    margin-top: 4px
.center-pannel
  flex:1
</style>
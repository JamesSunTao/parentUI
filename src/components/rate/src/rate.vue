<template>
<div class="star-warp">
  <div class="star-box">
    <slot name="rate_title"></slot>
    <template class="star">
      <slot name="rate_intro"></slot>
    </template>
    <div class="star-content">
      <div class="star-pic" v-for="(sItem, index) in startList" @click="chooseType(sItem,index)" :key="index">
        <img :src="sItem.starUrl" :class="{'filter': index != activeIndex && curEvaluated}">
        <p v-if="!curEvaluated">{{sItem.starText}}</p>
      </div>
    </div>
    <p class="star-result" v-if="curEvaluated">{{startList[`${activeIndex}`].starText}}</p>
  </div>
</div>
</template>
<script>
export default {
  name: 'rate',
  props: { 
    disabled: {
      type: Boolean,
      default: false
    },
    curIndex: {
      type: Number,
      default: -1
    },
    evaluated:{
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      startList: [
        {starUrl: require('../img/flow1.png'), starText: '很不满'},
        {starUrl: require('../img/flow2.png'), starText: '不满'},
        {starUrl: require('../img/flow3.png'), starText: '一般'},
        {starUrl: require('../img/flow4.png'), starText: '满意'},
        {starUrl: require('../img/flow5.png'), starText: '很满意'},
      ],
      activeIndex: -1,
      curEvaluated: false
    }
  },
  created() {
    this.activeIndex = this.curIndex
    this.curEvaluated = this.evaluated
  },
  methods: {
    chooseType(value,index) {
      if (this.disabled) {
        this.$emit('starDisabledFun')
        return false
      }
      this.activeIndex = index
      this.curEvaluated = true
      this.$emit('starFun', index+1)
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '../../../style/var.styl'
.star-warp
  box-sizing: border-box
  margin-bottom: 24px
  .star-box
    box-sizing: border-box
    background: $vk-bgc-while-pure
    padding: 16px
    border-radius: 8px
    h3
      font-size: 18px
      font-weight: 600
      text-align: left
      color: $vk-font-color-2
      line-height: 25px
      position: relative
      margin: 0
      .check
        text-align: center
        display: inline-block
        position: absolute
        right: 0
        font-size: 12px
        font-weight: 400
        color: $vk-font-color-auxiliary
        border: 1px solid $vk-font-color-auxiliary
        border-radius: 12px;
        height: 24px
        line-height: 24px
        box-sizing: border-box
        padding: 0 8px
    .star-intro
      color: $vk-font-color-auxiliary
      line-height: 17px
      font-size: 12px
      padding-top: 6px
      text-align: left 
    .star-content
      display: flex
      .star-pic
        flex: 1
        text-align: center
        box-sizing: border-box
        padding-top: 12px
        img
          width: 40px
        .filter
          -webkit-filter: grayscale(100%)
          filter: grayscale(100%)
          opacity: 0.5
        p
          color: $vk-font-color-text
          margin: 12px 0 0 0
          font-size: 12px
    .star-result
      text-align: center
      font-size: 12px
      font-weight: 400
      color: $vk-font-color-2
      margin: 12px 0 0 0
    .tag_warp
      margin-top: 14px
      text-align: center
      .active
        color: $vk-main-color
        border: 1px solid $vk-main-color
        background: #feede7
      span
        font-size: 12px
        display: inline-block
        border-radius: 16px
        border: 1px solid $vk-font-color-disable
        background: $vk-bgc-grey
        box-sizing: border-box
        padding: 9px 26px
        text-align: center
        margin-bottom: 10px
</style>

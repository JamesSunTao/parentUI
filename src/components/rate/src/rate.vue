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
    <p class="star-result" v-if="curEvaluated">{{startList[`${curIndex}`].starText}}</p>
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
      window.console.log(`当前选择:${index+1}`);
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
    background: #fff
    padding: 16px
    border-radius: 8px
    h3
      font-size: 18px
      font-weight: 600
      text-align: left
      color: #2f3338
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
        color: #979da6
        border: 1px solid #979da6;
        border-radius: 12px;
        height: 24px
        line-height: 24px
        box-sizing: border-box
        padding: 0 8px
    .star-intro
      color: #979da6
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
          color: #747d87
          margin: 12px 0 0 0
          font-size: 12px
    .star-result
      text-align: center
      font-size: 12px
      font-weight: 400
      color: #2f3338
      margin: 12px 0 0 0
    .tag_warp
      margin-top: 14px
      text-align: center
      .active
        color: #FF6422
        border: 1px solid #ff6422
        background: #feede7
      span
        font-size: 12px
        display: inline-block
        border-radius: 16px
        border: 1px solid #d5d9de
        background: #f7f8fa
        box-sizing: border-box
        padding: 9px 26px
        text-align: center
        margin-bottom: 10px
</style>

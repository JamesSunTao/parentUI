<template>
  <div class="tabs-warp">
    <div :class="[scrollspy ? 'scroll-spy':'' ,tapsType]">
      <div class="vk-tab" :class="[index == curIndex?'active':'']" v-for="(item, index)  in tabsData" @click.stop="clickTab(index)" :key="index">
        <span>{{item.tabName}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  props: { 
    scrollspy: {
      type: Boolean,
      default: false
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    tabsData:{
      type: Array,
      require: true
    },
    tabsStyle:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      curIndex: 0,
      tabsType: '',
    }
  },
  created() {
    this.curIndex = this.activeIndex
    this.tapsType = `vk-tabs-${this.tabsStyle}`
  },
  methods: {
    clickTab(index) {
      this.curIndex = index
      this.$emit('changeTab', index)
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '../../../style/var.styl'
  .vk-tabs-
    display: flex
    flex-wrap: nowrap
    justify-content: center
    background: $vk-bgc-while-pure
    overflow-x: auto
    box-sizing: border-box
    scrollbar-width: none
    -ms-overflow-style: none
    &::-webkit-scrollbar {
      display: none
    }
    .vk-tab
      position: relative
      text-align: center
      height: 44px
      box-sizing: border-box
      padding: 11px 16px
      span
        display: inline-block
        font-size: 16px
        color: $vk-font-color-text
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
    .active
      span
        font-weight: 500
      &::after
        content: ''
        width: 8px
        height: 4px
        position: absolute
        bottom: 4px
        left: 50%
        transform: translateX(-50%)
        background: #ff6422
        border-radius: 2px
  .vk-tabs-card
      display: flex
      flex-wrap: nowrap
      justify-content: center
      background: $vk-bgc-while-pure
      overflow-x: auto
      box-sizing: border-box
      padding: 8px 0
      scrollbar-width: none
      -ms-overflow-style: none
      &::-webkit-scrollbar {
        display: none
      }
      .vk-tab
        position: relative
        text-align: center
        box-sizing: border-box
        padding: 0 4px
        span
          background: $vk-bgc-grey
          display: block
          padding: 0 18px
          border-radius: 14px
          height: 28px
          line-height: 28px
          font-size: 12px
          color: $vk-font-color-text
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        &:first-child
          padding-left: 16px
        &:last-child
          padding-right: 16px
      .active
        span
          background: #FEEDE7
          color: $vk-main-color
  .scroll-spy
    justify-content: flex-start
</style>

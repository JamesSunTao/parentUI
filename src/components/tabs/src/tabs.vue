<template>
  <div :class="[scrollspy || tabsData.length > 4 ? 'scroll-spy':'' ,tapsType]">
    <div class="vk-tab" :class="[index == curIndex?'active':'']" v-for="(item, index)  in tabsData" @click.stop="clickTab(index)" :key="index">
      <span>{{item.tabName}}</span>
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
      tabsType: 'card',
      
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
  .vk-tabs-
    display: flex
    flex-wrap: nowrap
    justify-content: center
    background: #fff
    overflow-x: auto
    box-sizing: border-box
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .vk-tab
      position: relative
      text-align: center
      height: 44px
      box-sizing: border-box
      padding: 11px 0
      margin-left: 36px
      span
        display: inline-block
        font-size: 16px
        color: #747D87
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      &:first-child
        margin-left: 16px
      &:last-child
        margin-right: 16px  
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
      background: #fff
      overflow-x: auto
      box-sizing: border-box
      padding: 8px 0
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      .vk-tab
        // flex: 1
        background: #f7f8fa
        border-radius: 14px
        position: relative
        text-align: center
        height: 28px
        line-height: 28px
        box-sizing: border-box
        padding: 0 18px
        margin-left: 8px
        span
          display: inline-block
          font-size: 12px
          color: #747D87
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        &:first-child
          margin-left: 16px
        &:last-child
          margin-right: 16px
      .active
        background: #FEEDE7
        span
          color: #FF6422

  .scroll-spy
    justify-content: flex-start



</style>

<template>
  <div class="vk-nodata" :style="{height:_height}">
    <div class="vk-nodata-main">
      <div class="vk-nodata-bgimg" :style="{backgroundImage:'url(' +  bgimg + ')'}">
      </div>
      <p class="vk-nodata-title" v-html="titleList[0]">
      </p>
      <p class="vk-nodata-sec-title" v-if="titleList[1]" v-html="titleList[1]">
      </p>
      <div class="vk-nodata-sec-btn"  @click="$emit('subFunction')" v-if="buttonList[1]">
        {{buttonList[1]}}
      </div>
      <div class="vk-nodata-main-btn" @click="$emit('mainFunction')" v-if="buttonList[0]">
        {{buttonList[0] || '返回'}}
      </div>
    </div>
  </div>
</template> 

<script>
import { addUnit } from "../../../utils/_format.js";
export default {
  name: "nodata",
  data () {
    return {
    }
  },
  props: {
    bgimg: {
      type: String,
      default: "https://img.vipkidstatic.com/prt/image/tools/upload/xkj60lG2DKynP.gif",
    },
    height: {
      type: [String, Number]
    },
    titleList: {
      type: Array,
      default() {
        return ['暂无数据']
      }
    },
    buttonList:{
      type: Array,
      default() {
        return []
      }
    }
  },
  computed : { 
    _height () {
      return addUnit(this.height)
    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
.vk-nodata {
  width 100vw
  overflow hidden
  text-align center
  height calc(100vh - 44px)
  .vk-nodata-main {
    position relative
    top 48%
    transform translateY(-50%)
    .vk-nodata-bgimg {
      width 220px
      height 220px
      margin 0 auto
      background url("https://img.vipkidstatic.com/prt/image/tools/upload/xkj60lG2DKynP.gif") center center / 220px 220px no-repeat
    }
    .vk-nodata-title {
      margin-top -10px
      font-size: 16px
      font-family: PingFangSC, PingFangSC-Regular
      font-weight: 400
      max-width 70%
      margin 0 auto
      color: #333333
    }
    .vk-nodata-sec-title {
      font-size: 12px
      text-align: center
      color: #999999
      max-width 70%
      margin 0 auto
      margin-top 20px
    }
    .vk-nodata-main-btn , .vk-nodata-sec-btn {
      height: 32px
      border-radius: 18px
      min-width: 86px
      line-height 32px
      display inline-block
      padding 0 5px
    }
    .vk-nodata-main-btn {
      margin-top 10px
      border: 1px solid #ff6422
      color: #ff6422
      font-size: 14px
    }
    .vk-nodata-sec-btn {
      border: 1px solid #dfdfdf
      color: #474747
      margin-right 18px
      font-size: 14px
    }
  }
  
}
</style>

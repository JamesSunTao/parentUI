<template>
  <div class="vipkid-nodata" :style="{backgroundImage:'url(' +  bgimg + ')'}">
    <p class="title">
      {{mainTitle}}
    </p>
    <p class="sec-title" v-if="showSubtitle">
      {{subTitle}}
    </p>
    <div class="sec-btn"  @click="$emit('subFunction')" v-if="showSubBtn">
      {{subBtnDesc}}
    </div>
    <div class="main-btn" @click="$emit('mainFunction')" v-if="showMainBtnStatus">
      {{mainBtnDesc}}
    </div>
  </div>
</template> 

<script>
export default {
  name: "nodata",
  data () {
    return {
      showMainBtnStatus: false 
    }
  },
  props: {
    mainTitle: {
      type: String,
      default: "暂无数据",
    },
    bgimg: {
      type: String,
      default: "https://img.vipkidstatic.com/prt/image/tools/upload/xkj60lG2DKynP.gif",
    },
    showSubtitle: Boolean,
    showSubBtn: Boolean,
    showMainBtn: Boolean,
    subBtnDesc: {
      type: String,
      default: "检测一下",
    },
    mainBtnDesc: {
      type: String,
      default: "刷新",
    },
    subTitle: {
      type: String,
      default: "副标题",
    },

  },
  mounted () {
    this.showMainBtnStatus = this.showSubBtn ? this.showSubBtn : this.showMainBtn
  },
  methods: {
  }
};
</script>

<style lang='stylus' scoped>
.vipkid-nodata {
  width 100vw
  overflow hidden
  height 100vh
  background url("https://img.vipkidstatic.com/prt/image/tools/upload/xkj60lG2DKynP.gif") center 30% / 220px 220px no-repeat
  .title {
    margin-top 46vh
    font-size: 16px
    font-family: PingFangSC, PingFangSC-Regular
    font-weight: 400
    color: #333333
  }
  .sec-title {
    font-size: 12px;
    text-align: center;
    color: #999999;
    margin-top 20px
  }
  .main-btn , .sec-btn {
    height: 32px;
    border-radius: 18px;
    min-width: 86px;
    line-height 32px
    display inline-block
    padding 0 5px
  }
  .main-btn {
    margin-top 10px
    border: 1px solid #ff6422;
    color: #ff6422;
  }
  .sec-btn {
    border: 1px solid #dfdfdf;
    color: #474747;
    margin-right 18px
  }
}

</style>
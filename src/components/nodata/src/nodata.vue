<template>
  <div class="vipkid-nodata">
    <p class="title">
      {{mainTitle}}
    </p>
    <p class="sec-title" v-show="showSubtitle">
      {{subTitle}}
    </p>
    <div class="sec-btn"  @click="$emit('subFunction')" v-show="showSubBtn">
      {{subBtnDesc}}
    </div>
    <div class="main-btn" @click="$emit('mainFunction')">
      {{mainBtnDesc}}
    </div>
  </div>
</template> 

<script>
export default {
  name: "nodata",

  props: {
    mainTitle: {
      type: String,
      default: "暂无数据",
    },
    showSubtitle: Boolean,
    showSubBtn: Boolean,
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
  methods: {
  }
};
</script>

<style lang='stylus' scoped>
.vipkid-nodata {
  width 100%
  overflow hidden
  height 100%
  background url("../img/nodata.png") center 30% / 220px auto no-repeat
  .title {
    margin-top 100%
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
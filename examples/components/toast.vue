<template>
<div class="div">
  <div class="btn" @click="handleLoading">正在加载</div>
  <div class="btn" @click="handleFail">失败提示</div>
  <div class="btn" @click="handleWarning">警示信息</div>
  <div class="btn" @click="handleSuccess">成功提示</div>
  <div class="btn" @click="handleCustomizeIcon">自定义图片提示</div>
  <div class="btn" @click="handleLongText">长文案提示</div>
  <div class="btn" @click="handleShortText">短文案提示</div>
</div>
</template>
<script>

export default {
  data () {
    return {
      isShowMenu: false
    }
  },
  methods: {
    handleLoading () {
      this.$toast({'text': '正在加载', type: 'loading'})
    },
    handleFail () {
      this.$toast({'text': '失败提示', type: 'fail'})
    },
    handleWarning () {
      this.$toast({'text': '警示信息', type: 'warning'})
    },
    handleSuccess () {
      this.$toast({'text': '成功提示', type: 'success'})
    },
    handleCustomizeIcon () {
      this.$toast({'text': '我是自定义文案呀呀呀呀',type: 'newtype'}).then(()=>{
        console.log(12)
      })
    },
    handleLongText () {
      this.$toast({'text': '最长最长文案不超过14个字字字个字字字个字字字字个字最长最长文案不超过14个字字字个字字字个字字字字个字'})
    },
    handleShortText () {
      this.$toast({
        'text': '短文案提示',
        cb: () => {
          this.$dialog({
            title: '关闭了'
          })
        }
      })
    },
  }
}
</script>
<style lang='stylus' scoped>
/deep/ .newtype
  background url("https://img.vipkidstatic.com/prt/image/tools/upload/YEq4R8pPngM90.png") center / 100% 100% no-repeat
.btn
  width 80%
  height 40px
  color #fff
  line-height 40px
  text-align center
  background-color #f85415
  font-size 16px
  border 1px solid #f85415
  border-radius 50px
  margin 10px auto
  font-weight bold
</style>
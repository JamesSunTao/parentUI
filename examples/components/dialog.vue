<template>
<div class="div">
  <div class="btn" @click="handleFail">失败</div>
  <div class="btn" @click="handleWarning">警示</div>
  <div class="btn" @click="handleSuccess">成功+无按钮效果</div>
  <div class="btn" @click="handleCustomizeIcon">自定义图片</div>
  <div class="btn" @click="handleLongText">长文案提示</div>
  <div class="btn" @click="handleShortText">title居左+短文案提示</div>
  <div class="btn" @click="handleLongTitleTextList">单个按钮+长title+文案列表</div>
  <div class="btn" @click="handleTextList">单个按钮+文案列表</div>
  <div class="btn" @click="handleTextCenter">无title+一行居中</div>
  <div class="btn" @click="handleSingleButton">无title+单个按钮</div>
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
    handleFail () {
      this.$dialog({
        type: 'fail', 
        text: 'fail',
      }).then((value)=>{
        console.log(value)
      }).catch((e)=>{
        console.log(e)
      })
    },
    handleWarning () {
      this.$dialog({
        type: 'warning', 
        text: 'warning',
      }).then((value)=>{
        console.log(value)
      }).catch((e)=>{
        console.log(e)
      })
    },
    handleSuccess () {
      this.$dialog({
        type: 'success', 
        text: 'success',
      }).then((value)=>{
        console.log(value)
      }).catch((e)=>{
        console.log(e)
      })
    },
    handleCustomizeIcon () {
      this.$dialog({
        'text': '我是自定义文案呀呀呀呀',
        iconClass: 'newtype'
      }).then(()=>{
        console.log(12)
      })
    },
    handleLongText () {
      this.$dialog({
        title: '提示', 
        'text': '确定删除嘛？',
        'textCenter': true
      })
    },
    handleShortText () {
      this.$dialog({
        title: '一行文字一一行文字', 
        'text': '短文案提示',
        titleLeft: true
      })
    },
    handleLongTitleTextList () {
      this.$dialog({
        title: '一行文字一一行文字一行文字文一行文字一一行文字', 
        textHeight: '265px',
        textList: [
          {
            content: '学生有休学请求时，可以使用‘休学’工具', 
            style: {marginBottom: '10px'}
          },
          {
            content: '注意事项', 
            style: {marginBottom: '10px'}
          },
          '1. 申请时，不可以有已约未上课程',
          '2. 单次申请不可以超过30天',
          '3. 每笔有效订单，有2次休学机会',
          '4. 申请时，不可以有已约未上课程',
          '5. 单次申请不可以超过30天',
          '6. 每笔有效订单，有2次休学机会',
          '7. 单次申请不可以超过30天',
          '8. 每笔有效订单，有2次休学机会有2次',
        ], 
        hasCancel: false, 
        confirm: '我知道了'
      })
    },
    handleTextList () {
      this.$dialog({
        title: '一行文字一一行文字', 
        textHeight: '265px',
        textList: [
          {
            content: '学生有休学请求时，可以使用‘休学’工具线上申请休学，提交后即刻成功', 
            style: {marginBottom: '10px'}
          },
          {
            content: '注意事项', 
            style: {marginBottom: '10px'}
          },
          '1. 申请时，不可以有已约未上课程',
          '2. 单次申请不可以超过30天',
          '3. 每笔有效订单，有2次休学机会',
          '4. 申请时，不可以有已约未上课程',
          '5. 单次申请不可以超过30天',
          '6. 每笔有效订单，有2次休学机会',
          '7. 单次申请不可以超过30天',
          '8. 每笔有效订单，有2次休学机会有2次',
        ], 
        hasCancel: false, 
        confirm: '我知道了'
      })
    },
    handleTextCenter () {
      this.$dialog({
        'text': '中文控制在25-30个字段字段字段', 
        'textCenter': true
      })
    },
    handleSingleButton () {
      this.$dialog({
        'text': '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案', 
        'center': false, 
        hasCancel: false, 
        confirm: '我知道了'
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
/deep/ .newtype
  background url("https://img.vipkidstatic.com/prt/image/tools/upload/YEq4R8pPngM90.png") center / 100% 100% no-repeat
  width 50px
  height 50px
  margin-bottom 20px
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
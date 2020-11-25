<template>
<div>
  <headerbar title="action-sheet"></headerbar>
  <div class="card">
    <div class="title">普通用法</div>
    <div class="content" @click="isShowMenu = true">普通用法</div>
    <div class="content" @click="isShowMenu1 = true">展示取消按钮</div>
    <div class="content" @click="isShowMenu2 = true">展示描述信息</div>
    <div class="content" @click="isShowMenu3 = true">展示title</div>
  </div>
  <div class="card">
    <div class="title">状态用法</div>
    <div class="content" @click="isShowMenu1 = true">禁用</div>
  </div>
  <div class="card">
    <div class="title">自定义面板</div>
    <div class="content" @click="custom = true">自定义面板</div>
  </div>
  <action-sheet :is-show.sync="isShowMenu" @click-overlay="overlayClick" :actions="actions">
  </action-sheet>
  <action-sheet :is-show.sync="isShowMenu1" @select="clickitem" cancel-text="取消(可自定义)" :actions="actions">
  </action-sheet>
  <action-sheet :is-show.sync="isShowMenu2" @select="clickitem" cancel-text="取消" :description="des" :actions="actions1">
  </action-sheet>
  <action-sheet :is-show.sync="isShowMenu3" @confirm-fn="confirmFn" :options="option" @select="clickitem" cancel-text="取消" :description="des" :actions="actions">
  </action-sheet>

  <action-sheet :is-show.sync="custom"  :options="option1" @select="clickitem" cancel-text="取消">
    <div>
      此处可以自定义
    </div>
  </action-sheet>
</div>
</template>
<script>
import back from '../../src/components/headerbar/src/header-fix-left.png'
export default {
  data () {
    return {
      isShowMenu: false,
      isShowMenu1: false,
      isShowMenu2: false,
      isShowMenu3: false,
      custom: false,
      des: '提示文本是可配置模块，如没有就不展示 换行说明文字说明文字说明文字说明文字说明文字',
      option: {
        title: "选择问题类型",
        confirm: '完成',
        confirmColor: '',
        cancel: '取消',
        cancelColor: '#b93e0f',
      },
      option1: {
        title: "自定义区域",
        confirmType: 'icon',
        confirm: back,
        confirmColor: ''
      },
      actions: [{
        name: '选项一',
        tag:'1'
      },{
        name: '选项二',
        tag:'2',
        color: '#ff6422'
      },{
        name: '选项三',
        tag:'3',
        disabled: true
      },{
        name: '选项四',
        tag:'4',
        className: 'custom-name'
      }],
      actions1: [{
        name: '选项一',
        tag:'1'
      },{
        name: '选项二',
        tag:'2',
        description: '这是描述信息'
      },{
        name: '选项三',
        tag:'3'
      },{
        name: '选项四',
        tag:'4'
      },{
        name: '选项四',
        tag:'IV'
      },{
        name: '选项五',
        tag:'5'
      },{
        name: '选项6',
        tag:'6'
      },{
        name: '选项7',
        tag:'7'
      },{
        name: '选项8',
        tag:'8'
      }]
    }
  },
  methods: {
    clickitem(data) {
      this.$dialog({
        title: data.name,
        text: data.tag
      })
    },
    overlayClick() {
      this.$toast({'text': '我关闭了我的action-sheet'})
    },
    confirmFn() {
      this.$toast({'text': '我点击了title的confirm'})
    }
  }
}
</script>
<style scoped>
.card{
  padding: 44px 16px 0 16px;
}
.title {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.custom-name{
  background: red
}
.content{
  height: 44px;
  line-height: 44px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee
}
</style>



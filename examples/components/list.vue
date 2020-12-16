<template>
<div class="main">
  <headerbar />
  <br/>
  <list header="Header" border fillet>
    <list-item title="点击事件" @click="clickTest('aaa')">
      <template slot="right-slot">
        <button>插槽</button>
      </template>
    </list-item>
    <list-item title="标题标题标"></list-item>
    <list-item title="标题标题标"></list-item>
  </list>
  <br/>
  <list>
    <list-item title="标题标题标题标题标题标题" leftIconType = "coupon" remark="辅助文字辅助文字辅助文字辅助文字辅助文字" :remarkStyle="{'font-size': '16px', color: '#ff6422'}"></list-item>
    <list-item title="标题标题标题标题标题标题" leftIconType = "task" description="说明文字说明文字说明文字说明文字说明文字"></list-item>
    <list-item title="标题标题标题标题标题标题" leftIconType = "set" description="说明文字说明文字说明文字说明文字说明文字"></list-item>
    <list-item title="标题标题标" description="说明文字说明文字说明文字说明文字说明文字"></list-item>
    <list-item title="标题标题标" leftIconType = "active" remark="辅助文字" :remarkStyle="{'font-size': '12px', color: '#ff6422'}"></list-item>
    <list-item title="标题标题标" leftIconUrl = "https://cn.vuejs.org/images/logo.png" remark="辅助文字" :remarkStyle="{'font-size': '12px', color: '#ff6422'}"></list-item>
  </list>
</div>
</template>
<script>
export default {
  name: 'list-test',
  methods: {
    clickTest(val){ 
      console.log(val)
    }
  }
}
</script>
<style lang="stylus" scoped>
.main
  background: #d5d8db
  min-height: 100vh
  margin-top: 44px
</style>
<style lang="stylus">
#app
  text-align: unset !important
</style>
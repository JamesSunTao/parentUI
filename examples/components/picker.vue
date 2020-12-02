<template lang="pug">
  .container
    headerbar(title="picker")
    <div class="card">
      <div class="title">普通用法</div>
      <div class="content" @click="changeReg">选择区域</div>
      <div class="content" @click="">展示取消按钮</div>
      <div class="content" @click="">展示描述信息</div>
      <div class="content" @click="">展示title</div>
  </div>
</template>
<script>
export default {
  created() {
    
  },
  methods: {
    changeReg() {
      this.$picker({
        title: '选择区域',
        confirmFn: (values) => {
          this.$dialog({
            title: '提示',
            text: `我选择了${values[0].name},它的code是${values[0].code}`
          })
        }
      })
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
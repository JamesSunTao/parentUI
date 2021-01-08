<template>
  <div class="main_content">
    <headerbar title="暂无数据"></headerbar>
    <nodata title="badge" @mainFunction="mainFunction" :titleList="titleList" :buttonList="btnList" @subFunction="subFunction"></nodata>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnList: ['返回', '刷新一下'],
      titleList: ['暂无数据', '这里是副标题</br>这里也是副标题']
    }
  },
  methods: {
    mainFunction () {
      this.$dialog({
        type: 'warning', 
        text: 'warning',
      }).then((value)=>{
        console.log(value)
      }).catch((e)=>{
        console.log(e)
      })
    },
    subFunction () {
      this.$dialog({
        type: 'warning', 
        text: 'warning',
      }).then((value)=>{
        console.log(value)
      }).catch((e)=>{
        console.log(e)
      })
    },
  }
}
</script>

<style lang='stylus' scoped>
.main_content {
  height 100vh
  h3 {
    margin-top:20px
  }
}
</style>
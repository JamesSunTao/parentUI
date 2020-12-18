<template>
  <div class="main_content">
    <nodata title="badge" @mainFunction="mainFunction" showSubBtn showSubtitle @subFunction="subFunction" mainBtnDesc="主按钮" subBtnDesc="副按钮"></nodata>
  </div>
</template>
<script>
export default {
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
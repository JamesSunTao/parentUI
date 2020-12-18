<template>
  <div class="main_content">
    <nodata title="badge" @mainFunction="mainFunction" showSubBtn showSubtitle @subFunction="subFunction" mainBtnDesc="主按钮" subBtnDesc="副按钮"></nodata>
  </div>
</template>
<script>
export default {
  methods: {
    mainFunction () {
      alert('点击主按钮')
    },
    subFunction () {
      alert('点击副按钮')
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
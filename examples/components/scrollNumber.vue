<template>
  <div class="main_content">
    <headerbar title="autoplay"></headerbar>
    <div class="content">
        <div class="line">
            正常组件
        </div>
        <scrollNumber :rollNumber="666"></scrollNumber>
        <div class="line">
            自定义文字样式 
        </div>
        <scrollNumber fontColorSize="color:blue;" :rollNumber="666"></scrollNumber>
        <!-- <div class="line">
            自定义滚动速度 
        </div>
        <scrollNumber :rollingSpeed='10' :rollNumber="666"></scrollNumber> -->
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang='stylus' scoped>
.main_content {
  overflow: hidden;
  .content {
    padding: 50px 20px 10px;
    .line {
        background-color #979DA6
        height: 30px
        line-height: 30px
        color: white
        font-size:22px
        margin 20px 0
    }
  }
}
</style>
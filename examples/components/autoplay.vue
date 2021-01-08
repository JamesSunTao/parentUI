<template>
  <div class="main_content">
    <headerbar title="autoplay"></headerbar>
    <div class="content">
      <div class="line">
            正常组件
        </div>
      <autoplay></autoplay>
      <div class="line">
            多个逻辑（停止其他所有）
        </div>
      <autoplay style="margin: 20px 0"></autoplay>
      <autoplay
        audioUrl="
https://media.vipkidstatic.com/prt/video/tools/upload/Nk18BLOzmJVzz.ogg"
      ></autoplay>
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
    padding: 80px 20px 10px;
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
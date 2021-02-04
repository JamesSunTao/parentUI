<template>
  <div>
    <headerbar title="videoplayer"></headerbar>
    <div class="card">
      <div class="title">普通用法</div>
      <div class="content" @click="isShowVideoplayer = true">普通用法</div>
      <div class="content" @click="isShowVideoplayer = true">使用默认封面</div>
    </div>
    <div class="video-container">
      <videoplayer v-if="isShowVideoplayer" coverUrl="https://img.vipkidstatic.com/ai/video-analysis/front_cover/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.png" videoUrl="https://media.vipkidstatic.com/learning/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.mp4" @videoclose="isShowVideoplayer = false"></videoplayer>
      <videoplayer v-if="isShowVideoplayer" videoUrl="https://media.vipkidstatic.com/learning/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.mp4" @videoclose="isShowVideoplayer = false"></videoplayer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowVideoplayer: false
    }
  },
}
</script>

<style lang='stylus' scoped>
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
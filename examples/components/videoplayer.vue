<template>
  <div>
    <headerbar title="videoplayer"></headerbar>
    <div class="card">
      <div class="title">普通用法</div>
      <div class="content" @click="isShowVideoplayer = true">普通用法</div>
      <div class="content" @click="isShowVideoplayer1 = true">使用默认封面</div>
      <div class="content" @click="isShowVideoplayer2 = true">不使用系统控制器,自动播放</div>
      <div class="content" @click="isShowVideoplayer3 = true">使用自定义控制器</div>
    </div>
    <div class="video-container">
      <videoplayer
        v-if="isShowVideoplayer"
        cover-url="https://img.vipkidstatic.com/ai/video-analysis/front_cover/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.png" video-url="https://media.vipkidstatic.com/learning/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.mp4"
        @videoclose="isShowVideoplayer = false"
        :loop="true"
      ></videoplayer>
      <videoplayer
        v-if="isShowVideoplayer1"
        video-url="https://media.vipkidstatic.com/learning/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.mp4"
        @videoclose="isShowVideoplayer1 = false"
      ></videoplayer>
      <videoplayer
        v-if="isShowVideoplayer2"
        video-url="https://media.vipkidstatic.com/learning/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.mp4"
        @videoclose="isShowVideoplayer2 = false"
        :controls="false"
        :autoplay="true"
        :loop="true"
      ></videoplayer>
      <videoplayer
        v-if="isShowVideoplayer3"
        video-url="https://media.vipkidstatic.com/learning/0bf10ede-f051-46ee-9c4c-24a5c5919cb0.mp4"
        @videoclose="isShowVideoplayer3 = false"
        :controls="false"
      ></videoplayer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowVideoplayer: false,
      isShowVideoplayer1: false,
      isShowVideoplayer2: false,
      isShowVideoplayer3: false,
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
<template>
  <div>
    <headerbar title="short-video-container"></headerbar>
    <div class="card">
      <div class="title">短视频组件</div>
      <div class="content" @click="open('common')">一般用法</div>
      <div class="content" @click="open('blur', '1')">支持拖拽进度条</div>
      <!-- <div class="content" @click="open('blur')">背景高斯模糊</div> -->
      <div class="content" @click="open('custom')">自定义模块</div>
    </div>
  <div class="flex" :style="{'top': top}">
    <router-view/>
  </div>
  </div>
</template>
<script>
import videolist from '../util/__videoList.js'
export default {
  data() {
    return {
      top: '100vh'
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.name == 'shortVideoContainer') {
      this.top = '100vh'
    }
    next()
  },
  methods: {
    open(targe, type){
      if (targe == 'custom') {
        window.location.href = "http://mobile.vipkid.com.cn/parentsspeedy/extend/studyshow/mainpage/?vid=120"
      } else {
        this.top = 0;
        this.$router.push({
          path: '/' + targe,
          query: {
            progress: type
          }
        })
      }
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
.router-view{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10000
}
.flex{
  position: fixed;
  top: 100vh;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100
}
</style>

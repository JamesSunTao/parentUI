<template>
  <div class="image_warp">
    <headerbar title="image"></headerbar>
    <div class="content">
      <div class="content-item">
        <div class="info">默认图片</div>
        <image-view :src="url_s"></image-view>

        <div class="info">指定宽高</div>
        <image-view :src="url" width="100" height="150"></image-view>

        <div class="info">圆角</div>
        <image-view :src="url" width="200" radius="10"></image-view>

        <div class="info">fit模式：cover | contain | fill | none</div>
        <image-view :src="url" width="300" height="150" fit="cover"></image-view>
        <image-view :src="url" width="300" height="150" fit="contain"></image-view>
        <image-view :src="url" width="300" height="150" fit="fill"></image-view>
        <image-view :src="url" width="300" height="150" fit="none"></image-view>

        <div class="info">事件</div>
        <image-view :src="url" width="300" height="150" @load="imageLoad"></image-view>

        <div class="info">禁用长按保存的图片</div>
        <image-view :src="url" :download="false" width="300" height="150" fit="cover"></image-view>
        <div class="info">加载中</div>
        <image-view show-loading width="300" height="150" fit="cover"></image-view>
        <div class="info">error</div>
        <image-view show-error width="300" height="150" fit="cover"></image-view>
        <image-view width="300" height="150" fit="cover" @error="imageError"></image-view>
        <image-view src="http://vone.vipkid.com.cn/flow/static/img/logo6.2ec3e55.png" width="300" height="150" fit="cover"></image-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url_s: 'http://vone.vipkid.com.cn/flow/static/img/logo6.2ec3e54.png',
      url: 'http://img.vipkidstatic.com/prt/image/tools/upload/BrVOxm8xk1PY.png',
    }
  },
  methods:{
    imageError(){
      console.log('imageError')
    },
    imageLoad(img){
      console.log('imageLoad', img.src)
    }
  }
}
</script>
<style lang='stylus' scoped>
.content
  margin-top: 44px
  padding: 20px 16px
  text-align: left
  .content-item
    margin-bottom: 12px
    .info
     margin-bottom: 5px
</style>

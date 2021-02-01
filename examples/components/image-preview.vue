<template>
  <div>
    <headerbar title="image-preview" />
    <div class="vk-preview__wrapper">
      <ul class="vk-preview__imglist">
        <li
          :key="index"
          class="vk-preview__li"
          @click="preview(index)"
          v-for="(l, index) in list"
        >
          <div class="vk-preview__imgwrap">
            <img ref="img" :src="l" alt="" />
          </div>
        </li>
      </ul>
    </div>
    <image-preview
      v-if="showPreview"
      @close="close"
      :showBack="showBack"
      :showDelete="showDelete"
      :list="$refs.img"
      :index="index"
      @deleteImg="deleteImg"
    ></image-preview>
  </div>
</template>

<script>
import imagePreview from '../../src/components/image-preview/src/image-preview.vue'
export default {
  components: { imagePreview },
  data() {
    return {
      list: ['https://resource.vipkid.com.cn/static/images/common/avatar/default.png','https://resource.vipkid.com.cn/static/images/common/avatar/girl_1.png','https://resource.vipkid.com.cn/static/images/common/avatar/boy_3.png','https://resource.vipkid.com.cn/static/images/common/avatar/default.png'],
      index: 0,
      showPreview: false,
      showBack: true,
      showDelete: true
    }
  },
  methods: {
    preview(index) {
      this.index = index
      this.showPreview = true
    },
    close() {
      this.showPreview = false
    },
    deleteImg(items) {
      console.log('要删除的图片位置：', items)
    }
  }
}
</script>

<style lang="stylus" scoped>
.vk-preview__wrapper
  padding-top: 44px
.vk-preview__imglist
  display: flex
  flex-wrap: wrap
  margin-right: -5px
  list-style-type: none
  padding: 0
.vk-preview__li
  display: inline-block
  position: relative
  box-sizing: border-box
  padding-right: 5px
  padding-bottom: 5px
  width: 25%
  .vk-preview__imgwrap
    position: relative
    box-sizing: border-box
    width: 100%
    height: 0
    padding-bottom: 100%
  img
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    vertical-align: middle
    border-radius: 2px
    object-fit: cover
</style>
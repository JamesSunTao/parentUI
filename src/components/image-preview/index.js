import imagePreview from './src/image-preview.vue'
imagePreview.install = function (Vue) {
  Vue.component(imagePreview.name, imagePreview)
}

export default imagePreview
import imagePreview from './src/image-preview.vue'
imagePreview.install = function(Vue) {
  Vue.component('image-preview', imagePreview)
}

export default imagePreview
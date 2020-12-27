import imageView from './src/image-view.vue'
imageView.install = function (Vue) {
  Vue.component(imageView.name, imageView)
}

export default imageView
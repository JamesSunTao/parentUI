import autoplay from './src/autoplay.vue'

autoplay.install = function (Vue) {
  Vue.component(autoplay.name, autoplay)
}

export default autoplay

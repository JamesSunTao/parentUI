import videoplayer from './src/videoplayer.vue'

videoplayer.install = function (Vue) {
  Vue.component(videoplayer.name, videoplayer)
}

export default videoplayer

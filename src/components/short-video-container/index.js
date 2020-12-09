import shortVideoContainer from './src/index.vue'
shortVideoContainer.install = function (Vue) {
  Vue.component(shortVideoContainer.name, shortVideoContainer)
}

export default shortVideoContainer
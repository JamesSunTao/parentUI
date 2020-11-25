import shortVideoContainer from './src/index.vue'
console.log(shortVideoContainer.name)
shortVideoContainer.install = function (Vue) {
  Vue.component(shortVideoContainer.name, shortVideoContainer)
}

export default shortVideoContainer
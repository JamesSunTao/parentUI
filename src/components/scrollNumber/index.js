import scrollNumber from './src/scrollNumber.vue'

scrollNumber.install = function (Vue) {
  Vue.component(scrollNumber.name, scrollNumber)
}

export default scrollNumber
import headerbar from './src/headerbar.vue'

headerbar.install = function (Vue) {
  Vue.component(headerbar.name, headerbar)
}

export default headerbar

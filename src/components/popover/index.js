import popover from './src/popover.vue'

popover.install = function (Vue) {
  Vue.component(popover.name, popover)
}

export default popover

import notify from './src/notify.vue'

notify.install = function (Vue) {
  Vue.component(notify.name, notify)
}

export default notify

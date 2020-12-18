import badge from './src/badge.vue'

badge.install = function (Vue) {
  Vue.component(badge.name, badge)
}

export default badge

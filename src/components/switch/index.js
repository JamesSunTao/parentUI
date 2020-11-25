import vswitch from './src/vswitch.vue'

vswitch.install = function (Vue) {
  Vue.component(vswitch.name, vswitch)
}

export default vswitch

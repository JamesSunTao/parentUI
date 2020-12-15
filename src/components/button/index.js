import vbutton from './src/vbutton.vue'

vbutton.install = function (Vue) {
  Vue.component(vbutton.name, vbutton)
}

export default vbutton

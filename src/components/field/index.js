import field from './src/field.vue'

field.install = function (Vue) {
  Vue.component(field.name, field)
}

export default field

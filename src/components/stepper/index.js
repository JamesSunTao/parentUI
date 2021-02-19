import stepper from './src/stepper.vue'

stepper.install = function (Vue) {
  Vue.component(stepper.name, stepper)
}

export default stepper

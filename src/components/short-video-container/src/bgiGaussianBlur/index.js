import Vue from 'vue'
import blur from './blur.vue'

let blurConstructor = Vue.extend(blur)
let instance

let _default = {
  bgi: ''
}

instance = new blurConstructor().$mount()
document.body.appendChild(instance.$el)

const Blur = function(option = _default) {
  for (let prop in option) {
    if (option.hasOwnProperty(prop)) {
      instance[prop] = option[prop]
    }
  }
}

export default Blur
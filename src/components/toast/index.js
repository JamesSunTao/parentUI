import Vue from 'vue'
import toast from './src/toast.vue'

let ToastConstructor = Vue.extend(toast)
let instance

const Toast = function(option = {}) {
  return new Promise((resolve) => {
    instance = new ToastConstructor({
      data: option
    }).$mount()
    if (this instanceof Vue) {
      this.$el.appendChild(instance.$el)
    } else {
      document.body.appendChild(instance.$el)
    }
    let isDestroyed = instance._isDestroyed
    Object.defineProperty(instance, '_isDestroyed', {
      get() {
        return isDestroyed
      },
      set(newvalue) {
        isDestroyed = newvalue
        if (newvalue) {
          resolve()
        }
      }
    })
  })
}

export default Toast
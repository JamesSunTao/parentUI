import Vue from 'vue'
import dialog from './src/dialog.vue'

let DialogConstructor = Vue.extend(dialog)
let instance

let _default = {
  title: '',
  text: '',
  hasCancel: true,
  confirm: '确定',
  confirmFn: null,
  cancel: '取消',
  cancelFn: null,
  textList: [],
  textCenter: false,
  titleLeft: false,
  icon: '',
  hiddenButton: false,
  type: '',
  iconClass: ''
}

const Dialog = function(option = _default) {
  return new Promise((resolve, reject) => {
    let obj = Object.assign({}, _default, option)
    if (!instance) {
      instance = new DialogConstructor({
        data: obj
      }).$mount()
    }
    instance.callback = (action) => {
      if (action === 'confirm') {
        resolve(action)
      } else if (action === 'cancel') {
        reject(action)
      }
    }
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        instance[prop] = obj[prop]
      }
    }
    if (!instance.visible) {
      if (this instanceof Vue) {
        this.$el.appendChild(instance.$el)
      } else {
        document.body.appendChild(instance.$el)
      }
      Vue.nextTick(() => {
        instance.iShow = true
      })
    }
  })
  // return instance
}

export default Dialog


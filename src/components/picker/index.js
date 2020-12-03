import Vue from 'vue'
import picker from './src/picker.vue'

let PickerConstructor = Vue.extend(picker)
let instance

let _default = {
  type: '', // 省，市，区，省市区，年月日，年，月，日，时间，自定义
  code: '',
  title: '',
  confirm: '确定',
  cancel: '取消',
  confirmFn: null,
  cancelFn: null,
}

instance = new PickerConstructor().$mount()
document.body.appendChild(instance.$el)

const Picker = function(option = _default) {
  option.iShow = true
  return new Promise((resolve, reject) => {
    let obj = Object.assign({}, _default, option)
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        instance[prop] = obj[prop]
      }
    }
    instance.resolve = resolve
    instance.reject = reject
    Picker.close = function() {
      instance.closePicker()
    }
  })
}

export default Picker
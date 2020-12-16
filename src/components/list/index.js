import list from './src/list.vue'
import listItem from './src/listItem.vue'

list.install = function (Vue) {
  Vue.component(list.name, list)
  Vue.component(listItem.name, listItem)
}

export default list

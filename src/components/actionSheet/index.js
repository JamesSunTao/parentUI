import actionSheet from './src/action-sheet.vue'

actionSheet.install = function (Vue) {
  Vue.component(actionSheet.name, actionSheet)
}

export default actionSheet
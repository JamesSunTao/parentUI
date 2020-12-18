//reportHeadImage
import reportThemes from './theme.vue'

reportThemes.install = function (Vue) {
  Vue.component(reportThemes.name, reportThemes)
}

export default reportThemes

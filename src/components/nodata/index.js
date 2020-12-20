import nodata from './src/nodata.vue'

nodata.install = function (Vue) {
  Vue.component(nodata.name, nodata)
}

export default nodata
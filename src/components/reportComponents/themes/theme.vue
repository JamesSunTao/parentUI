<template lang="pug">
  .vk-report-container(style="background-size: contain")
    component(v-for="item in reportData" :is="item.childType" :key="item.type" :report-prop="item.data")
</template>

<script>
import queryString from 'query-string'
import reportHeadImage from '../report/report-head-image/src/reportHeadImage.vue'
const qs = queryString.parse(window.location.search) || queryString.parse(window.location.hash)
export default {
  created() {
    window.document.documentElement.setAttribute('data-theme', this.reportConfig.theme)
  },
  components: {
    reportHeadImage
  },
  props: {
    reportConfig: { // 报告基本配置
      type: Object,
      default: () => {
        return {
          theme: 'purple'
        }
      }
    },
    reportData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../asstes/style/mixin.styl'
.vk-report-container
  height 100vh
  text-align left
  bg_color(background)
</style>

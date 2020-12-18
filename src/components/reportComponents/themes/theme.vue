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
        return [
          {
          childType: 'report-head-image', //组件名称
          data: {
            firstTitle: '这是测试一级标题文111案', // 一级标题
            secondTitle: '我是耳机标题的测试文案', // 二级标题
            left: '20', // 头像相对于左边的距离 单位PX
            hintText: '提示文案', // 说明文案，如果说明为空，不显示
            score: 'A+', //成绩，目前支持 a/aPuls/b/bPuls/c/cPuls
            headImage: 'https://media.vipkidstatic.com/homework/qc/%E9%BB%84%E5%8F%91%E7%94%B7%E5%AD%A91572942668977.png', // 头像链接
            name: 'jack' //学生名字
          },
          type: 'reportHeadImage' //组件类型 组件唯一标示
        }
        ]
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

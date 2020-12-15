<template lang="pug">
  .vk-report.vk-report-head-image-container
    .vk-report-head-image(:style="headStyle")
      headPort(:name="headProps.name" :headImage="headProps.headImage")
    headAchievement(:rote="headProps.rote" :hint-text="headProps.hintText")
    .vk-report-head-title
      headFirstTitle(:title="headProps.firstTitle")
      headSecondTitle(:title="headProps.secondTitle")
</template>

<script>
import headPort from '../../../components/report-head-port/reportHeadPort.vue'
import headAchievement from '../../../components/report-achievement/report-achievement'
import headFirstTitle from '../../../components/report-first-title/report-first-title'
import headSecondTitle from '../../../components/report-second-title/report-second-title'
import headImage from '../../../asstes/images/default-head.png'
export default {
  name: 'reportHeadImage',
  data() {
    return {
      headProps: {
        left: 20,
        headImage: headImage,
        name: 'name',
        hintText: '',
        rote: 'aPuls',
        firstTitle: '这是一级标题',
        secondTitle: '这是二级标题',
      },
    }
  },
  props: {
    headPropsDes: {
      type: Object,
      default: () => {
        return null
      }
    },
    reportProp: Object
  },
  created() {
    if (this.headPropsDes) {
      this.headProps = Object.assign(this.headProps, this.headPropsDes)
    } else {
      this.headProps = Object.assign(this.headProps, this.reportProp)
    }
  },
  computed: {
    headStyle() {
      return {'left': this.headProps.left + 'px'}
    }
  },
  components: {
    headPort, headAchievement, headFirstTitle, headSecondTitle
  }
}
</script>
<style lang="stylus" scoped>
.vk-report-head-image-container
  position relative
  .vk-report-head-image
    display inline-block
    position absolute
    left 20px
  .vk-report-head-title
    position relative
    top -10px
</style>


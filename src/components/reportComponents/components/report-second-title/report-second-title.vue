<template lang="pug">
  .vk-report-title
    .title {{title}}
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '这是二级标题'
    }
  }
}
</script>
<style lang="stylus" scoped>
.vk-report-title
  height 18px
  line-height 18px
  text-align center
  font-size 12px
  color #ffffff
</style>

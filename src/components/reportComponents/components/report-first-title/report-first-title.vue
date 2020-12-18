<template lang="pug">
  .vk-report-title
    .title {{title}}
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
.vk-report-title
  height 24px
  line-height 24px
  text-align center
  font-size 16px
  color #ffffff
</style>


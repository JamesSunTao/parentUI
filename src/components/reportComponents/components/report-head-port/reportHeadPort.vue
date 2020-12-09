<template lang="pug">
  .vk-port-container
    .vk-port-head(:style="bgObj")
    .vk-port-name {{name}}
</template>
<script>
export default {
  computed: {
    bgObj() {
      return {
        'background-image': `url(${this.headImage})`
      }
    }
  },
  props: {
    headImage: String,
    name: String
  }
}
</script>
<style lang="stylus" scoped>
@import '../../asstes/style/mixin.styl'
.vk-port-container
  display inline-block
  width 68px
  padding 8px 5px
  text-align center
  head_color(headbgc)
  border-radius: 0px 0px 16px 16px;
  .vk-port-head
    display inline-block
    width 40px
    height 40px
    background-size cover
    background-repeat repeat
    border-radius 50%
  .vk-port-name
    max-width 65px
    font-size 14px
    color #ffffff
    ellipsis()
    padding 2px 0
</style>

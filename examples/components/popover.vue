<template>
  <div class="aaa">
    <popover class="aa" label="我是文字啊" position_y="bottom">
      <span class="btn" slot="button">点我</span>
    </popover>
    <popover class="aa" label="我是文字啊">
      <span class="btn" slot="button">点我</span>
    </popover>
  </div>
</template>
<script>
import popover from '../../src/components/popover/src/popover.vue'
export default {
  components: { popover },
}
</script>

<style lang='stylus' scope>
 .aaa
   padding-top: 100px
   display: inline-block;
   .btn
    border 2px solid #eee
    border-radius: 1px
  .aa
   margin-bottom: 20px
  .adada
   background: red
</style>
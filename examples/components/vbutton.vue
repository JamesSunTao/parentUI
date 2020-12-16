<template>
  <div class="button-demo-wrap">
    <div class="button-demo-block">
      <h2>按钮类型</h2>
      <vbutton type="primary">primary button</vbutton>
      <vbutton type="primary" weak>primary weak</vbutton>
      <vbutton type="primary" disabled>primary disabled</vbutton>

    </div>
    <div class="button-demo-block">
      <h2>朴素按钮</h2>
      <vbutton type="primary" plain>plain button</vbutton>
      <vbutton type="primary" plain weak>plain weak</vbutton>
      <vbutton type="primary" plain disabled>plain disabled</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>按钮尺寸</h2>
      <span class="big-button">
        <vbutton type="primary" size="large">大号按钮</vbutton>
      </span>
      <vbutton type="primary" size="normal">普通按钮</vbutton>
      <vbutton type="primary" size="small">小号按钮</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>加载状态</h2>
      <vbutton loading loading-type='spinner' loading-text='加载中...' type="primary"></vbutton>
    </div>
  </div>
</template>

<script>
import vbutton from '../../src/components/button/src/vbutton.vue'
export default {
  components: { vbutton },
  methods:{
    onClick(){
      console.log('clicked')
    }
  }
}
</script>

<style lang="stylus" scoped>
.big-button
  display block
  margin-bottom 5px
</style>
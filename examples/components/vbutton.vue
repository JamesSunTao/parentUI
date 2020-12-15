<template>
  <div class="button-demo-wrap">
    <div class="button-demo-block">
      <h2>按钮类型</h2>
      <vbutton @click="onClick">default button</vbutton>
      <vbutton type="primary">primary button</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>朴素按钮</h2>
      <vbutton type="primary" plain>plain button</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>禁用状态</h2>
      <vbutton type="primary" disabled>disabled button</vbutton>
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
      <h2>自定义颜色</h2>
      <vbutton color="#00D185">单色按钮</vbutton>
      <vbutton plain color="#00D185">单色按钮</vbutton>
      <vbutton color="linear-gradient(to right, #FFCD1A, #FF6422)">渐变色按钮</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>加载状态</h2>
      <vbutton loading loading-type='spinner' loading-text='加载中...' type="primary"></vbutton>
      <button>test</button>
    </div>
  </div>
</template>

<script>
import vbutton from '../../src/components/button/src/vbutton.vue'
// import button from '../../src/components/button/src/vbutton.vue'
export default {
  components: { vbutton },
  methods:{
    onClick(){
      console.log('clicked')
    }
  }
  // components: { button },

}
</script>

<style lang="stylus" scoped>
.big-button
  display block
  margin-bottom 5px
</style>
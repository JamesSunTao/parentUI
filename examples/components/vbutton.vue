<template>
  <div class="button-demo-wrap">
    <headerbar title="button"/>
    <div class="button-demo-block" style="padding-top: 44px">
      <h2>一级主按钮</h2>
      <span class="big-button">
        <vbutton type="primary" size="large">primary large</vbutton>
      </span>
      <vbutton type="primary" size="normal">primary normal</vbutton>
      <vbutton type="primary" size="small">primary small</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>二级主按钮</h2>
      <span class="big-button">
        <vbutton type="primary" size="large" plain>plain large</vbutton>
      </span>
      <vbutton type="primary" plain>plain button</vbutton>
      <vbutton type="primary" plain disabled>plain disabled</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>三级主按钮</h2>
      <span class="big-button">
        <vbutton type="primary" size="large" weak>weak large</vbutton>
      </span>
      <vbutton type="primary" weak>primary weak</vbutton>
      <vbutton type="primary" disabled>primary disabled</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>三级次按钮</h2>
      <span class="big-button">
        <vbutton type="primary" size="large" plain weak>primary plain weak</vbutton>
      </span>
      <vbutton type="primary" plain weak>plain weak</vbutton>
      <vbutton type="primary" plain disabled>plain disabled</vbutton>
    </div>
    <div class="button-demo-block">
      <h2>loading</h2>
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
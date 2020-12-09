<template>
  <div class="tabs_warp">
    <headerbar title="tabs"></headerbar>
    <div class="tabs_item tab-first">
      <h3>基础用法</h3>
      <tabs @changeTab="changeTab1" :tabsData="commonData"></tabs>
      <p>{{curContent1}}</p>
    </div>
    <div class="tabs_item">
      <h3>标签栏滚动</h3>
      <tabs @changeTab="changeTab2" :tabsData="scrollData" :scrollspy="scrollspy"></tabs>
      <p>{{curContent2}}</p>
    </div>
    <div class="tabs_item">
      <h3>样式风格</h3>
      <tabs @changeTab="changeTab3" :tabsData="scrollData" :scrollspy="scrollspy" tabsStyle="card"></tabs>
      <p>{{curContent3}}</p>
    </div>
   
  </div>
</template>
<script>
export default {
  name: 'cardTabs',
  data() {
    return {
      curContent1: '我是内容1',
      commonData: [
        {tabName: '标签 1'},
        {tabName: '标签 2'},
      ],
      curContent2: '我是内容1',
      curContent3: '我是内容1',
      scrollspy: true,
      scrollData: [
        {tabName: '标签 1'},
        {tabName: '标签回家舒服 2'},
        {tabName: '标签 3'},
        {tabName: '标签 4'},
        {tabName: '标签 5'},
        {tabName: '标签 6'},
      ]
    }
  },
  methods: {
    changeTab1(value) {
      this.curContent1 = `我是内容${value+1}`
    },
    changeTab2(value) {
      this.curContent2 = `我是内容${value+1}`
    },
    changeTab3(value) {
      this.curContent3 = `我是内容${value+1}`
    }
  }
}
</script>
<style lang="stylus">
  .tabs_warp
    background: #e5e5e5
    min-height: 100vh
    .tabs_item
      h3
        margin: 0;
        padding: 32px 16px 16px;
        color: rgba(69, 90, 100, 0.6);
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        text-align: left
      p
        background: #FF5500
        color: #fff
        margin: 0
        padding: 16px
    .tab-first
      margin-top: 44px  
</style>

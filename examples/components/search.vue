<template>
  <div class="aaa">
    <headerbar title="search"></headerbar>
    <div class="content">
      <div class="content-item">
        <div class="info">默认激活态</div>
        <search v-model="value" @focus="fn1" @blur="fn2" @startSearch="fn3" @delete="fn5" @cancel="fn6"></search>
      </div>
      <div class="content-item">
        <div class="info">不展示背景</div>
        <search v-model="value" @focus="fn1" @blur="fn2"  :supportMark="false" @startSearch="fn3" @delete="fn5" @cancel="fn6"></search>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      value1: '2'
    }
  },
  methods: {
    fn1() {
      this.$toast({text: '聚焦事件开启'})
    },
    fn2() {
      this.$toast({text: '失去焦事件'})
    },
    fn3() {
      this.$toast({text: '开始查询'})
    },
    fn5() {
     this.$toast({text: '删除了'})
    },
    fn6() {
      this.$toast({text: '取消了'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  margin-top: 44px
  text-align: left
  .content-item
    margin-bottom: 12px
    .info
     padding: 10px 16px
     margin-bottom: 5px
</style>
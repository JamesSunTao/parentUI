<template>
<div class="demo">
  <h2>JS Components</h2>
  <div v-for="item in jsRouter" :key="item.name" class="item">
    <router-link :to="item.path">{{item.name}}</router-link>
  </div>
  <h2>UI Components</h2>
  <div v-for="item in uiRouter" :key="item.name" class="item">
    <router-link :to="item.path">{{item.name}}</router-link>
  </div>
</div>
</template>
<script>
import jsRouter from './router/js-router'
import uiRouter from './router/ui-router'
export default {
  data () {
    return {
      jsRouter,
      uiRouter
    }
  },
  methods: {
    //
  }
}
</script>
<style lang='stylus' scoped>
.demo
  .item
    text-align left
    border-bottom 1px solid #e8e8e8
    :after
      content '>'
      display inline-block
      position absolute
      right 12px
      color #c5c5c5
    a
      color: #333
      text-decoration: none
      display: block
      width: 100%
      box-sizing: border-box
      padding: 12px
  </style>

<template>
<div>
  <div v-for="item in list" :key="item.name">
    <router-link :to="item.path">{{item.name}}</router-link>
  </div>
</div>
</template>
<script>
import routerList from './router.js'

export default {
  data () {
    return {
      list: routerList
    }
  }
}
</script>
<style>
</style>

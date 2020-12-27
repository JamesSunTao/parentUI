<template lang="pug">
  .container
    headerbar(title="pullRefresh")
      .header-right(slot="right" @click="hanlder" v-text="isEnable? '关闭' : '开启'")
    .pull-resrefh
      pull-refresh(ref="isEnable" refresh-class-name="test-box" @refresh="refresh")
      .test-box
</template>
<script>
export default {
  data() {
    return {
      isEnable: true
    }
  },
  methods: {
    hanlder() {
      this.isEnable = !this.isEnable
      this.$refs.isEnable.isEnableFunction(this.isEnable)
    },
    refresh() {
      this.$toast({text: '我要开始刷新了'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100vh
  .pull-resrefh
    height calc(100% - 44px)
    padding-top 44px
    .test-box
      height 100%
      background #B393FF
</style>

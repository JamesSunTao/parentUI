<template lang="pug">
  .container
    headerbar(title="notify")
    .box
      notify(class="notify-normal" :icon="hint" message="将自己的帖子分享至朋友圈有机会获得增课哦！")
      notify(class="notify-normal" message="将自己的帖子分享至朋友圈有机会获得增课哦课哦课！超出省略号")
    .notify-multi
      notify(class="notify-normal" :icon="warn" type="multi" message=" 上节课学习课程较难，What is 和 that is 容易混淆，宝爸宝妈要及时帮助宝贝温习…")
      notify(class="notify-normal" type="multi" message=" 上节课学习课程较难，What is 和 that is 容易混淆，宝爸宝妈要及时帮助宝贝温习…")
      notify(class="notify-normal" button="按钮" type="multi" message=" 上节课学习课程较难，What is 和 that is 容易混淆，宝爸宝妈要及时帮助宝贝温习…")

      notify(class="notify-normal" @handleclick="handle" button="按钮" :close="false" type="multi" message=" 上节课学习课程较难，What is 和 that is 容易混淆，宝爸宝妈要及时帮助宝贝温习…")
</template>
<script>
import hint from '../assets/images/hint.png'
import warn from '../assets/images/warn.png'
export default {
  data() {
    return {
      hint: hint,
      warn: warn
    }
  },
  methods: {
    handle() {
      this.$dialog({
        title: '提示',
        text: '我点击了按钮'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.box
  margin-top 50px
.notify-multi
  width 92%
  margin 0 auto
.notify-normal
  margin-bottom 15px
</style>

<template>
  <div class="min-wrap">
    <headerbar :title="title"></headerbar>
    <parentui-col :span="24" class="span24">span: 24</parentui-col>
    <parentui-col :span="12" class="span12">span: 12</parentui-col>
    <parentui-col :span="6" class="span6">span: 12</parentui-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'parentui-col'
    }
  }
}
</script>
<style lang="stylus" scoped>
.min-wrap
  padding-top: 80px
  line-height: 50px
for row in (1..24)
  .span{row}
    margin-bottom: 10px
    color: #ffffff
    font-weight: bloder
    font-size: 20px
  .span24
    background: #2b4f8b
  .span12
    background: #096dd9
  .span6
    background: #367cf2
</style>
<template>
  <div class="main-wrap">
    <headerbar :title="title"></headerbar>
    <br>
    <parentui-row gutter="10" class="row-pannel">
      <parentui-col :span="8">
        <div class="span8">span: 8</div>
      </parentui-col>
      <parentui-col :span="6">
        <div class="span6">span: 6</div>
      </parentui-col>
      <parentui-col :span="4">
        <div class="span4">span: 4</div>
      </parentui-col>
      <parentui-col :span="6">
        <div class="span6">span: 6</div>
      </parentui-col>
    </parentui-row>
    <parentui-row type="flex" justify="space-between" align="center" class="row-pannel">
      <parentui-col :span="6" class="span6">span: 8</parentui-col>
      <parentui-col :span="6" class="span6">span: 6</parentui-col>
      <parentui-col :span="6" class="span6">span: 6</parentui-col>
    </parentui-row>
    <parentui-row type="flex" justify="space-around" align="center" class="row-pannel">
      <parentui-col :span="6" class="span6">span: 8</parentui-col>
      <parentui-col :span="6" class="span6">span: 6</parentui-col>
      <parentui-col :span="6" class="span6">span: 6</parentui-col>
    </parentui-row>
    <parentui-row class="row-pannel">
      <parentui-col :span="4" class="span4">span: 4</parentui-col>
      <parentui-col :span="4" class="span4" offset="2">span: 4</parentui-col>
      <parentui-col :span="4" class="span4" offset="2">span: 4</parentui-col>
      <parentui-col :span="4" class="span4" offset="2">span: 4</parentui-col>
    </parentui-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'parentui-row'
    }
  }
}
</script>
<style lang="stylus" scoped>
  .main-wrap
    padding-top: 50px
    line-height: 50px
    color: #ffffff
  .row-pannel
    margin-bottom: 30px
  .span8
    background: red
  .span6
    background: #ff6422
  .span4
    background: #c0653e
</style>
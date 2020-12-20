<template>
  <div class="main_content">
    <headerbar title="badge"></headerbar>
    <h3>数字类型/文字类型</h3>
    <p>
      <badge value="2">徽标</badge>
    </p>
    <p>
      <badge value="3待完成">徽标</badge>
    </p>
    <p>
      <badge value="···">徽标</badge>
    </p>
    <h3>圆点类型</h3>
    <p>
      <badge isDot>徽标</badge>
    </p>
    <h3>带有最大值的数字类型</h3>
    <p>
      <badge :value="200" :max="99">徽标</badge>
    </p>
    <h3>自定义徽标位置</h3>
    <p>
      <badge :rightDistance="0" :topDistance="-10" :value="200" :max="99">徽标</badge>
    </p>
    <h3>自定义徽标背景颜色及颜色</h3>
    <p>
      <badge :rightDistance="0" :value="200" :max="99" badgeBgColor='#D8D8D8'>徽标</badge>
    </p>
  </div>
</template>
<script>
export default {};
</script>

<style lang='stylus' scoped>
.main_content {
  padding: 80px 0px 10px;
  h3 {
    margin-top:20px
  }
}
</style>
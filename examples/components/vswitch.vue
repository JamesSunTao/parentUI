<template>
  <div>
    <headerbar title="checkbox"></headerbar>
    <div class="content">
      <div class="content-item">
        <div class="info">默认态</div>
        <vswitch v-model="value1" active-value="1" inactive-value="2"></vswitch>
      </div>
      <div class="content-item">
        <div class="info">可设置宽度</div>
        <vswitch v-model="value2" active-value="2" inactive-value="1" width="100"></vswitch>
      </div>
      <div class="content-item">
        <div class="info">设置颜色支持数组格式</div>
        <vswitch v-model="value3" :activeColor="['rgb(255,211,250)', 'pink']" :inactiveColor="['yellow', 'red']" active-value="1" inactive-value="2"></vswitch>
      </div>
      <div class="content-item">
        <div class="info">设置颜色支持字符串格式</div>
        <vswitch v-model="value4" activeColor="red" active-value="2" inactive-value="3"></vswitch>
      </div>
      <div class="content-item">
        <div class="info">禁用态</div>
        <vswitch v-model="value5" disabled active-value="1" inactive-value="2"></vswitch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "1",
      value2: "2",
      value3: "3",
      value4: "4",
      value5: "5",
      val: true,
    };
  },
};
</script>

<style lang='stylus' scoped>
.content
  margin-top: 44px
  padding: 20px 16px
  text-align: left
  .content-item
    margin-bottom: 12px
    .info
     margin-bottom: 5px
</style>
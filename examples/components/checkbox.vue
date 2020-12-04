<template>
  <div>
    <headerbar title="checkbox"></headerbar>
    <div class="content">
      <div class="content-item">
        <div class="info">默认激活态</div>
        <checkbox v-model="value" true-label="1"></checkbox>
      </div>
      <div class="content-item">
        <div class="info">自定激活颜色</div>
        <checkbox v-model="value3" true-label="3" active-color="blue"></checkbox>
      </div>
      <div class="content-item">
        <div class="info">自定义文字说明</div>
        <checkbox v-model="value4" true-label="3" label="中国人民万岁"></checkbox>
      </div>
      <div class="content-item">
        <div class="info">不可点击态</div>
        <checkbox v-model="value5" true-label="4" disabled></checkbox>
        <checkbox v-model="value5" true-label="5" disabled></checkbox>
      </div>
      <div class="content-item">
        <div class="info">设置尺寸为small</div>
        <checkbox v-model="value6" true-label="3" label="中国人民万岁" active-color="red" size="small"></checkbox>
      </div>
      <div class="content-item">
        <div class="info">可添加change事件</div>
        <checkbox v-model="value7" true-label="我被激活啦" size="small" @change="fn"></checkbox>
      </div>
      <div class="content-item">
        <div class="info">插槽功能</div>
        <checkbox v-model="value8" true-label="我被激活啦"  size="small">我是checkbox组件，我有插槽功能</checkbox>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: ["选中且禁用", "复选选框B"],
      value: "1",
      value2: "2",
      value3: "4",
      value4: "1",
      value5: "5",
      value6: "6",
      value7: "7",
      value8: "8",
    };
  },
  methods: {
    fn(e) {
      alert(e)
    },
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
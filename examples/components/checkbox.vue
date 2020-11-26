<template>
  <div class="div">
    <div>
      <span>默认态</span>
      <checkbox v-model="value2"></checkbox>
    </div>
    <div>
      <span>默认激活态</span>
      <checkbox v-model="value" true-label="1"></checkbox>
    </div>
    <div>
      <span>自定激活颜色</span>
      <checkbox v-model="value3" true-label="3" active-color="blue"></checkbox>
    </div>
    <div>
      <span>自定义文字说明</span>
      <checkbox
        v-model="value4"
        true-label="3"
        label="中国人民万岁"
        active-color="red"
      ></checkbox>
    </div>
    <div>
      <span>不可点击态</span>
      <checkbox v-model="value5" true-label="4" disabled></checkbox>
      <checkbox v-model="value5" true-label="5" disabled></checkbox>
    </div>
    <div>
      <span>设置尺寸为small</span>
      <checkbox
        v-model="value6"
        true-label="3"
        label="中国人民万岁"
        active-color="red"
        size="small"
      ></checkbox>
    </div>
    <div>
      <span>可添加change事件</span>
      <checkbox
        v-model="value7"
        true-label="我被激活啦"
        active-color="red"
        size="small"
        @change="fn"
      ></checkbox>
    </div>
    <div>
      <span>插槽功能</span>
      <checkbox
        v-model="value8"
        true-label="我被激活啦"
        active-color="red"
        size="small"
      >
        我是checkbox组件，我有插槽功能</checkbox
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      alert(e);
    },
  },
};
</script>
<style lang='stylus' scoped>
.div
  margin-top: 100px;
</style>
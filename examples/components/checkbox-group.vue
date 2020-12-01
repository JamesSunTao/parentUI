<template>
  <div>
    <headerbar title="checkbox"></headerbar>
    <div class="content">
      <div class="content-item">
        <div class="info">复选框（checkbox-group）默认态</div>
        <checkbox-group  v-model="array1">
          <checkbox class="n" @change="fn" true-label="3" label="复选选框A"></checkbox>
          <checkbox true-label="3" label="复选选框B"></checkbox>
          <checkbox label="复选选框C"></checkbox>
        </checkbox-group>
      </div>
      <div class="content-item">
        <div class="info">复选框（checkbox-group）排列顺序</div>
        <checkbox-group position="column" size="small" v-model="array">
          <checkbox @change="fn" true-label="3" label="复选选框A"></checkbox>
          <checkbox true-label="3" label="复选选框B"></checkbox>
          <checkbox label="复选选框C"></checkbox>
        </checkbox-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: ["选中且禁用", "复选选框B"],
      array1: ["选中且禁用", "复选选框B"]
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
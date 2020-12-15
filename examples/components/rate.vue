<template>
  <div class="tabs_warp">
    <headerbar title="rate"></headerbar>
    <div class="rate_content">
      <!-- 基础用法 -->
      <h4>基础用法</h4>
      <rate @starFun="starFun" :curIndex="curIndex1">
      </rate>

      <!-- 禁止点击 -->
      <h4>禁止点击</h4>
      <rate @starFun="starFun" @starDisabledFun="starDisabledFun" :curIndex="curIndex2" evaluated disabled>
        <template v-slot:rate_title>
          <h3>您对本次的服务满意吗？</h3>
        </template>
      </rate>

      <!-- 带title -->
      <h4>带title用法</h4>
      <rate @starFun="starFun" :curIndex="curIndex2" evaluated>
        <template v-slot:rate_title>
          <h3>您对本次的服务满意吗？</h3>
        </template>
      </rate>


      <!-- 带描述信息 -->
      <h4>带描述信息用法</h4>
      <rate @starFun="starFun" :curIndex="curIndex2">
        <template v-slot:rate_title>
          <h3>您对本次的服务满意吗？</h3>
        </template>
        <template v-slot:rate_intro>
          <p class="star-intro">服务：人行秋色之中，脚下踩的，发上戴的，肩上似有意无意飘坠的，莫非明艳的金黄与黄金。</p>
        </template>
      </rate>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curIndex1: 2,
      curIndex2: 1,
    }
  },
  methods: {
   starFun(value){
     this.$toast({'text': `当前选择：${value}`})
   },
   starDisabledFun(){
     this.$toast({'text': `禁止点击`, type: 'warning'})
   }
  }
}
</script>
<style lang="stylus">
.rate_content
  box-sizing: border-box
  padding: 50px 16px
  h4
    margin: 0;
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: left
 
</style>

<template>
  <div class="div2">
    <div>
      <span>默认态</span>
      <vswitch v-model="value1"  active-value="1" inactive-value='2'></vswitch>
    </div>
    <div>
      <span>可设置宽度</span>
       <vswitch v-model="value2"  active-value="2" inactive-value='1' width="100"></vswitch>
    </div>
    <div>
      <span>设置颜色支持数组格式</span>
       <vswitch v-model="value3"  :activeColor="['blue','pink']"  :inactiveColor="['yellow','red']" active-value="1" inactive-value='2'></vswitch>
    </div>
    <div>
      <span>设置颜色支持字符串格式</span>
       <vswitch v-model="value4" activeColor="red" active-value="2" inactive-value='3'></vswitch>
    </div>
    <div>
      <span>禁用态</span>
      <vswitch v-model="value5" disabled  active-value="1" inactive-value='2'></vswitch>
    </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     value1: '1',
     value2: '2',
     value3: '3',
     value4: '4',
     value5: '5',
     val:true
   }
 },
 mounted(){
   console.log(this.value)
 }
}
</script>

<style lang='stylus' scoped>
  .div2
   margin: 50px 100px
   >div
    display flex
    align-items center
    font-size 14px
</style>
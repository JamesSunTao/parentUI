<template>
  <div class="div2">
    <vswitch v-model="value1"  disabled active-value="1" inactive-value='2'></vswitch>
    <vswitch v-model="value2" active-value="2" inactive-value='1' width="100"></vswitch>
    <vswitch v-model="value3"  :activeColor="['blue','red1']"  :inactiveColor="['yellow','red']" active-value="1" inactive-value='2'></vswitch>
    <vswitch v-model="value4" activeColor="red" active-value="2" inactive-value='2'></vswitch>
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
     val:true
   }
 },
//  methods:{
//    fn(val){
//      console.log(val)
//    }
//  },
 mounted(){
   console.log(this.value)
 }
}
</script>

<style lang='stylus' scoped>
  .div2
   margin: 50px 100px
</style>
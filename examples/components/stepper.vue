<template>
  <div>
    <headerbar title="stepper"/>
    <div :style="{paddingTop: '50px'}" class="stepper-wrapper">
      <div>自定义大小</div>
      <stepper defaultValue="3" buttonSize="40" inputWidth="40"></stepper>
      <div>beforeChange</div>
      <stepper v-model="value" :beforeChange="beforeChange"></stepper>
      <div>步长为2</div>
      <stepper v-model="stepper1" step='2'></stepper>
      <div>限制输入范围</div>
      <stepper v-model="stepper2" :min="5" :max="8"></stepper>
      <div>禁用状态</div>
      <stepper v-model="stepper3" disabled></stepper>
      <div>固定小数位数</div>
      <stepper v-model="stepper4" decimalLength='1'></stepper>
      <div>圆角theme</div>
      <stepper v-model="stepper6" theme='round'></stepper>
      <!-- <button @click="handleclick">Add</button> -->
    </div>
  </div>
</template>

<script>
import stepper from '../../src/components/stepper/src/stepper.vue'
export default {
  components: {
    stepper
  },
  data() {
    return {
      value: 3,
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
    }
  },
  methods: {
    beforeChange() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
    },
    handleclick() {
      this.value++
    }
  }

}
</script>

<style lang="stylus" scoped>
.stepper-wrapper
  div
    margin 15px 0 5px 0
</style>
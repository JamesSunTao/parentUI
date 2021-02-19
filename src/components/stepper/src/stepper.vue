<template>
  <div class="vk-stepper">
    <button :style="buttonStyleObj" :class="buttonClassObj.concat('vk-stepper__minus')" :disabled="disabled || disable_minus" @click="handleMinus">-</button>
    <input :style="inputStyleObj" class="vk-stepper__input" type="text" v-model="value" :disabled="disabled || disable_input" :name="name" @change="handleInputChange"/>
    <button :style="buttonStyleObj" :class="buttonClassObj.concat('vk-stepper__plus')" @click="handlePlus" :disabled="disabled || disable_plus">+</button>
  </div>
</template>
<script>

export default {
  name: "stepper",
  props: {
    vModel: {
      type: Number|String,
    },
    min: {
      type: Number|String,
      default: 1
    },
    max: {
      type: Number|String,
      default: 10
    },
    defaultValue: {
      type: Number|String,
      default: 1
    },
    step: {
      type: Number|String,
      default: 1
    },
    name: {
      type: Number|String,
      default: ''
    },
    inputWidth: {
      type: Number|String,
      default: 32
    },
    buttonSize: {
      type: Number|String,
      default: 28
    },
    decimalLength: {
      type: Number|String,
      default: 1
    },
    theme: {
      type: String,
      default: 'square'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    disablePlus: {
      type: Boolean,
      default: false
    },
    disableMinus: {
      type: Boolean,
      default: false
    },
    disableInput: {
      type: Boolean,
      default: false
    },
    longPress: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputStyleObj: {
        width: Number(this.inputWidth) + 'px',
        height: Number(this.buttonSize) + 'px'
      },
      buttonStyleObj: {
        width: Number(this.buttonSize) + 'px',
        height: Number(this.buttonSize) + 'px'
      },
      value: (this.vModel || this.defaultValue).toFixed(Number(this.decimalLength)),
      disable_minus: this.disableMinus,
      disable_plus: this.disablePlus,
      disable_input: this.disableInput
    };
  },
  mounted() {
    if (!this.disableMinus && this.min >= this.value) {
      this.disable_minus = true
    }
    if (!this.disablePlus && this.max <= this.value) {
      this.disable_plus = true
    }
  },
  computed: {
    buttonClassObj: function() {
      return [
        'vk-stepper__button__' + this.theme,
        {'vk-stepper__button': true}
      ]
    }
  },
  methods: {
    handleMinus() {
      this.value = Math.max(+this.value - +this.step, this.min).toFixed(Number(this.decimalLength))
      if (!this.disable_minus && +this.value === +this.min) {
        this.disable_minus = true
      }
      if (!this.disablePlus && this.disable_plus) {
        this.disable_plus = false
      }
    },
    handlePlus(){
      this.value = Math.min(+this.value + +this.step, this.max).toFixed(Number(this.decimalLength))
      if (!this.disable_plus && +this.value === +this.max) {
        this.disable_plus = true
      }
      if (!this.disableMinus && this.disable_minus) {
        this.disable_minus = false
      }
    },
    handleInputChange(event) {
      this.value = (+this.value).toFixed(Number(this.decimalLength))
      this.$emit('change', event)
    }
  },
};
</script>
<style lang="stylus" scoped>
.vk-stepper
  font-size 0
  .vk-stepper__input
    padding 0
    margin 0 2px
    border 0
    font-size 14px
    text-align center
  .vk-stepper__button
    padding 0
    margin 0
    border 0
    font-size 14px
</style>
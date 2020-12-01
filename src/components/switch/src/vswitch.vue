<template>
  <div
    class="ui-switch_wrap"
    :class="{ is_check: checked }"
    @click.prevent="switchValue"
    :style="{ width: coreWidth + 'px' }"
    ref="core"
  >
    <input
      type="checkbox"
      class="ui-switch__input"
      @change="handleChange"
      ref="input"
    />
    <div class="ui-switch_item" ref="item"></div>
  </div>
</template>

<script>
export default {
  name: "vswitch",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    activeColor: {
      type: [String, Array],
      default: "",
    },
    inactiveColor: {
      type: [String, Array],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 51,
      validator: function (value) {
          return /^[0-9]*$/.test(value)
      },
    },
  },
  data() {
    return {
      coreWidth: this.width,
    } 
  },
  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit("input", this.inactiveValue)
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue
    },
    switchDisabled() {
      return this.disabled
    },
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor()
      }
    },
  },
  methods: {
    handleChange(event) {
      const val = this.checked ? this.inactiveValue : this.activeValue
      this.$emit("input", val)
      this.$emit("change", val)
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked
      }) 
    },
    switchValue() {
      !this.switchDisabled && this.handleChange()
    },
    setBackgroundColor() {
      let newactiveColor = typeof this.activeColor == 'string' ? [this.activeColor] : this.activeColor
      let newinactiveColor = typeof this.inactiveColor == 'string' ? [this.inactiveColor] : this.inactiveColor
      let newColor = this.checked ? newactiveColor : newinactiveColor
      this.$refs.core.style.backgroundColor = newColor[0]
      this.$refs.item.style.backgroundColor =  newColor[1] || '#fff'
      if(this.verifyColor(this.$refs.core,newColor[0])) {
        window.console.warn(`${newColor[0]} is not a color`)
        this.$refs.core.style.backgroundColor = '#e1e1e1'
      }
      if(this.verifyColor(this.$refs.item,newColor[1])) {
        window.console.warn(`${newColor[1]} is not a color`)
        this.$refs.item.style.backgroundColor = '#fff'
      }
    },
    verifyColor(ele,color) {
      return color && (ele.style.backgroundColor !==  color || !ele.style.backgroundColor)
    }
  },
  mounted() {
    this.coreWidth = this.width || 51 
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor() 
    }
    this.$refs.input.checked = this.checked 
  },
} 
</script>

<style  lang='stylus' scoped>
@import '../../../style/var.styl'
.ui-switch_wrap
  width: $vk-switch-width
  height: $vk-switch-height
  border-radius: $vk-radius-base * 4
  display: flex
  justify-content: flex-start
  align-items: center
  background-color: #e1e1e1
  position: relative 
  transition: border-color 0.3s, background-color 0.3s
  .ui-switch__input
    position: absolute
    width: 0
    height: 0
    opacity: 0 
    margin: 0
  .ui-switch_item 
    position: absolute
    top: 1px
    left: 1px
    transition: 0.3s
    background-color: $vk-bgc-white
    width: $vk-switch_item-width
    height: $vk-switch_item-height
    border-radius: 50%
  &.is_check
    background-color: $vk-main-color
    .ui-switch_item
      left: 100%
      margin-left: -30px
</style>
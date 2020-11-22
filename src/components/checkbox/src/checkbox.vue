<template >
  <label class="ui-checkbox" :class="[{ 'is-checked': isChecked },{'ui-checkbox__small':isSmall},{'disable':isDisabled}]">
    <span class="ui-checkbox__input">
      <span class="ui-checkbox__inner" ref='inner'></span>
      <input
        v-if="trueLabel || falseLabel"
        :true-value="trueLabel"
        :false-value="falseLabel"
        :name="name"
        type="checkbox"
        class="ui-checkbox__original"
        v-model="model"
        @change="handleChange"
        :disabled="isDisabled"
      />
      <input
        v-else
        type="checkbox"
        class="ui-checkbox__original"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        :disabled="isDisabled"
      />
    </span>
    <span class="ui-checkbox__label" v-if="$slots.default || label" ref="label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "checkbox",
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    size: String,
    activeColor: String
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit("input", val)
      },
    },
    isChecked() {
      if ({}.toString.call(this.model) === "[object Boolean]") {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel
      }
    },
    isDisabled() {
      return this.disabled
    },
    isSmall() {
      return this.size === 'small'
    }
  },
  mounted() {
    if(this.activeColor && this.isChecked)  {
      this.$refs.inner.style.backgroundColor = this.activeColor
      this.$refs.label && (this.$refs.label.style.color = this.activeColor)
    }
  },
  watch:{
   isChecked(value) {
     if(this.isDisabled) return
     if(value) {
       this.$refs.inner.style.backgroundColor = this.activeColor
       this.$refs.label && (this.$refs.label.style.color = this.activeColor)
     }else  {
       this.$refs.inner.style.backgroundColor = ''
       this.$refs.label && (this.$refs.label.style.color = '')
     }
   }
  },
  methods: {
    handleChange(ev) {
      let value
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel
        } else {
          value = this.falseLabel === undefined ? false : this.falseLabel
        }
       this.$emit('change', value, ev)
    },
  },
}
</script>
<style lang="stylus" scoped>
.ui-checkbox
  color: #606266
  font-weight: 500
  font-size: 14px
  position: relative
  cursor: pointer
  display: inline-block
  white-space: nowrap
  user-select: none
.ui-checkbox__input
  white-space: nowrap
  cursor: pointer
  outline: none
  display: inline-block
  line-height: 1
  position: relative
  vertical-align: middle
  .ui-checkbox__original 
    opacity: 0
    outline: none
    position: absolute
    margin: 0
    width: 0
    height: 0
    z-index: -1
  .ui-checkbox__inner 
    display: inline-block
    position: relative
    border: 1px solid #dcdfe6
    border-radius: 50%
    box-sizing: border-box
    width: 26px
    height: 26px
    background-color: #fff
    z-index: 1
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46)
    &::after
      display: block
      box-sizing: content-box
      content: ''
      display: block;
      border: 2px solid #fff
      border-left: 0
      border-top: 0
      height: 12px
      left: 10px
      position: absolute
      top: 4px
      width: 5px
      border-radius: 1px
      transform: rotate(45deg) scaleY(0)
      transition: transform 0.15s ease-in 0.05s
      transform-origin: center
&.is-checked
  .ui-checkbox__inner
    background-color: #FF5500
    border: none
    &::after 
      transform: rotate(45deg) scaleY(1)
  .ui-checkbox__label
    color: #FF5500
&.ui-checkbox__small
  .ui-checkbox__inner 
    width: 18px
    height: 18px
    &::after
      top: 3px
      width: 3px
      height: 8px
      left: 7px
&.disable
  .ui-checkbox__inner 
    background-color: #edf2fc
    border-color: #dcdfe6
    &::after
      cursor: not-allowed
      border-color: #c0c4cc
  .ui-checkbox__label
    color: #606266
</style>
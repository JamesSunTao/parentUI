<template >
  <label class="ui-checkbox" :class="[{ 'is-checked': isChecked },{'ui-checkbox__small':isSmall},{'disable':isDisabled}]">
    <span class="ui-checkbox__input">
      <span class="ui-checkbox__inner" ref='inner'></span>
      <input
        v-if="trueLabel || falseLabel"
        :true-value="trueLabel"
        :false-value="falseLabel"
        :value="label"
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
import Emitter from '../../../mixins/emitter.js';
export default {
  name: "checkbox",
  mixins: [Emitter],
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
  data() {
    return {
      selfModel: false,
    }
  },
  created() {
    this.checked && this.addToStore()
  },
  computed: {
    model: {
      get() {
        return this.isGroup
            ? this.store : this.value !== undefined
              ? this.value : this.selfModel;
      },
      set(val) {
        if(this.isGroup) {
           this.dispatch('UiCheckboxGroup', 'input', [val]);
        }
        this.$emit("input", val)
        this.selfModel = val;
      },
    },
    isGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'UiCheckboxGroup') {
            parent = parent.$parent
          } else {
            this._checkboxGroup = parent
            return true;
          }
        }
        return false;
      },
    store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
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
      return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled
    },
    isSmall() {
      return this.isGroup ? this._checkboxGroup.checkboxGroupSize :this.size === 'small'
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
    addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
          this.model.push(this.label)
        } else {
          this.model = this.trueLabel || true
        }
    },
    handleChange(ev) {
      let value
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel
        } else {
          value = this.falseLabel === undefined ? false : this.falseLabel
        }
       this.$emit('change', value, ev)
        this.$nextTick(() => {
          if (this.isGroup) {
            this.dispatch('UiCheckboxGroup', 'change', [this._checkboxGroup.value]);
          }
        });
    },
  },
}
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl'
.ui-checkbox
  position: relative
  display: inline-block
  white-space: nowrap
  user-select: none
.ui-checkbox__input
  white-space: nowrap
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
    width: $vk-checkbox-width
    height: $vk-checkbox-height
    background-color: $vk-bgc-white
    z-index: 1
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46)
    &::after
      display: block
      box-sizing: content-box
      content: ''
      display: block;
      border: 2px solid $vk-bgc-white
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
    background-color: $vk-main-color
    border: none
    &::after 
      transform: rotate(45deg) scaleY(1)
  .ui-checkbox__label
    color: $vk-main-color
&.ui-checkbox__small
  .ui-checkbox__inner 
    width: $vk-checkbox_small-width
    height: $vk-checkbox_small-height
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
      border-color: #c0c4cc
  .ui-checkbox__label
    color: #606266
</style>
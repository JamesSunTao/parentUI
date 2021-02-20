<template>
  <div class="vk-field" :class="{'van-field--disabled': disabled ,'vk-field--required':required}">
    <slot name="left-icon"></slot>
    <div class="vk-field__label" :style="labelStyle"><span>{{ label }}</span></div>
    <div class="vk-field__value">
      <div class="vk-field__body"  :style="inputStyle">
        <textarea
        v-if="type === 'textarea'"
        :placeholder="placeholder" 
        rows="1"
        class="vk-field__control"
        v-model="model"
        ref="textarea"
        @change="handleChange"
        @focus="handleFocus"
        :disabled="disabled"
        :maxLength="maxLength"
        :readonly="readonly"
        @blur="handleBlur"
        ></textarea>
        <input
          v-else
          :type="type"
          :placeholder="placeholder"

          class="vk-field__control"
          v-model="model"
          @change="handleChange"
          @focus="handleFocus"
          :disabled="disabled"
          :maxLength="maxLength"
          :readonly="readonly"
          @blur="handleBlur"
        />
      </div>
      <slot name="right-icon"></slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "field",
  props: {
    value: String|Number,
    placeholder: String,
    label: {
      type: String,
      require: true
    },
    type: {
      type: String,
      default: 'text'   
    },
    required: Boolean,
    disabled: Boolean,
    maxLength: {
       type: Number,
       default: -1  
    },
    inputStyle: Object,
    labelStyle: Object,
    readonly: Boolean,
  },
  watch: {
    model: {
      handler() {
        if(!this.$refs.textarea) return
        this.setTextArea()
      }
    }
  },
  computed: {
    model: {
      get() {
        return  this.maxLength < 0 ? this.value : this.value.substr(0,this.maxLength)
      },
      set(val) {
       this.maxLength < 0 ? this.$emit("input", val) : this.$emit("input",val.substr(0,this.maxLength))
      }
    }
  },
  mounted() {
     this.type === 'textarea' && this.setTextArea()
  },
  methods: {
    setTextArea() {
      this.$nextTick(() => {
        let textarea = this.$refs.textarea
        let height= textarea.offsetHeight
        textarea.style.height = this.$refs.textarea && (this.$refs.textarea.scrollHeight || height) + 'px'  
      })  
    },
    handleChange(ev) {
      this.$emit('change', this.model,ev)
    },
    handleFocus(ev) {
      this.$emit('focus',ev)
    },
    handleBlur(ev) {
      this.$emit('blur',ev)
    }
  },
};
</script>
<style lang='stylus' scoped>
.vk-field
  padding:10px 16px
  box-sizing: border-box
  width: 100%
  font-size: 16px
  overflow: hidden
  color: #333
  background-color: #fff
  display: flex
  line-height: 24px
  .vk-field__label
    flex: none
    box-sizing: border-box
    width: 20%
    text-align: left
    margin-right: 12px
  .vk-field__value
    width: 80%
    display: flex
    .vk-field__body
      flex: 1
      .vk-field__control
        display: block
        box-sizing: border-box
        width: 100%
        min-width: 0
        margin: 0
        padding: 0
        color: #323233
        line-height: inherit
        text-align: left
        background-color: transparent
        border: 0
        resize: none
        outline: none
&.van-field--disabled
  .vk-field__label
    color: #c8c9cc
  .vk-field__value
      .vk-field__control
          color: #c8c9cc;
          cursor: not-allowed;
          opacity: 1;
          -webkit-text-fill-color: #c8c9cc
&.vk-field--required
  overflow: visible
  position: relative
  &::before
    position: absolute
    left: 8px
    color: #ee0a24
    font-size: 14px
    content: '*'
</style>
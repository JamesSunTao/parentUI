<template>
  <div ref="stepper" class="vk-stepper">
    <button @touchstart="onTouchStart('minus')" @touchend="onTouchEnd" :style="buttonStyleObj" :class="buttonClassObj.concat('vk-stepper__minus')" :disabled="disabled || disable_minus">-</button>
    <input @blur="inputBlur" @focus="inputFocus" ref="input" @input="handleInputChange($event.target.value)" :style="inputStyleObj" :class="inputClassObj" type="number" :value="value" :disabled="disabled || disable_input"/>
    <button @touchstart="onTouchStart('plus')" @touchend="onTouchEnd" :style="buttonStyleObj" :class="buttonClassObj.concat('vk-stepper__plus')" :disabled="disabled || disable_plus">+</button>
  </div>
</template>
<script>
const LONG_PRESS_INTERVAL = 200
const LONG_PRESS_START_TIME = 600
export default {
  name: "stepper",
  model: {
    prop: "sonModel",
    event: "change"
  },
  props: {
    sonModel: {
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
      default: 0
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
    },
    beforeChange: Function
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
      value: Number(this.bigorSmall(this.sonModel || this.defaultValue, this.min, this.max) <1 ? this.min: this.bigorSmall(this.sonModel || this.defaultValue, this.min, this.max)>1?this.max: this.sonModel || this.defaultValue).toFixed(Number(this.decimalLength)),
      disable_minus: this.disableMinus,
      disable_plus: this.disablePlus,
      disable_input: this.disableInput,
      isLongPress: false,
      type: '',
      longPressTimer: null
    };
  },
  mounted() {
    if (!this.disableMinus && this.min >= this.value) {
      this.disable_minus = true
    }
    if (!this.disablePlus && this.max <= this.value) {
      this.disable_plus = true
    }
    this.$refs.stepper.addEventListener('contextmenu', function (e) {
      e.preventDefault()
    })
  },
  watch: {
    sonModel: function () {
      const res = this.bigorSmall(+this.sonModel, this.min, this.max)
      if ( res === 1) {
        this.value = Number(this.sonModel).toFixed(Number(this.decimalLength))
        if (!this.disable_plus && +this.value >= +this.max) {
          this.disable_plus = true
        }
        if (!this.disable_minus && +this.value <= +this.min) {
          this.disable_minus = true
        }
      } else {
        res > 1 ? this.value = this.max : this.value = this.min
      }
    }
  },
  computed: {
    buttonClassObj: function() {
      return [
        'vk-stepper__button__' + this.theme,
        {'vk-stepper__button': true}
      ]
    },
    inputClassObj: function() {
      return [
        'vk-stepper__input__' + this.theme,
        {'vk-stepper__input': true}
      ]
    },
  },
  methods: {
    bigorSmall(num, min, max) {
      if (+num < min) {
        return 0
      } else if (+num > max) {
        return 2
      } else {
        return 1
      }
    },
    longPressStep(type) {
      const that = this
      this.longPressTimer = setTimeout(() => {
        that.onChange(type);
        that.longPressStep(type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart(type){
      if (this.longPress) {
        this.isLongPress = false;
        clearTimeout(this.longPressTimer);
        const that = this
        this.longPressTimer = setTimeout(() => {
          that.isLongPress = true;
          // this.type = type
          that.onChange(type);
          that.longPressStep(type);
        }, LONG_PRESS_START_TIME);
      } else {
        this.onChange(type)
      }
    },
    onTouchEnd(event) {
      if (this.longPress) {
        clearTimeout(this.longPressTimer);
        if (this.isLongPress) {
          this.preventDefault(event);
        }
      }
    },
    preventDefault(event, isStopPropagation) {
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
      }
      if (isStopPropagation) {
        this.stopPropagation(event);
      }
    },
    stopPropagation(event) {
      event.stopPropagation();
    },
    onChange(type) {
      if (
        (type === 'plus' && (this.disabled || this.disablePlus)) ||
        (type === 'minus' && (this.disabled || this.disableMinus))
      ) {
        this.$emit('overlimit', type);
        return;
      }
      if (this.beforeChange) {
        const that = this
        this.callInterceptor({
          args: [that.value],
          interceptor: that.beforeChange,
          done: ()=> {
            if(type==='minus') {
              that.handleMinus()
            } else {
              that.handlePlus()
            }
          },
        });
      } else {
        if(type==='minus') {
          this.handleMinus()
        } else {
          this.handlePlus()
        }
      }
      this.$nextTick(function () {
        this.$emit(type)
      })
    },
    handleMinus() {
      this.value = Math.max(+this.value - +this.step, this.min).toFixed(Number(this.decimalLength))
      this.$emit('change', this.value)
      if (!this.disable_minus && +this.value === +this.min) {
        this.disable_minus = true
      }
      if (!this.disablePlus && this.disable_plus) {
        this.disable_plus = false
      }
    },
    handlePlus(){
      this.value = Math.min(+this.value + +this.step, this.max).toFixed(Number(this.decimalLength))
      this.$emit('change', this.value)
      if (!this.disable_plus && +this.value === +this.max) {
        this.disable_plus = true
      }
      if (!this.disableMinus && this.disable_minus) {
        this.disable_minus = false
      }
    },
    handleInputChange(value) {
      if (!value && isNaN(+value)) return
    },
    inputBlur(event) {
      this.$emit('blur', event)
      const check = this.$refs.input.value
      const tag = this.bigorSmall(this.$refs.input.value, this.min, this.max)
      switch(tag) {
        case 0:
          check = this.min
          break
        case 2:
          check = this.max
          break
      }
      this.value = Number(check).toFixed(this.decimalLength)
      // this.value = this.bigorSmall(this.$refs.input.value, this.min, this.max) && Number(this.$refs.input.value).toFixed(Number(this.decimalLength)) || this.min
      if (!this.disable_plus && +this.value >= +this.max) {
        this.disable_plus = true
        if (!this.disableMinus && this.disable_minus) {
          this.disable_minus = false
        }
      } else if (!this.disable_minus && +this.value <= +this.min) {
        this.disable_minus = true
        if (!this.disablePlus && this.disable_plus) {
          this.disable_plus = false
        }
      }
      this.$emit('change', this.value)
    },
    inputFocus(event) {
      this.$emit('focus', event)
    },
    callInterceptor(options) {
      const { interceptor, args, done, canceled } = options;

      if (interceptor) {
        const returnVal = interceptor.apply(null, args || []);

        if (this.isPromise(returnVal)) {
          returnVal
            .then((value) => {
              if (value) {
                done();
              } else if (canceled) {
                canceled();
              }
            })
            .catch();
        } else if (returnVal) {
          done();
        } else if (canceled) {
          canceled();
        }
      } else {
        done();
      }
    },
    isPromise(val){
      return val !== null && typeof val === 'object' && typeof val.then === 'function' && typeof val.catch === 'function';
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
  .vk-stepper__minus
    border-radius 4px 0 0 4px
  .vk-stepper__plus
    border-radius 0 4px 4px 0
  .vk-stepper__button
    padding 0
    margin 0
    border 0
    font-size 14px
    user-select none
    &__round
      border-radius 50%
  .vk-stepper__input
    &__round
      background-color transparent
</style>
<template>
  <div class="picker-slot" :class="classNames">
    <div ref="wrapper" class="picker-slot-wrapper" :class="{ dragging: dragging }" :style="{ height: contentHeight + 'px' }">
      <div class="picker-item" v-for="(itemValue, index) in mutatingValues" v-bind:key="index" :class="{ 'picker-selected': itemValue === currentValue, 'disable': itemValue.disable}" :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }">
        {{ typeof itemValue === 'object' && itemValue[valueKey] ? itemValue[valueKey] : itemValue }}
      </div>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
  .picker-slot {
    flex: 1
    font-size: 18px
    overflow: hidden
    position: relative
    max-height: 100%
  }

  .picker-slot.picker-slot-left {
    text-align: left
  }

  .picker-slot.picker-slot-center {
    text-align: center
  }

  .picker-slot.picker-slot-right {
    text-align: right
  }

  .picker-slot-wrapper {
    transition-duration: 0.3s
    transition-timing-function: ease-out
    backface-visibility: hidden
  }

  .picker-slot-wrapper.dragging,
  .picker-slot-wrapper.dragging .picker-item {
    transition-duration: 0s
  }

  .picker-item {
    height: 36px
    line-height: 36px
    padding: 0 10px
    white-space: nowrap
    position: relative
    overflow: hidden
    text-overflow: ellipsis
    color: #707274
    left: 0
    top: 0
    width: 100%
    box-sizing: border-box
    transition-duration: .3s
    backface-visibility: hidden
  }

  .picker-slot-absolute .picker-item {
    position: absolute
  }

  .picker-item.picker-item-far {
    pointer-events: none
  }

  .picker-item.picker-selected {
    color: #000
    transform: translate3d(0, 0, 0) rotateX(0)
  }

  .picker-3d .picker-items {
    overflow: hidden
    perspective: 700px
  }

  .picker-3d .picker-item,
  .picker-3d .picker-slot,
  .picker-3d .picker-slot-wrapper {
    transform-style: preserve-3d
  }

  .picker-3d .picker-slot {
    overflow: visible
  }

  .picker-3d .picker-item {
    transform-origin: center center
    backface-visibility: hidden
    transition-timing-function: ease-out
  }
</style>

<script>
import draggable from './draggable'
import translateUtil from './translate'
import { once, addClass, removeClass } from './util.js'
import Vue from 'vue'
if (!Vue.prototype.$isServer) {
  require('raf.js')
}

let rotateElement = function(element, angle) {
  if (!element) return
  let transformProperty = translateUtil.transformProperty

  element.style[transformProperty] = element.style[transformProperty].replace(/rotateX\(.+?deg\)/gi, '') + ` rotateX(${angle}deg)`
}

const ITEM_HEIGHT = 36
const VISIBLE_ITEMS_ANGLE_MAP = {
  3: -45,
  5: -20,
  7: -15
}

export default {
  name: 'picker-slot',

  props: {
    values: {
      type: Array,
      default() {
        return []
      }
    },
    value: {},
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: String,
    textAlign: {
      type: String,
      default: 'center'
    },
    className: {},
    content: {},
    itemHeight: {
      type: Number,
      default: ITEM_HEIGHT
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      currentValue: this.value,
      mutatingValues: this.values,
      dragging: false,
      animationFrameId: null
    }
  },
  computed: {
    flexStyle() {
      return {
        'flex': this.flex,
        '-webkit-box-flex': this.flex,
        '-moz-box-flex': this.flex,
        '-ms-flex': this.flex
      }
    },
    classNames() {
      const PREFIX = 'picker-slot-'
      let resultArray = []

      let textAlign = this.textAlign || 'center'
      resultArray.push(PREFIX + textAlign)

      if (this.className) {
        resultArray.push(this.className)
      }

      return resultArray.join(' ')
    },
    contentHeight() {
      return this.itemHeight * this.visibleItemCount
    },
    valueIndex() {
      var valueKey = this.valueKey
      if (this.currentValue instanceof Object) {
        for (let i = 0, len = this.mutatingValues.length; i < len; i++) {
          if (this.currentValue[valueKey] === this.mutatingValues[i][valueKey]) {
            return i
          }
        }
        return -1
      } else {
        return this.mutatingValues.indexOf(this.currentValue)
      }
    },
    dragRange() {
      var values = this.mutatingValues
      var visibleItemCount = this.visibleItemCount
      var itemHeight = this.itemHeight

      return [ -itemHeight * (values.length - Math.ceil(visibleItemCount / 2)), itemHeight * Math.floor(visibleItemCount / 2) ]
    },
    minTranslateY() {
      return this.itemHeight * (Math.ceil(this.visibleItemCount / 2) - this.mutatingValues.length)
    },
    maxTranslateY() {
      return this.itemHeight * Math.floor(this.visibleItemCount / 2)
    }
  },

  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent
      var name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      function broadcast(componentName, eventName, params) {
        this.$children.forEach(child => {
          var name = child.$options.componentName

          if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params))
          } else {
            broadcast.apply(child, [componentName, eventName].concat(params))
          }
        })
      }
      broadcast.call(this, componentName, eventName, params)
    },
    value2Translate(value) {
      var values = this.mutatingValues
      var valueIndex = values.indexOf(value)
      var offset = Math.floor(this.visibleItemCount / 2)
      var itemHeight = this.itemHeight

      if (valueIndex !== -1) {
        return (valueIndex - offset) * -itemHeight
      }
    },

    translate2Value(translate) {
      var itemHeight = this.itemHeight
      let translates = Math.round(translate / itemHeight) * itemHeight
      let index = -(translates - Math.floor(this.visibleItemCount / 2) * itemHeight) / itemHeight

      return this.mutatingValues[index]
    },

    updateRotate: function(currentTranslate, pickerItems) {
      let dragRange = this.dragRange
      let wrapper = this.$refs.wrapper
      let currenttranslate = currentTranslate
      let pickeritems = pickerItems

      if (!pickeritems) {
        pickeritems = wrapper.querySelectorAll('.picker-item')
      }

      if (currenttranslate === undefined) {
        currenttranslate = translateUtil.getElementTranslate(wrapper).top
      }

      let itemsFit = Math.ceil(this.visibleItemCount / 2)
      let angleUnit = VISIBLE_ITEMS_ANGLE_MAP[this.visibleItemCount] || -20

      new Array().forEach.call(pickeritems, (item, index) => {
        var itemOffsetTop = index * this.itemHeight
        var translateOffset = dragRange[1] - currenttranslate
        var itemOffset = itemOffsetTop - translateOffset
        var percentage = itemOffset / this.itemHeight

        var angle = angleUnit * percentage
        if (angle > 180) angle = 180
        if (angle < -180) angle = -180

        rotateElement(item, angle)

        if (Math.abs(percentage) > itemsFit) {
          addClass(item, 'picker-item-far')
        } else {
          removeClass(item, 'picker-item-far')
        }
      })
    },

    initEvents() {
      var el = this.$refs.wrapper
      var dragState = {}

      var velocityTranslate, prevTranslate, pickerItems

      draggable(el, {
        start: (event) => {
          cancelAnimationFrame(this.animationFrameId)
          this.animationFrameId = null
          dragState = {
            range: this.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top
          }
          pickerItems = el.querySelectorAll('.picker-item')
        },

        drag: (event) => {
          this.dragging = true

          dragState.left = event.pageX
          dragState.top = event.pageY

          let deltaY = dragState.top - dragState.startTop
          let translate = dragState.startTranslateTop + deltaY

          translateUtil.translateElement(el, null, translate)

          velocityTranslate = translate - prevTranslate || translate

          prevTranslate = translate

        },

        end: (event) => {
          this.dragging = false

          let momentumRatio = 7
          let currentTranslate = translateUtil.getElementTranslate(el).top
          let duration = new Date() - dragState.start
          let distance = Math.abs(dragState.startTranslateTop - currentTranslate)
          let itemHeight = this.itemHeight
          let visibleItemCount = this.visibleItemCount

          let rect, offset
          if (distance < 6) {
            rect = this.$el.getBoundingClientRect()
            offset = Math.floor((event.clientY - (rect.top + (visibleItemCount - 1) * itemHeight / 2)) / itemHeight) * itemHeight

            if (offset > this.maxTranslateY) {
              offset = this.maxTranslateY
            }

            velocityTranslate = 0
            currentTranslate -= offset
          }

          let momentumTranslate
          if (duration < 300) {
            momentumTranslate = currentTranslate + velocityTranslate * momentumRatio
          }

          let dragRange = dragState.range

          this.$nextTick(() => {
            var translate
            if (momentumTranslate) {
              translate = Math.round(momentumTranslate / itemHeight) * itemHeight
            } else {
              translate = Math.round(currentTranslate / itemHeight) * itemHeight
            }

            translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0])

            translateUtil.translateElement(el, null, translate)

            this.currentValue = this.translate2Value(translate)

          })

          dragState = {}
        }
      })
    },

    doOnValueChange() {
      var value = this.currentValue
      var wrapper = this.$refs.wrapper

      translateUtil.translateElement(wrapper, null, this.value2Translate(value))
    },
  },

  mounted() {
    this.ready = true
    this.initEvents()
    this.doOnValueChange()
  },

  watch: {
    values(val) {
      this.mutatingValues = val
    },

    mutatingValues(val) {
      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0]
      }
    },
    currentValue(val) {
      this.doOnValueChange()
      this.$emit('input', val)
      this.dispatch('picker', 'slotValueChange', this)
    },
    defaultIndex(val) {
      if ((this.mutatingValues[val] !== undefined) && (this.mutatingValues.length >= val + 1)) {
        this.currentValue = this.mutatingValues[val]
      }
    }
  }
}
</script>
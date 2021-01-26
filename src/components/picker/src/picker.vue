<template>
<transition name="picker">
  <div class="vk-picker-cover" v-if="visible" v-scroll-fixed>
    <div class="vk-picker-mask" @touchmove.prevent="stopScroll" @click.stop="closePicker"></div>
    <div class="vk-picker-menu" style="height: 272px">
      <div class="vk-picker-menu-li vk-picker-title">
        <div class="vk-picker-title-item vk-picker-title-cancel" @click.stop="closePicker('close')">{{cancel}}</div>
        <div class="vk-picker-title-item vk-picker-title-vk-picker-title">{{title}}</div>
        <div class="vk-picker-title-item vk-picker-title-confirm" @click.stop="confirmHandle">
          <span>{{confirm}}</span>
        </div>
      </div>
      <div class="vk-picker-items">
        <pickerslot 
          v-for="slot in slots" :key="slot.index"
          :values="slot.values || []"
          :valueKey="option.key"
          :text-align="slot.textAlign || 'center'"
          :class-name="slot.className"
          v-model="values[slot.valueIndex]"
          :content="slot.content"
          :default-index="slot.defaultIndex"
          >
        </pickerslot>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
import pickerslot from './pickerSlot.vue'
import { newAddress } from '@parent/parent-jsdk'
import { throws } from 'assert'
import Vue from 'vue'
import scrollFixedPlugin from '../../../utils/_scrollFixed.js'
import { numberRange, addZero, getMonthDay} from './util.js'
const COUNTRYLIST = newAddress.data
Vue.use(scrollFixedPlugin)
const typeMapping = {
  date: [{
    values: [],
    textAlign: 'center'
  },{
    values: numberRange(1, 12).map(addZero(2)),
    textAlign: 'center'
  },{
    values: numberRange(1, 31).map(addZero(2)),
    textAlign: 'center'
  }],
  province: [{
    values: COUNTRYLIST[0].sonAddress,
    textAlign: 'center'
  }],
  city: [{
    values: null,
    textAlign: 'center'
  }],
  area: [{
    values: null,
    textAlign: 'center'
  }],
  region: [{
    values: COUNTRYLIST[0].sonAddress,
    textAlign: 'center'
  }, {
    values: COUNTRYLIST[0].sonAddress[0].sonAddress,
    textAlign: 'center'
  }, {
    values: COUNTRYLIST[0].sonAddress[0].sonAddress[0].sonAddress,
    textAlign: 'center'
  }],
  custom: null // [{values: []}]
}

export default {
  name: 'picker',
  props: {
    visible: Boolean, // 展示与隐藏
    title: String, // 标题
    confirm: { // 确定按钮文案
      type: String,
      default: '确定'
    },
    cancel: { // 取消按钮
      type: String,
      default: '取消'
    },
    type: { //类型，默认选择 目前支持 date province city area region custom
      type: String,
      default: 'region'
    },
    customValues: Array, // 当类型为custom 或 空 时 自定义数据
    code: String, // 当type 为 city area 对应上级
    start: Number, // 当type 为 date 时，起始年份时间
    end: Number, // 当type 为 date 时，终止年份时间
    defaultValue: Array, // 默认值
    option: { // 其他配置项
      type: Object,
      default: () => {
        return {
          key: 'name', // 数据字段名称，默认name
          code: 'code'
        }
      }
    }
  },
  created() {
    this.$on('slotValueChange', () => {
      if (this.type === 'region') {
        this.slotValueChange()
      } else if (this.type === 'date') {
        this.dateValueChange()
      }
      this.$emit('changed', this.values)
    })
  },
  computed: {
    slots() {
      switch (this.type) {
        case 'city':
          if (this.code) {
            let values = COUNTRYLIST[0].sonAddress.find(res => {
              return res.code == this.code
            })
            typeMapping['city'][0].values = values.sonAddress
          } else {
            throw new Error('code is require')
          }
          break
        case 'area':
          if (this.code) {
            let values = this.findDataForCode(typeMapping['city'][0].values)
            typeMapping['area'][0].values = values.sonAddress
          } else {
            throw new Error('code is require')
          }
          break
        case 'date':
          typeMapping['date'][0].values = numberRange(this.start, this.end)
          break
        default: 
          if (this.customValues) {
            typeMapping['custom']= this.customValues
          }
          break
      }
      if(this.defaultValue && this.defaultValue.length > 0){
        this.defaultValue.forEach((item, index) => {
          typeMapping[this.type][index].defaultIndex = typeMapping[this.type][index].values.findIndex(res => {
            let code = typeof res === 'object' ? res[this.option.code] : res
            return item == code
          })
      })
      }
      return typeMapping[this.type]
    },
    values: {
      get() {
        var slots = this.slots || []
        var values = []
        var valueIndexCount = 0
        slots.forEach(slot => {
          slot.valueIndex = valueIndexCount++
          values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0]
        })
        return values
      }
    },
  },
  methods: {
    findDataForCode(option) {
      let data = option.find(res => {
        return res.code == this.code
      })
      return data
    },
    dateValueChange() {
      let days = getMonthDay(this.values[0], this.values[1])
      this.setSlotValues(2, numberRange(1, days))
    },
    slotValueChange() {
      // provinceList 拿到全部的省列表
      let provinceList = COUNTRYLIST[0].sonAddress
      // provinceIndex 获取当前切换选中的 省 index
      let provinceIndex = provinceList.findIndex((item) => {return item.code === this.values[0]['code']})
      //  cityLit 获取当选选中省下面所有的城市列表
      if (provinceList[provinceIndex]) {
        let cityList = provinceList[provinceIndex].sonAddress
        this.setSlotValues(1, cityList)
        if (this.values[1]) {
          let cityIndex = cityList.findIndex((item) => {return item.code === this.values[1]['code']})
          cityList[cityIndex] && this.setSlotValues(2, cityList[cityIndex].sonAddress)
        }
      }
    },
    setSlotValues(index, values) {
      var slot = this.getSlot(index)
      if (slot) {
        slot.mutatingValues = values
      }
    },
    getSlot(slotIndex) {
      var slots = this.slots || []
      var count = 0
      var target
      let children = this.$children.filter(child => { return child.$options.name === 'picker-slot'})

      slots.forEach(function(slot, index) {
        if (slotIndex === count) {
          target = children[index]
        }
        count++
      })

      return target
    },
    stopScroll() {
      event.preventDefault()
    },
    closePicker(type) {
      if (type == 'close') {
        this.$emit('close')
      }
      this.$emit('update:visible', false)
      this.$emit('closed', this.values)
    },
    confirmHandle() {
      this.$emit('confirm-fn', this.values)
      this.closePicker()
    }
  },
  components: {
    pickerslot
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl'
.picker-enter-active {
  transition-duration: .4s
}
.picker-enter-active .vk-picker-mask {
  transition: opacity .4s
}
.picker-enter-active .vk-picker-menu {
  transition: transform .4s
}
.picker-leave-active {
  transition-duration: .2s
}
.picker-leave-active .vk-picker-mask {
  transition: opacity .2s
}
.picker-leave-active .vk-picker-menu {
  transition: transform .2s
}
.picker-enter .vk-picker-mask, 
.picker-leave-to .vk-picker-mask {
  opacity: 0
}
.picker-enter .vk-picker-menu,
.picker-leave-to .vk-picker-menu {
  transform: translateY(100%)
}
.vk-picker-cover {
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 10
}
.vk-picker-mask {
  width: 100%
  height: 100%
  opacity: 0.5
  background-color: #000
}
.vk-picker-menu {
  position: absolute
  bottom: 0
  padding-bottom: constant(safe-area-inset-bottom)
  padding-bottom: env(safe-area-inset-bottom)
  width: 100%
  font-size: $vk-font-size-md
  line-height: 50px
  text-align: center
  color: $vk-font-color-2
  white-space: nowrap
  background-color: #fff
  border-top-right-radius: $vk-radius-md
  border-top-left-radius: $vk-radius-md
}
.vk-picker-menu >>> .vk-picker-menu-li {
  display: block
  overflow: hidden
  position: relative
  border-bottom: 1px solid #f2f2f2
  text-decoration: none
  text-overflow: ellipsis
  color: #333
}
.vk-picker-menu >>> .vk-picker-menu-li:last-child {
  border-bottom: none
}
.vk-picker-menu .vk-picker-menu-li.cancel {
  border-top: 7px solid #f2f2f2
}
.vk-picker-menu >>> .vk-picker-title{
  .vk-picker-title-item {
    display inline-block
    font-size $vk-font-size-md
  }
  .vk-picker-title-vk-picker-title {
    width 70%
  }
  .vk-picker-title-confirm {
    color $vk-main-color
    img{
      vertical-align: middle
      width: 22px
    }
  }
  .vk-picker-title-cancel {
    color $vk-picker-cancel-color
    min-width: 40px
  }
}
.vk-picker-items{
    display: -webkit-box
    display: -moz-box
    // display: -webkit-flex
    display: -ms-flexbox
    display: flex
    display: -webkit-box
    display: -webkit-flex
    display: -moz-box
    display: -ms-flexbox
    justify-content: center
    -webkit-justify-content: center
    padding: 0
    text-align: right
    font-size: 24px
    position: relative
}
</style>

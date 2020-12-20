<template>
<transition name="picker">
  <div class="vk-picker-cover" v-if="iShow">
    <div class="vk-picker-mask" @touchmove.prevent="stopScroll" @click.stop="closePicker"></div>
    <div class="vk-picker-menu" style="height: 272px">
      <div class="vk-picker-menu-li vk-picker-title">
        <div class="vk-picker-title-item vk-picker-title-cancel" @click.stop="closePicker">{{cancel}}</div>
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
          :flex="slot.flex"
          :text-align="slot.textAlign || 'center'"
          :class-name="slot.className"
          v-model="values[slot.valueIndex]"
          :divider="slot.divider"
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
import { throws } from 'assert';
const COUNTRYLIST = newAddress.data

const typeMapping = {
  province: [{
    flex: 1,
    values: COUNTRYLIST[0].sonAddress,
    className: 'slot1',
    textAlign: 'center'
  }],
  city: [{
    flex: 1,
    values: null,
    className: 'slot1',
    textAlign: 'center'
  }],
  area: [{
    flex: 1,
    values: null,
    className: 'slot1',
    textAlign: 'center'
  }],
  region: [{
    flex: 1,
    values: COUNTRYLIST[0].sonAddress,
    className: 'slot1',
    textAlign: 'center'
  }, {
    flex: 1,
    values: COUNTRYLIST[0].sonAddress[0].sonAddress,
    className: 'slot3',
    textAlign: 'center'
  }, {
    flex: 1,
    values: COUNTRYLIST[0].sonAddress[0].sonAddress[0].sonAddress,
    className: 'slot3',
    textAlign: 'center'
  }]
}

export default {
  name: 'picker',
  data() {
    return {
      iShow: false,
      title: '',
      confirm: '',
      confirmFn: null,
      cancel: '',
      type: '',
      code: '',
      cancelFn: null,
      option: {
        key: 'name'
      }
    }
  },
  updated() {
    if (this.type == 'region') { // 当传入类型为 region 需要省市区联动，监听数据改变，联动
      this.$on('slotValueChange', this.slotValueChange)
      this.slotValueChange()
    }
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
          break;
        case 'area':
          if (this.code) {
            let values = this.findDataForCode(typeMapping['city'][0].values)
            typeMapping['area'][0].values = values.sonAddress
          } else {
            throw new Error('code is require')
          }
          break
        default: 
          break;
      }
      return typeMapping[this.type]
    },
    values: {
      get() {
        var slots = this.slots || []
        var values = []
        var valueIndexCount = 0
        slots.forEach(slot => {
          if (!slot.divider) {
            slot.valueIndex = valueIndexCount++
            values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0]
          }
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
    slotValueChange() {
      // provinceList 拿到全部的省列表
      let provinceList = COUNTRYLIST[0].sonAddress
      // provinceIndex 获取当前切换选中的 省 index
      let provinceIndex = provinceList.findIndex((item) => {return item.code === this.values[0]['code']})
      //  cityLit 获取当选选中省下面所有的城市列表
      let cityList = provinceList[provinceIndex].sonAddress
      this.setSlotValues(1, cityList)
      let cityIndex = cityList.findIndex((item) => {return item.code === this.values[1]['code']})
      cityList[cityIndex] && this.setSlotValues(2, cityList[cityIndex].sonAddress)
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
        if (!slot.divider) {
          if (slotIndex === count) {
            target = children[index]
          }
          count++
        }
      })

      return target
    },
    stopScroll() {
      event.preventDefault()
    },
    closePicker() {
      this.iShow = false
    },
    confirmHandle() {
      this.confirmFn && this.confirmFn(this.values) 
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
  transition-duration: .4s;
}
.picker-enter-active .vk-picker-mask {
  transition: opacity .4s;
}
.picker-enter-active .vk-picker-menu {
  transition: transform .4s;
}
.picker-leave-active {
  transition-duration: .2s;
}
.picker-leave-active .vk-picker-mask {
  transition: opacity .2s;
}
.picker-leave-active .vk-picker-menu {
  transition: transform .2s;
}
.picker-enter .vk-picker-mask, 
.picker-leave-to .vk-picker-mask {
  opacity: 0;
}
.picker-enter .vk-picker-menu,
.picker-leave-to .vk-picker-menu {
  transform: translateY(100%);
}
.vk-picker-cover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.vk-picker-mask {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #000;
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
  display: block;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  text-decoration: none;
  text-overflow: ellipsis;
  color: #333;
}
.vk-picker-menu >>> .vk-picker-menu-li:last-child {
  border-bottom: none;
}
.vk-picker-menu .vk-picker-menu-li.cancel {
  border-top: 7px solid #f2f2f2;
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

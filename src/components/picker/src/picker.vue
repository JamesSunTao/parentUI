<template>
<transition name="picker">
  <div class="vk-picker-cover" v-if="iShow">
    <div class="vk-picker-mask" @touchmove.prevent="stopScroll" @click.stop="close"></div>
    <div class="vk-picker-menu" style="height: 272px">
      <div class="vk-picker-menu-li vk-picker-title">
        <div class="vk-picker-title-item vk-picker-title-cancel" @click.stop="close">{{cancel}}</div>
        <div class="vk-picker-title-item vk-picker-title-vk-picker-title">{{title}}</div>
        <div class="vk-picker-title-item vk-picker-title-confirm" @click.stop="confirmHandle">
          <span>{{confirm}}</span>
        </div>
      </div>
      <pickerslot 
        v-for="slot in slots" :key="slot.index"
        :values="slot.values || []"
        :valueKey="option.key"
        :flex="slot.flex"
        v-model="values[slot.valueIndex]"
        >
      </pickerslot>
    </div>
  </div>
</transition>
</template>
<script>
import pickerslot from './pickerSlot.vue'
import { newAddress } from '@parent/parent-jsdk'
const COUNTRYLIST = newAddress.data

export default {
  name: 'picker',
  data() {
    return {
      iShow: false,
      title: '',
      confirm: '',
      confirmFn: null,
      cancel: '',
      cancelFn: null,
      option: {
        key: 'name'
      }
    }
  },
  created() {
  },
  computed: {
    slots() {
      let addressSlots = [{
        flex: 1,
        values: COUNTRYLIST[0].sonAddress,
        className: 'slot1',
        textAlign: 'center'
      }]
      return addressSlots
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
    stopScroll() {
      event.preventDefault()
    },
    close() {
      this.$emit('update:isShow', false)
      this.iShow = false
    },
    confirmHandle() {
      this.confirmFn ? this.confirmFn(this.values) : this.close()
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
</style>

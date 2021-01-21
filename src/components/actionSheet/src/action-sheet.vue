<template>
  <transition name="actionsheet">
    <div class="vk-action-sheet-cover" v-if="isShow" v-scroll-fixed>
    <div class="vk-action-sheet-mask" @touchmove.prevent="stopScroll" @click.stop="close"></div>
    <div class="vk-action-sheet-menu">
      <div class="vk-action-sheet-menu-li vk-action-sheet-title" v-if="options">
        <div :style="cancelStyle" class="vk-action-sheet-title-item vk-action-sheet-title-cancel" @click.stop="close">{{options.cancel}}</div>
        <div class="vk-action-sheet-title-item vk-action-sheet-title-vk-action-sheet-title">{{options.title}}</div>
        <div :style="confirmStyle" class="vk-action-sheet-title-item vk-action-sheet-title-confirm" @click.stop="confirmFn">
          <img v-if="options.confirmType == 'icon'" :src="options.confirm">
          <span v-else>{{options.confirm}}</span>
        </div>
      </div>
      <div class="vk-action-sheet-description" v-if="description">
        <span v-text="description"></span>
      </div>
      <div v-if="actions" class="vk-action-sheet-menu-container">
        <div :class="['vk-action-sheet-menu-li', item.className]" v-for="(item, index) in actions" :key="index" @click="itemclick(item)">
          <span :style="{color: item.color}" :class="{'vk-action-sheet-disabled': item.disabled}">{{item.name}}</span>
          <span class="vk-action-sheet-menu-li-des" v-if="item.description" v-text="item.description"></span>
        </div>
      </div>
      <div v-else class="vk-action-sheet-menu-custom">
        <slot></slot>
      </div>
      <div class="vk-action-sheet-menu-li cancel" @click.stop="close" v-if="cancelText">{{cancelText}}</div>
    </div>
    </div>
  </transition>
</template>
<script>
import Vue from 'vue'
import scrollFixedPlugin from '../../../utils/_scrollFixed.js'

Vue.use(scrollFixedPlugin)
export default {
  name: 'actionSheet',
  props: {
    isShow: {
      type: Boolean,
      required: true
    },
    actions: {
      type: Array,
      default: () => {
        return null
      }
    },
    cancelText: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  computed: {
    cancelStyle() {
      return {'color': this.options.cancelColor}
    },
    confirmStyle() {
      return {'color': this.options.confirmColor}
    }
  },
  methods: {
    stopScroll() {
      event.preventDefault()
    },
    itemclick(item) {
      if (item.disabled) {
        return
      }
      this.$emit('select', item)
    },
    confirmFn() {
      this.$emit('confirm-fn', this.actions)
    },
    close() {
      this.$emit('update:isShow', false)
      this.$emit('click-overlay')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl'
.actionsheet-enter-active {
  transition-duration: .4s
}
.actionsheet-enter-active .vk-action-sheet-mask {
  transition: opacity .4s
}
.actionsheet-enter-active .vk-action-sheet-menu {
  transition: transform .4s
}
.actionsheet-leave-active {
  transition-duration: .2s
}
.actionsheet-leave-active .vk-action-sheet-mask {
  transition: opacity .2s
}
.actionsheet-leave-active .vk-action-sheet-menu {
  transition: transform .2s
}
.actionsheet-enter .vk-action-sheet-mask, 
.actionsheet-leave-to .vk-action-sheet-mask {
  opacity: 0
}
.actionsheet-enter .vk-action-sheet-menu,
.actionsheet-leave-to .vk-action-sheet-menu {
  transform: translateY(100%)
}
.vk-action-sheet-cover {
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 10
}
.vk-action-sheet-mask {
  width: 100%
  height: 100%
  opacity: 0.5
  background-color: #000
}
.vk-action-sheet-menu {
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
.vk-action-sheet-menu >>> .vk-action-sheet-menu-li {
  display: block
  overflow: hidden
  position: relative
  border-bottom: 1px solid $vk-bgc-grey
  text-decoration: none
  text-overflow: ellipsis
  color: $vk-font-color-2
  .vk-action-sheet-disabled {
    color: $vk-font-color-disable
  }
  .vk-action-sheet-menu-li-des {
    display block
    height: 30px
    line-height: 20px
    font-size: $vk-font-size-sm
    color $vk-font-color-auxiliary
  }
}
.vk-action-sheet-menu >>> .vk-action-sheet-title{
  .vk-action-sheet-title-item {
    display inline-block
    font-size $vk-font-size-md
  }
  .vk-action-sheet-title-vk-action-sheet-title {
    width 70%
  }
  .vk-action-sheet-title-confirm {
    color $vk-main-color
    img{
      vertical-align: middle
      width: 22px
    }
  }
  .vk-action-sheet-title-cancel {
    color $vk-action-sheet-cancel-color
    min-width: 40px
  }
}
.vk-action-sheet-menu >>> .vk-action-sheet-menu-container {
  max-height 255px
  overflow auto
}
.vk-action-sheet-menu >>> .vk-action-sheet-description{
  font-size: $vk-font-size-sm
  color: $vk-font-color-auxiliary
  border-bottom: 1px solid $vk-bgc-grey
  span{
    display: -webkit-box
    height: 40px
    line-height 20px
    padding $vk-padding-sm
    text-align center
    overflow hidden
    text-overflow: ellipsis
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    word-break: normal
    white-space: normal
  }
}
.vk-action-sheet-menu >>> .vk-action-sheet-menu-li:last-child {
  border-bottom: none
}
.vk-action-sheet-menu .vk-action-sheet-menu-li.cancel {
  border-top: 7px solid $vk-bgc-grey
}
</style>

<template>
  <div class="ui-popover" ref="popover" @click="onClick" >
    <div v-if="visiable && !$slots.default" class="content" :class="{[`position-${position_y}`]:true,[`position-${position_x}`]:true,[type]:true,light:isBgWhite}" ref="content">
        <div class="label">{{label}}</div>
        <div v-show="!closeable" class="close" @click="close"></div>
        <div class="symbol" ref="symbol"></div>
    </div>
    <div v-else-if="visiable && $slots.default " style="flex-direction: column" :class="{[`position-${position_y}`]:true,[`position-${position_x}`]:true,light:isBgWhite}" class="content"  ref="content">
        <slot></slot>
        <div class="symbol" ref="symbol"></div>
    </div>
    <span ref="button">
      <slot name="button"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "ui-popover",
  props: {
    position_x: {
      type: String,
      default: 'left',
      validator (value) {
        return ['left', 'right'].indexOf(value) >= 0
      }
    },
    position_y: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom'].indexOf(value) >= 0
      }
    },
    closeable: {
      type: Boolean,
      default: false,
    },
    label: {
       type: String,
       default: '',
    },
    type: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: '',
    },
    autoShow: {
      type: Boolean,
      default: false,
    },
    stopClickDom: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      visiable: false,
    };
  },
  computed: {
      isBgWhite() {
         return this.theme === 'light'
      }
  },
  methods: {
    positionContent() {
       document.body.appendChild(this.$refs.content)
       let { left, top, width, height,right} = this.$refs.button.getBoundingClientRect()
       if(this.position_y == 'top') {
          if(this.position_x == 'left') {
            this.$refs.content.style.left = left - left/2 + document.documentElement.scrollLeft  + 'px'
          }else {
               let { left:left1, top, width:width1, height,right} = this.$refs.content.getBoundingClientRect()
               this.$refs.content.style.left = left - width1 + width + document.documentElement.scrollLeft + 10 + 'px'
               this.$refs.content.style.marginBottom = 6 + 'px'
          }
         this.$refs.content.style.top = top  + document.documentElement.scrollTop +'px'
       }else if(this.position_y == 'bottom'){
         if(this.position_x == 'left') {
            this.$refs.content.style.left = left + document.documentElement.scrollLeft  + 'px'
         }else {
            let { left:left1, top, width:width1, height,right} = this.$refs.content.getBoundingClientRect()
            this.$refs.content.style.left = left - width1 + width + document.documentElement.scrollLeft + 10 + 'px'
         }  
         this.$refs.content.style.marginTop = 6 + 'px'
         this.$refs.content.style.top = top + height + document.documentElement.scrollTop + 'px'
         
       }
    },
    initBg() {
      if (this.position_y == 'top') {
        this.$refs.symbol.style.borderTopColor = '#F9FAFC'
      } else if (this.position_y == 'bottom') {
        this.$refs.symbol.style.borderBottomColor = '#F9FAFC'
      }
    },
    open() {
      this.visiable = true
      if(this.visiable) {
        this.$nextTick(()=>{
          this.positionContent()
          this.isBgWhite && this.initBg()
          !this.stopClickDom && document.addEventListener('click',this.onClickDocument)
        })
      }
    },
    onClick(e) {
      if (this.$refs.button.contains(e.target)) {
        if (this.visiable) {
          this.close()
        } else {
          this.open()
        }
      }
    },
    onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target) )) {
        return
      }
      if(this.$refs.content && (this.$refs.content === e.target || this.$refs.content.contains(e.target) )) {
        return
      }
      this.close()
    },
    close() {
      this.visiable = false
      !this.stopClickDom && document.removeEventListener('click',this.onClickDocument)
    }
  },
  created() {
      this.autoShow && this.open()
  }
};
</script>

<style  lang='stylus' scoped>
@import '../../../style/var.styl'
.ui-popover
  display: inline-block
 .content
    z-index: 100
    position: absolute
    opacity: 0.8
    background: #000000
    display: flex
    align-items: center
    color: $vk-bgc-white
    box-sizing: border-box
    border-radius: $vk-radius-base * 4
    font-size: $vk-font-size-sm
    word-break: break-all
    max-width: 260px
    padding: 9px 10px 9px 12px
  .label
    margin-right: 5px
  .close
    position: relative
    margin-left: 8px
    width: 8px
    height: 8px
    &::after
      position: absolute
      content: ''
      display: block
      width: 8px
      top: 50%
      left: 0
      height: 1px
      background-color: white
      transform: rotate(-45deg)
    &::before
      position: absolute
      content: ''
      display: block
      width: 8px
      top: 50%
      left: 0
      height: 1px
      background-color: $vk-bgc-white
      transform: rotate(45deg)
&.position-top
  transform: translateY(-100% - 10px)
  .symbol
    bottom: -9px
    left: 16px
    position: absolute
    display: block
    border: 5px solid black
    border-left-color: transparent
    border-right-color: transparent
    border-bottom-color: transparent
&.position-bottom
  .symbol
    top: -9px
    left: 16px
    position: absolute;
    border: 3px solid transparent
    display: block
    border: 5px solid black
    border-left-color: transparent
    border-right-color: transparent
    border-top-color: transparent
&.position-right
  .symbol
    left: calc(100% - 26px)
&.multi
  .close
    position: absolute
    top: 5px
    right: 9px
    margin-left: 5px
&.light
  color: #2f3338
  background: $vk-bgc-white
  box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.1)
</style>
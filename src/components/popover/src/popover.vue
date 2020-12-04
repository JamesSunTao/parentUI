<template>
  <div class="ui-popover" ref="popover" @click="onClick">
    <div v-if="visiable && !$slots.default" class="content" :class="{[`position-${position_y}`]:true,[`position-${position_x}`]:true}" ref="content">
        <div>{{label}}</div>
        <div v-show="closeable" class="close" @click="close"></div>
    </div>
    <div v-else-if="visiable && $slots.default "  ref="content">
        <slot></slot>
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
      default: true,
    },
    label: {
       type: String,
       default: '',
    }
  },
  data() {
    return {
      visiable: false,
    };
  },
  computed: {
      isBgWhite() {
        if(bgWhite) {

        }
      }
  },
  methods: {
    positionContent() {
       document.body.appendChild(this.$refs.content)
       let { left, top, width, height,right} = this.$refs.button.getBoundingClientRect()
       if(this.position_y == 'top') {
         console.log(top)
         this.$refs.content.style.top = top + document.documentElement.scrollTop +'px'
         this.$refs.content.style.left = left + document.documentElement.scrollLeft  + 'px'
       }else if(this.position_y == 'bottom'){
         if(this.position_x == 'left') {
            this.$refs.content.style.top = top +  height + document.documentElement.scrollTop + 'px'
            this.$refs.content.style.marginTop = 6 + 'px'
         }else {
            this.$refs.content.style.top = top + 2 * height + document.documentElement.scrollTop + 'px'
         }  
         this.$refs.content.style.left = left + document.documentElement.scrollLeft  + 'px'
       }
    },
    open() {
      this.visiable = true
      if(this.visiable) {
        this.$nextTick(()=>{
          this.positionContent()
          document.addEventListener('click',this.onClickDocument)
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
      document.removeEventListener('click',this.onClickDocument)
    }
  },
  mounted() {
    
  }
};
</script>

<style  lang='stylus' scoped>
.ui-popover
  display: inline-block
 .content 
    position: absolute
    opacity: 0.8
    background: #000000
    display: flex
    align-items: center
    color: #fff
    padding: 9px 10px 9px 12px
    box-sizing: border-box
    border-radius: 17px
    font-size: 14px
    word-break: break-all
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
      background-color: white
      transform: rotate(45deg)
&.position-top
  transform: translateY(-100% - 10px)
  &::after
    bottom: -9px
    left: 16px
    position: absolute;
    content: ''
    display: block
    border: 5px solid black
    border-left-color: transparent
    border-right-color: transparent
    border-bottom-color: transparent
&.position-bottom
  margin-top: 16px
  &::after
    top: -9px
    left: 16px
    position: absolute;
    border: 3px solid transparent
    content: ''
    display: block
    border: 5px solid black
    border-left-color: transparent
    border-right-color: transparent
    border-top-color: transparent
&.position-right
  transform: translate(-50%,-100% - 10px)
  &::after
    left: calc(100% - 26px)
</style>
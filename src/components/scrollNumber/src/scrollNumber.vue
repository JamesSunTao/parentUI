<template>
  <div class="main" :style="{height:domHeight}">
    <div class="box" ref="ele" :style="fontColorSize" v-html="dom"></div>
  </div>
</template>
<script>
export default {
  name:'scrollNumber',
  data() {
    return {
      dom: '',
      domHeight:'30px',
    }
  },
  watch: {
    rollNumber: function() {
      this.number(this.rollNumber + "" )
    }
  },
  props: {
    rollNumber: { //滚动的数字
      type: [String, Number],
      default: '0'
    },
    rollingSpeed: { //滚动速度
      type: Number,
      default: 1.5
    },
    fontColorSize: { //字体大小以及颜色
      type: String,
      default: ''
    },
    // fontSpacing: { //数字间距
    //   type: Number,
    //   default: 1
    // },
  },
  created() {
    this.number(this.rollNumber + "" )
  },
  mounted () {
    this.domHeight = window.getComputedStyle(this.$refs.ele).fontSize
  },
  methods: {
    number(digit) {
      let num_arr = []
      for (let i = 0; i < digit.length; i++) {
        num_arr.push(digit[i])
      }
      let str = '',
        numlength = num_arr.length,
        numLabel = ''
      for (let i = 0; i <= 9; i++) {
        numLabel += ` <span class="num">${i}</span>`
      }
      for (let i = 0; i < numlength; i++) {
        if (parseInt(num_arr[i]) >= 0) {
          str += '<div  class="digit-container"  data-show=' + num_arr[i] + '> ' + numLabel + '</div>'
        } else {
          str += '<div ><span>' + num_arr[i] + '</span></div>'
        }
      }
      this.dom = str
      this.$nextTick(() => {
        let obj = document.getElementsByClassName('digit-container')
        let numDom = document.getElementsByClassName('num')[0]
        for (let i in obj) {
          if (typeof obj[i] == 'object') {
            // obj[i].style.width = numDom.offsetWidth + this.fontSpacing + 'px'
            obj[i].style.transition = `all ${this.rollingSpeed}s`
            obj[i].style.marginTop = -(Number(obj[i].dataset.show) * numDom.offsetHeight) + 'px'
          }
        }
      })
    },
  },

}
</script>

<style lang="stylus" scoped>
  .main {
    display: flex;
    justify-content: center;
    font-family: PingFangSC, PingFangSC-Semibold
    overflow: hidden
    font-size 40px
    text-overflow:ellipsis
    white-space: nowrap
  }

  .box {
    overflow: hidden;
    display: flex;
    height 100%
  }

  >>>span {
    display: block
  }
</style>
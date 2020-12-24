<script>
export default {
  name: "parentui-row",
  props: {
    type: {
      type: String,
      default: ''
    },
    gutter: {
      type: String|Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  render(h) {
    return h(this.tag, {
      class: this.class,
      style: this.style
    }, this.$slots.default)
  },
  computed: {
    style() {
      const ret = {}
      let gutter = this.gutter ? this.gutter : 0
      if (gutter) {
        ret.marginLeft = `-${gutter}px`
      }
      return ret
    },
    class() {
      let classList = ['vk-parentui-row']
      if (this.type) {
        classList.push(`vk-type-${this.type}`)
        this.type == 'flex' && this.justify && classList.push(`vk-justify-${this.justify}`)
        this.type == 'flex' && this.align && classList.push(`vk-align-${this.align}`)
      }
      return classList
    },
  },
}
</script>
<style lang="stylus" scoped>
.vk-parentui-row
  &:after
    display: block
    width:0
    height:0
    clear: both
    content: ''
.vk-parentui-row.vk-type-flex
  display: flex
  flex-wrap: wrap
  &:after
    display: none
.vk-justify-start
  justify-content: flex-start
.vk-justify-end
  justify-content: flex-end
.vk-justify-space-around
  justify-content: space-around
.vk-justify-space-between
  justify-content: space-between
.vk-align-top
  align-items: flex-start
.vk-align-bottom
  align-items: flex-end
.vk-align-center
  align-items: center
</style>
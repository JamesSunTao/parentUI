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
      let classList = ['parentui-row']
      if (this.type) {
        classList.push(`type-${this.type}`)
        this.type == 'flex' && this.justify && classList.push(`justify-${this.justify}`)
        this.type == 'flex' && this.align && classList.push(`align-${this.align}`)
      }
      return classList
    },
  },
}
</script>
<style lang="stylus" scoped>
.parentui-row
  &:after
    display: table
    clear: both
    content: ''
.parentui-row.type-flex
  display: flex
  flex-wrap: wrap
  &:after
    display: none
.justify-start
  justify-content: flex-start
.justify-end
  justify-content: flex-end
.justify-space-around
  justify-content: space-around
.justify-space-between
  justify-content: space-between
.align-top
  align-items: flex-start
.align-bottom
  align-items: flex-end
.align-center
  align-items: center
</style>
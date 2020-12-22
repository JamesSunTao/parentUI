<script>
export default {
  name: "parentui-col",
  props: {
    span: {
      type: Number|String,
      default: 0
    },
    offset: {
      type: Number|String,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    style() {
      const ret = {}
      let gutter = this.$parent ? this.$parent.gutter : 0
      if (gutter) {
        ret.paddingLeft = `${gutter}px`
      }
      return ret
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'parentui-col',
        `parentui-col-${this.span}`,
        `offset-${this.offset}`
      ],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
<style lang="stylus" scoped>
for row in (1..24)
  .parentui-col-{row}
    width: (row/24)*100%
  .offset-{row}
    margin-left: (row/24)*100%
.parentui-col
  box-sizing: border-box
  float: left
</style>
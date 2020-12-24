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
        'vk-parentui-col',
        `vk-parentui-col-${this.span}`,
        `vk-offset-${this.offset}`
      ],
      style: this.style
    }, this.$slots.default)
  }
}
</script>
<style lang="stylus" scoped>
for row in (1..24)
  .vk-parentui-col-{row}
    width: (row/24)*100%
  .vk-offset-{row}
    margin-left: (row/24)*100%
.vk-parentui-col
  box-sizing: border-box
  float: left
</style>
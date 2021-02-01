<template>
</template>
<script>
import './photoswipe/index.js'
export default {
  name: "image-preview",
  props: {
    list: {
      type: Array,
      default: []
    },
    index: {
      type: Number,
      default: 0
    },
    showBack: {
      type: Boolean,
      default: false
    },
    showDelete: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      deleteItems: []
    };
  },
  watch: {
  },
  computed: {

  },
  methods: {
    doClose(){
      this.$emit('close')
    },
    deleteImg(index) {
      this.deleteItems.push(index)
    },
    deleteAction() {
      this.$emit('deleteImg', this.deleteItems)
      this.deleteItems = []
    },
  },
  mounted() {
    this.$imagePreview({
        images: this.list,
        index: this.index,
        close: this.doClose,
        showBack: this.showBack,
        showDelete: this.showDelete,
        delete: this.deleteImg,
        deleteAction: this.deleteAction
      })
  },
};
</script>
<style lang="stylus" scoped>
@import '../../../style/var.styl'
</style>
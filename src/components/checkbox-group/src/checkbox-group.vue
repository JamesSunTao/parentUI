<template>
  <div class="ui-checkbox-group" role="group" aria-label="checkbox-group" :class="{[position]:isCol}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'checkboxGroup',
  componentName: 'UiCheckboxGroup',
  props: {
    value: {},
    disabled: Boolean,
    size:{},
    position:{
      type: String,
      validator: function(value) {
        return ['column','row'].indexOf(value) > -1
      }
    }
  },
  computed: {
    checkboxGroupSize() {
      return this.size == 'small'
    },
    isCol() {
      return this.position == 'column'
    }
  },
}
</script>
<style lang="stylus" scoped>
.ui-checkbox-group
 &.column
  display: flex
  flex-direction: column
</style>
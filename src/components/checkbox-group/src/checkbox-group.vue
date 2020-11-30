<template>
  <div class="ui-checkbox-group" role="group" aria-label="checkbox-group">
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
    size:{}
  },
  computed: {
    checkboxGroupSize() {
      return this.size == 'small'
    }
  },
}
</script>

<style>

</style>
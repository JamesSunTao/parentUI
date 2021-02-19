<template>
  <div>
    <headerbar title="stepper"/>
    <div :style="{paddingTop: '50px'}">
      <stepper></stepper>
    </div>
  </div>
</template>

<script>
import stepper from '../../src/components/stepper/src/stepper.vue'
export default {
  components: {
    stepper
  }

}
</script>

<style>

</style>
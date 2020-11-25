<template >
  <div class="router-view">
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
    this.$router.replace(`/${this.$route.query.page}`)
  }
}
</script>

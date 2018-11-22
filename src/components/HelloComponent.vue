<template>
  <h1 class="message">Hello {{ name }}!</h1>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
/* write SCSS here */
@import '../../assets/scss/main.scss' 

</style>
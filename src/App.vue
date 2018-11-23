<template>
  <div class="full-width center-content">
    <hello-component name="World" />
    <div class="testing">Testing the sample app</div>
  </div>
</template>
<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss'
</style>

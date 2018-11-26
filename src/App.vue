<template>
  <div class="full-width center-content">
    <hello-component name="World" />
    <div class="testing">Testing the CSS coding style</div>
    <hr>
    <ul>
      <li><router-link :to="{ name: 'welcome' }">Welcome</router-link></li>
      <li><router-link :to="{ name: 'calculator' }">Display Calculator</router-link></li>
    </ul>
    <router-view class="view" />
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

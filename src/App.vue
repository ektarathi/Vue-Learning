<template>
  <div class="full-width center-content">
    <div id="app">
      <img src="../assets/images/logo.png">
      <ul>
        <li><router-link :to="{ name: 'welcome' }">Welcome</router-link></li>
        <li><router-link :to="{ name: 'calculator' }">Display Calculator</router-link></li>
      </ul>
      <router-view class="view" />
    </div>
  </div>
</template>
<style lang="scss">
/* write SCSS here */
@import '../assets/scss/main.scss'

</style>

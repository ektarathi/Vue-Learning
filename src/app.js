import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Welcome from './components/Home/WelcomeMessage.vue'
import Calculator from './components/Home/Calculator.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/welcome', name: 'welcome', component: Welcome },
  { path: '/calculator', name: 'calculator', component: Calculator }
]

const router = new VueRouter({
  routes
})
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

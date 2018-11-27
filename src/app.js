import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Welcome from './components/Home/WelcomeMessage.vue'
import Calculator from './components/Home/Calculator.vue'
import Home from './components/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
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

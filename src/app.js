import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VFC from 'vfc'
import 'vfc/dist/vfc.css'
import Welcome from './components/Home/WelcomeMessage.vue'
import Calculator from './components/Home/Calculator.vue'
import Home from './components/Home/Home.vue'
import Form from './components/Home/Form.vue'

Vue.use(VueRouter)
Vue.use(VFC)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/welcome', name: 'welcome', component: Welcome },
  { path: '/calculator', name: 'calculator', component: Calculator },
  { path: '/form', name: 'form', component: Form }
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

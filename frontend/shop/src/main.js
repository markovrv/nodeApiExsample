import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.scss'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.directive('phone', {
  bind (el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }
      const x = this.value
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
      el.dispatchEvent(new Event('input'))
    }
  }
})

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common.Accept = 'application/json'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

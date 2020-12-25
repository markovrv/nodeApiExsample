import Vue from 'vue'
import AtComponents from 'at-ui'
import App from './App.vue'
import router from './router'
import store from './store'
// import { BootstrapVue } from 'bootstrap-vue'

import 'at-ui-style'
import './assets/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
Vue.use(AtComponents)

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

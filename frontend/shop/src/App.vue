<template>
  <div id="app">
    <header-component />
    <user-panel v-if="$route.path !== '/login'" />
    <router-view />
    <footer-component />
  </div>
</template>
<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import headerComponent from './components/header'
import footerComponent from './components/footer'
import UserPanel from './components/userPanel'
Vue.use(VueCookies)

export default {
  components: { headerComponent, UserPanel, footerComponent },
  mounted () {
    this.$store.dispatch('getAllGoods')
    var data = {
      component: this,
      login: Vue.$cookies.get('login'),
      password: Vue.$cookies.get('password')
    }
    this.$store.dispatch('login', data)
    this.$store.commit('loadCart')
  }
}
</script>
<style>
#app {
  width: 100%;
  max-width: 1024px;
  box-sizing: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  margin: 0 auto;
  min-height: calc(100vh - 116px);
  box-shadow: 0px 0px 50px #ffff00;
  position: relative;
}

.title {
  color: #090;
  font-size: 28px;
  border-radius: 0.5em;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.4);
  border-bottom: #009900 1px solid;
  border-left: #009900 3px solid;
  padding: 4px;
  margin: 16px;
  text-shadow: 2px 1px 3px #090;
}

@media screen and (max-width: 700px) {
  #app {
    max-width: 830px;
    border-radius: 0;
    min-height: calc(100vh - 125px);
  }
}

@media screen and (max-width: 500px) {
  #app {
    max-width: 500px;
    border-radius: 0;
    min-height: calc(100vh - 167px);
  }
}
</style>

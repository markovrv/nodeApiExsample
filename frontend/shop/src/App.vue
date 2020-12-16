<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Каталог</router-link>&nbsp;&nbsp;
      <router-link to="/cart"
        >Корзина
        <span v-show="cartCount > 0" style="color:red">{{
          cartCount
        }}</span></router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default {
  computed: {
    cartCount () {
      var count = 0
      this.$store.state.cart.cartPos.forEach(el => {
        count += +el.count
      })
      return count
    }
  },
  mounted () {
    this.$store.dispatch('getAllGoods')
    this.$store.dispatch('login', {
      login: Vue.$cookies.get('login'),
      password: Vue.$cookies.get('password')
    })
  }
}
</script>
<style>
body {
  margin: 0;
  background-color: #ffffd0 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  box-shadow: 0px 0px 50px #ffff00;
  border-radius: 2em;
  margin: 0 auto;
  min-height: 98vh;
  width: 100vw;
  max-width: 1024px;
  box-sizing: auto;
}

#nav {
  padding-top: 160px;
  background-image: url(./assets/logo.jpg);
  background-repeat: no-repeat;
  padding-bottom: 9px;
}

#nav a,
.mybtn {
  text-decoration: none;
  text-align: center;
  padding: 8px 24px;
  border: solid 2px #cc9966;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  font: 16px Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #8f5a0a;
  background-color: #ffffa8;
  -webkit-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  -moz-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
}

#nav a:hover,
.mybtn:hover {
  background-color: #ffffa8;
  color: #8f5a0a;
}

#nav a.router-link-exact-active,
.mybtn:active {
  background-color: #ffbb00;
  color: #8f5a0a;
}

@media screen and (max-width: 700px) {
  #nav {
    background-size: 830px;
    padding-top: 140px;
    max-width: 830px;
  }

  #app {
    max-width: 830px;
    width: 100vw;
    border-radius: 0;
    min-height: 100vh;
  }
}

@media screen and (max-width: 500px) {
  #nav {
    background-size: 590px;
    padding-top: 100px;
    max-width: 500px;
  }

  #app {
    max-width: 500px;
    width: 100vw;
    border-radius: 0;
    min-height: 100vh;
  }
  .css-3d-text {
    background-image: none !important;
    margin: 0 !important;
    height: fit-content !important;
  }
  .info-text {
    margin: 0 !important;
  }
}
</style>

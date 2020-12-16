<template>
  <div class="admin container-md">
    <div class="form-group">
      <label for="login">Логин</label>
      <input v-model="login" type="text" class="form-control" id="login" />
    </div>
    <div class="form-group">
      <label for="password">Пароль</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="password"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="input">Вход</button>
  </div>
</template>
<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('7d')

export default {
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    input () {
      Vue.$cookies.set('login', this.login)
      Vue.$cookies.set('password', this.password)
      this.$store.dispatch('login', { login: Vue.$cookies.get('login'), password: Vue.$cookies.get('password') })
      window.location.href = '#/'
    }
  }
}
</script>

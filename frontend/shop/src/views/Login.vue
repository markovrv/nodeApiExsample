<template>
  <div class="login container-md">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Авторизация</h5>
        <div class="card-text">
          <div class="form-group">
            <label for="login">Логин</label>
            <input
              v-model="login"
              type="text"
              class="form-control"
              id="login"
            />
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
          <button type="button" class="mybtn" @click="input">
            Вход
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
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
      this.$store.dispatch('login')
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.card {
  width: 100%;
  max-width: 18rem;
  margin: 40px auto;
}
</style>

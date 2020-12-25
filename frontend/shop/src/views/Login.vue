<template>
  <div class="login container-md">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Авторизация</h5>
        <div class="card-text">
          <div class="form-group">
            <label for="phone">Телефон</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">+7</span>
              </div>
              <input
                v-model="login"
                class="form-control"
                placeholder="(905) 123-4567"
                maxlength="14"
                v-phone
                pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-key" aria-hidden="true"></i>
                </span>
              </div>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
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
      password: '',
      loginForm: true
    }
  },
  methods: {
    input () {
      this.login = '+7' + this.login.replace(/[- )(]/g, '')
      Vue.$cookies.set('login', this.login)
      Vue.$cookies.set('password', this.password)
      var data = {
        component: this,
        login: this.login,
        password: this.password
      }
      this.$store.dispatch('login', data)
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

@media screen and (max-width: 500px) {
  .card {
    margin: 0 auto;
  }
}
</style>

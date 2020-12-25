<template>
  <div>
    <div v-if="$store.state.cart.sendedAt">Отправлено: {{ date }}</div>
    <div v-else>
      <vue-recaptcha sitekey="6LcL1RMaAAAAAF8janlacnzP5PebQK5SpUW8U0OH">
        <button type="button" class="btn btn-success btn-lg" @click="send">
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
          Отправить
        </button>
      </vue-recaptcha>
    </div>
  </div>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  components: { VueRecaptcha },
  methods: {
    send () {
      if (this.loggedIn) {
        this.$store.dispatch('orderSend', {
          component: this,
          message: this.$store.state.messages.orderSended
        })
      } else {
        var phone = this.$store.state.cart.phone
        if (phone.indexOf('+7') !== 0) {
          phone = '+7' + phone.replace(/[- )(]/g, '')
        }
        if (phone.length !== 12) {
          this.$Notify.error({
            title: 'Ошибка',
            message: 'Введите корректный номер телефона'
          })
          return null
        }
        var user = {
          login: phone,
          phone: phone,
          name: this.$store.state.cart.name
        }
        this.$store.dispatch('register', { user, component: this })
      }
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.user.apikey !== null
    },
    date () {
      return this.$store.state.cart.sendedAt
    }
  }
}
</script>

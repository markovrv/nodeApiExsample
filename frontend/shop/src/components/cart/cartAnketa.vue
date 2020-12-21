<template>
  <div>
    <div v-if="!loggedIn && false" class="alert alert-success" role="alert">
        Если Вы уже оформляли заказ на нашем сайте, нажмите кнопку
        <b><router-link to="/login">Войти</router-link></b>.<br>
        Если нет, просто заполните анкету. Вас зарегистрируют автоматически.
    </div>
    <div class="form-group row">
      <label for="name" class="col-sm-4 text-sm-right" style="margin-top: 5px;"
        >Фамилия, Имя, Отчество</label
      >
      <input
        v-model="cart.name"
        type="text"
        class="form-control col-sm-6"
        id="name"
      />
    </div>
    <div class="form-group row">
      <label for="phone" class="col-sm-4 text-sm-right" style="margin-top: 5px;"
        >Мобильный телефон</label
      >
      <input
        v-model="cart.phone"
        type="phone"
        class="form-control col-sm-6"
        id="phone"
      />
    </div>
    <div class="form-group row">
      <label for="info" class="col-sm-4 text-sm-right" style="margin-top: 5px;"
        >Пожелания к заказу</label
      >
      <textarea
        v-model="cart.info"
        type="text"
        class="form-control col-sm-6"
        id="info"
        rows="3"
      />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    cart () {
      return this.$store.state.cart
    },
    loggedIn () {
      return this.$store.state.user.apiKey !== null
    }
  }
}
</script>

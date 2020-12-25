<template>
  <div>
    <div v-if="!loggedIn" class="alert alert-success" role="alert">
      Если Вы уже оформляли заказ на нашем сайте, нажмите кнопку
      <b><router-link to="/login">Войти</router-link></b
      >.<br />
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
      <label class="col-sm-4 text-sm-right" style="margin-top: 5px;"
        >Мобильный телефон</label
      >
      <div class="input-group col-sm-6 phone">
        <div class="input-group-prepend">
          <span class="input-group-text">+7</span>
        </div>
        <input
          v-model="cart.phone"
          class="form-control"
          placeholder="(905) 123-4567"
          maxlength="14"
          v-phone
          pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
          required
        />
      </div>
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
      return this.$store.state.user.apikey !== null
    }
  }
}
</script>

<style>
.phone {
    padding-left: 0px !important;
    padding-right: 0px !important;
}
</style>

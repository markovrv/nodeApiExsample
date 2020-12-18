<template>
  <div class="cart container-md" style="padding-bottom: 20px">
    <div v-if="cart.cartPos.length > 0" style="padding: 10px">
      <div class="title">Ваши покупки</div>
      <cart-body :cart="cart" @edited="$store.commit('saveCart')" @clear="$store.commit('clearCart')" />
      <div class="title">Ваша анкета</div>
      <div class="form-group row">
        <label
          for="name"
          class="col-sm-4 text-sm-right"
          style="margin-top: 5px;"
          >Имя</label
        >
        <input
          v-model="cart.name"
          type="text"
          class="form-control col-sm-6"
          id="name"
        />
      </div>
      <div class="form-group row">
        <label
          for="phone"
          class="col-sm-4 text-sm-right"
          style="margin-top: 5px;"
          >Телефон</label
        >
        <input
          v-model="cart.phone"
          type="phone"
          class="form-control col-sm-6"
          id="phone"
        />
      </div>
      <div class="form-group row">
        <label
          for="info"
          class="col-sm-4 text-sm-right"
          style="margin-top: 5px;"
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
      <button
        type="button"
        class="btn btn-success btn-lg"
        @click="$store.dispatch('orderSend')"
      >
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-bag-check"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
          />
          <path
            fill-rule="evenodd"
            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
        </svg>
        Отправить
      </button>
    </div>
    <h3 v-else style="padding-top: 20%;">Ваша корзина пуста</h3>
    <div
      v-show="infoShow"
      class="alert alert-success"
      role="alert"
      style="position: fixed; z-index: 5; bottom: 5px; right: 5px;"
    >
      Ваш заказ принят. Скоро мы свяжемся с Вами для уточнения деталей заказа.
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import cartBody from '../components/cartBody'
Vue.component('cart-body', cartBody)

export default {
  computed: {
    infoShow () {
      return this.$store.state.cartInfoShow
    },
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>

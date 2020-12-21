<template>
  <div class="cart container-md" style="padding-bottom: 20px">
    <div v-if="cart.cartPos.length > 0" style="padding: 10px">
      <div class="title">Ваши покупки</div>
      <cart-body :cart="cart" type="cart" @edited="$store.commit('saveCart')" @clear="$store.commit('clearCart')" />
      <div class="title">Ваша анкета</div>
      <cart-anketa />
      <cart-send-btn />
    </div>
    <h3 v-else style="padding-top: 20%;">Ваша корзина пуста</h3>
    <info-mess :show="infoShow" text="Ваш заказ принят. Скоро мы свяжемся с Вами для уточнения деталей заказа."/>
  </div>
</template>
<script>
import cartBody from '../components/cart/cartBody'
import cartSendBtn from '../components/cart/cartSendBtn'
import infoMess from '../components/infoMess'
import cartAnketa from '../components/cart/cartAnketa'

export default {
  components: { infoMess, cartBody, cartSendBtn, cartAnketa },
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

<template>
  <div class="orders container-md" style="padding-bottom: 20px">
    <div v-if="orders.length > 0" style="padding: 10px">
      <div v-for="(order, id) in orders" :key="id">
        <div class="title">Заказ № {{ id + 1 }}</div>
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">Имя</th>
              <td>{{ order.name }}</td>
            </tr>
            <tr>
              <th scope="row">Телефон</th>
              <td>{{ order.phone }}</td>
            </tr>
            <tr>
              <th scope="row">Комментарий</th>
              <td>{{ order.info }}</td>
            </tr>
          </tbody>
        </table>
        <cart-body :cart="order" type="order" />
      </div>
    </div>
    <div
      v-if="$store.state.user.apikey === null"
      class="alert alert-success"
      role="alert"
      style="margin: 14px"
    >
      Нажмите кнопку
      <b><router-link to="/login">Войти</router-link></b
      >, чтобы увидеть Ваши заказы.
    </div>
    <div v-if="$store.state.user.apikey !== null && orders.length == 0">
      <h3 style="padding-top: 20%;">Заказов пока нет</h3>
    </div>
  </div>
</template>
<script>
import cartBody from '../components/cart/cartBody'

export default {
  components: { cartBody },
  computed: {
    orders () {
      return this.$store.state.orders
    }
  },
  mounted () {
    if (this.$store.state.user.apikey) {
      this.$store.dispatch('getAllOrders')
    }
  }
}
</script>

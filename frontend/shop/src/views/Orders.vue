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
        <cart-body :cart="order" />
      </div>
    </div>
    <h3 v-else style="padding-top: 20%;">Заказов пока нет</h3>
  </div>
</template>
<script>
import Vue from 'vue'
import cartBody from '../components/cartBody'
Vue.component('cart-body', cartBody)

export default {
  computed: {
    orders () {
      return this.$store.state.orders
    }
  },
  mounted () {
    if (this.$store.state.adminMode) {
      this.$store.dispatch('getAllOrders')
    } else {
      this.$router.push('/')
    }
  }
}
</script>

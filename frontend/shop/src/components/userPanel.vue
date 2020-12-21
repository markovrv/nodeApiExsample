<template>
  <div class=" container-md text-right" v-if="loggedIn">
    <small style="color: #888"
      >Здравствуйте,
      <a href="javascript://" style="cursor: pointer">{{ user.name }}</a> |
      <a href="javascript://" style="cursor: pointer" v-if="user.admin"
        >пользователи</a
      ><span v-if="user.admin"> | </span>
      <a
        href="javascript://"
        style="cursor: pointer"
        @click="$store.dispatch('logout')"
        >выйти</a
      >
    </small>
  </div>
</template>

<script>
export default {
  computed: {
    cartCount () {
      var count = 0
      this.$store.state.cart.cartPos.forEach(el => {
        count += +el.count
      })
      return count
    },
    ordersCount () {
      var count = 0
      this.$store.state.orders.forEach(el => {
        if (el.status == null) {
          count++
        }
      })
      return count
    },
    loggedIn () {
      return this.$store.state.user.apiKey !== null
    },
    user () {
      return this.$store.state.user
    }
  }
}
</script>

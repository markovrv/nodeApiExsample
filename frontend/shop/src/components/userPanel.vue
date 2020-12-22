<template>
  <div>
    <div class=" container-md text-right" v-if="loggedIn">
      <small style="color: #888"
        >Здравствуйте,
        <a href="javascript://" style="cursor: pointer">
          <i class="fa fa-user" aria-hidden="true"></i>
          {{ user.name }}</a><span> | </span>
        <a href="javascript://" style="cursor: pointer" v-if="user.admin"
          ><i class="fa fa-users" aria-hidden="true"></i>
          пользователи</a
        ><span v-if="user.admin"> | </span>
        <a
          href="javascript://"
          style="cursor: pointer"
          @click="$store.dispatch('logout')">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          выйти</a
        >
      </small>
    </div>
    <div class="container-md text-right" v-else>
      <small style="color: #888">
        <router-link to="/login">
        <i class="fa fa-sign-in" aria-hidden="true"></i>
        войти</router-link>
      </small>
    </div>
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

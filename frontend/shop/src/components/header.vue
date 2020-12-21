<template>
  <div id="nav">
    <router-link to="/" style="margin-right: 5px">Каталог</router-link>
    <router-link to="/cart" style="margin-right: 5px"
      >Корзина
      <span v-show="cartCount > 0" style="color:red">
        {{ cartCount }}
      </span>
    </router-link>
    <router-link to="/orders" style="margin-right: 5px" v-if="loggedIn"
      >Заказы
      <span v-show="ordersCount > 0" style="color:red">
        {{ ordersCount }}
      </span>
    </router-link>
    <!-- <router-link v-else to="/login">Войти</router-link> -->
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
<style>
#nav {
  padding-top: 160px;
  background-image: url(../assets/logo.jpg);
  background-repeat: no-repeat;
  padding-bottom: 9px;
}

#nav a,
.mybtn {
  text-decoration: none;
  text-align: center;
  padding: 8px 24px;
  border: solid 2px #cc9966;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  font: 16px Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #8f5a0a;
  background-color: #ffffa8;
  -webkit-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  -moz-box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
  box-shadow: 0px 0px 2px #bababa, inset 0px 0px 1px #ffffff;
}

#nav a:hover,
.mybtn:hover {
  background-color: #ffffa8;
  color: #8f5a0a;
}

#nav a.router-link-exact-active,
.mybtn:active {
  background-color: #ffbb00;
  color: #8f5a0a;
}

@media screen and (max-width: 700px) {
  #nav {
    background-size: 830px;
    padding-top: 140px;
    max-width: 830px;
  }
}

@media screen and (max-width: 500px) {
  #nav {
    background-size: 590px;
    padding-top: 100px;
    max-width: 500px;
  }

  #nav a,
  .mybtn {
    padding: 8px 16px !important;
  }
}
</style>

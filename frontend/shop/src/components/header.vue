<template>
  <div id="nav">
    <nav class="navbar navbar-expand-sm">
      <!-- <router-link to="/" class="navbar-brand">Главная</router-link> -->
      <a href="#" class="navbar-toggler mybtn" @click="menuShow = !menuShow">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <div
        class="collapse navbar-collapse"
        :class="menuShow ? 'show' : ''"
        v-on:mouseleave="menuShow = false"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link mybtn"
              >Каталог
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link mybtn"
              >Корзина
              <span v-show="cartCount > 0" style="color:red">
                {{ cartCount }}
              </span>
            </router-link>
          </li>
          <li class="nav-item" v-if="loggedIn">
            <router-link to="/orders" class="nav-link mybtn"
              >Заказы
              <span v-show="ordersCount > 0" style="color:red">
                {{ ordersCount }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuShow: false
    }
  },
  computed: {
    cartCount () {
      return this.$store.getters.cartCount
    },
    ordersCount () {
      return this.$store.getters.ordersCount
    },
    loggedIn () {
      return this.$store.state.user.apikey !== null
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

.nav-item a {
  border: 0 !important;
  border-radius: 0 !important;
}

.navbar-nav {
  border: solid 2px #cc9966;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.navbar-nav :first-child a {
  border-radius: 5px 0 0 5px !important;
}

.navbar-nav :last-child a {
  border-radius: 0 5px 5px 0 !important;
}

@media screen and (max-width: 700px) {
  #nav {
    background-size: 830px;
    padding-top: 123px;
    max-width: 830px;
  }
}

@media screen and (max-width: 575px) {
  .nav-item a {
    background-image: none !important;
    border: 0 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0;
  }

  .nav-item a:hover {
    background-color: #ff9900 !important;
  }

  .navbar-nav :first-child a {
    border-radius: 5px 5px 0 0 !important;
  }

  .navbar-nav :not(:last-child) a {
    border-bottom: 1px solid !important;
  }

  .navbar-nav :last-child a {
    border-radius: 0 0 5px 5px !important;
  }

  .navbar-collapse {
    position: absolute;
    left: 9px;
    top: 50px;
    box-shadow: 0.4em 0.4em 5px rgba(122, 122, 122, 0.5);
    border: 1px solid #c96 !important;
    border-radius: 6px;
  }

  .navbar-nav {
    border: 0;
  }
}

@media screen and (max-width: 500px) {
  #nav {
    background-size: 590px;
    padding-top: 80px;
    max-width: 500px;
  }

  #nav a,
  .mybtn {
    padding: 8px 16px !important;
  }
}
</style>

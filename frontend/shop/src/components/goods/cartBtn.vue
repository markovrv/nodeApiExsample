<template>
  <button v-show="cartCount > 0"
    class="btn btn-success btn-lg btn-bottom-left"
    type="button"
    style="z-index: 100;"
    @click="showCart"
  >
    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
    {{cartCount}}
  </button>
</template>
<script>
export default {
  computed: {
    cartCount () {
      return this.$store.getters.ordersCount
    }
  },
  methods: {
    showCart () {
      window.location.href = '#/cart'
    }
  }
}
</script>
<style>
.btn-top {
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 17px !important;
}
.btn-bottom-left {
  position: fixed;
  bottom: 15px;
  left: 15px;
  border-radius: 30px !important;
  width: 90px;
  height: 60px;
}
</style>

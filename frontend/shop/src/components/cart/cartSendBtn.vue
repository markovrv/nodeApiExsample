<template>
  <button
    type="button"
    class="btn btn-success btn-lg"
    @click="$store.dispatch('orderSend')"
  >
    <i class="fa fa-paper-plane" aria-hidden="true"></i>
    Отправить
  </button>
</template>

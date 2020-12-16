<template>
  <div class="cart container-md" style="padding-bottom: 20px">
    <div v-if="cart.cartPos.length > 0" style="padding: 10px">
      <div class="title">Ваши покупки</div>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col" style="width: 5%">#</th>
              <th scope="col">Товар</th>
              <th scope="col" style="width: 10%">Тип</th>
              <th scope="col" style="width: 10%">Цена</th>
              <th scope="col" style="width: 10%">Количество</th>
              <th scope="col" style="width: 10%">Сумма</th>
              <th scope="col" style="width: 114px"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(el, id) in cart.cartPos" :key="id">
              <th scope="row">{{ id + 1 }}</th>
              <td>{{ el.source.name }}</td>
              <td>{{ getVer(el) }}</td>
              <td>{{ getPrice(el) }}</td>
              <td>
                <input
                  v-model="el.count"
                  type="number"
                  min="1"
                  class="form-control form-control-sm text-center"
                />
              </td>
              <td>{{ getSum(el) }}</td>
              <td>
                <button
                  class="btn btn-sm btn-danger"
                  @click="$store.commit('delCartPos',id)"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-trash-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
                    />
                  </svg>
                  удалить
                </button>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th scope="col" colspan="4" class="text-right"><b>СУММА</b></th>
              <th scope="col">{{ allCount }}</th>
              <th scope="col">{{ allPrice }}</th>
              <th scope="col"></th>
            </tr>
          </thead>
        </table>
      </div>
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
    </div>
    <div v-else>
      <pre v-if="$store.state.adminMode" class="text-left">{{ orders }}</pre>
      <h3 v-else style="padding-top: 20%;">Ваша корзина пуста</h3>
    </div>
    <button
      v-show="cart.cartPos.length > 0"
      type="button"
      class="btn btn-success btn-lg"
      @click="
      $store.dispatch('orderSend');
      "
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
    <div
      v-show="infoShow"
      class="alert alert-success"
      role="alert"
      style="position: fixed; z-index: 5; bottom: 5px; right: 5px;"
    >Ваш заказ принят. Скоро мы свяжемся с Вами для уточнения деталей заказа.</div>
  </div>
</template>
<script>
export default {
  computed: {
    orders () {
      return this.$store.state.orders
    },
    infoShow () {
      return this.$store.state.cartInfoShow
    },
    cart () {
      return this.$store.state.cart
    },
    allPrice () {
      var count = 0
      this.$store.state.cart.cartPos.forEach(el => {
        count += this.getSum(el)
      })
      return count
    },
    allCount () {
      var count = 0
      this.$store.state.cart.cartPos.forEach(el => {
        count += +el.count
      })
      return count
    }
  },
  methods: {
    getVer (el) {
      return el.source.ver[el.ver].comment
    },
    getPrice (el) {
      return el.source.ver[el.ver].price
    },
    getSum (el) {
      return this.getPrice(el) * el.count
    }
  },
  mounted () {
    if (this.$store.state.adminMode) {
      this.$store.dispatch('getAllOrders')
    }
  }
}
</script>

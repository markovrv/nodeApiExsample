<template>
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
          <th scope="col" style="width: 114px" v-if="type == 'cart'"></th>
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
              v-if="type == 'cart'"
              @change="$emit('edited')"
              type="number"
              min="1"
              class="form-control form-control-sm text-center"
            />
            <div v-else>
              {{ el.count }}
            </div>
          </td>
          <td>{{ getSum(el) }}</td>
          <td v-if="type == 'cart'">
            <button
              class="btn btn-sm btn-danger"
              @click="
                cart.cartPos.splice(id, 1)
                $emit('edited')
              "
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
              удалить
            </button>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th scope="col" colspan="2" class="text-left">
            <button
              v-if="$store.state.user.admin && type == 'order'"
              class="btn btn-sm btn-danger"
              @click="$store.dispatch('delOrder', cart)"
            >
              <i class="fa fa-trash" aria-hidden="true"></i>
              удалить заказ
            </button>
            <button
              v-if="$store.state.user.admin && type == 'order' && cart.status == null"
              class="btn btn-sm btn-primary" style="margin-left: 5px"
              @click="$store.dispatch('doneOrder', cart)"
            >
              <i class="fa fa-check" aria-hidden="true"></i>
              выполнить
            </button>
            {{ (cart.status === 'done')?'Выполнен':'' }}
          </th>
          <th scope="col" colspan="2" class="text-right"><b>СУММА</b></th>
          <th scope="col">{{ allCount }}</th>
          <th scope="col">{{ allPrice }}</th>
          <th scope="col" v-if="type == 'cart'">
            <a
              class="btn btn-sm btn-danger"
              @click="
                $emit('clear')
                $emit('edited')
              "
              >ОЧИСТИТЬ</a
            >
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  props: ['cart', 'type'],
  computed: {
    allPrice () {
      var count = 0
      this.cart.cartPos.forEach(el => {
        count += this.getSum(el)
      })
      return count
    },
    allCount () {
      var count = 0
      this.cart.cartPos.forEach(el => {
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
  }
}
</script>

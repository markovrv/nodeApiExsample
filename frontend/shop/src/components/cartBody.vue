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
              @change="$emit('edited')"
              type="number"
              min="1"
              class="form-control form-control-sm text-center"
            />
          </td>
          <td>{{ getSum(el) }}</td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="
                cart.cartPos.splice(id, 1)
                $emit('edited')
              "
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
          <th scope="col">
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
  props: ['cart'],
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

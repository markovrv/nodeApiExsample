import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

class Good {
  constructor () {
    this.name = ''
    this.group = null
    this.ver = [
      {
        photo: null,
        price: 0,
        comment: ''
      }
    ]
    this.desc = ''
  }
}

class Cart {
  constructor (id, ver, count, good) {
    this.id = id
    this.ver = ver
    this.count = count
    this.source = good
  }

  addInCart (cart) {
    var id = cart.findIndex(p => p.id === this.id && p.ver === this.ver)
    if (id >= 0) Vue.set(cart[id], 'count', cart[id].count + 1)
    else cart.push(this)
  }
}

export default new Vuex.Store({
  state: {
    groupps: [
      { val: null, name: 'Нет группы' },
      { val: 2, name: 'Восковые свечи' },
      { val: 3, name: 'Медовое мыло' },
      { val: 4, name: 'Наборы подарков' },
      { val: 1, name: 'Мёд' }
    ],
    goods: [],
    orders: [],
    cart: {
      name: '',
      phone: '',
      info: '',
      cartPos: []
    },
    cartInfoShow: false,
    server: 'http://node.markovrv.ru', // 'http://192.168.2.120:3012',
    goodAdminModal: {
      show: false,
      header: 'Заголовок',
      type: '',
      good: new Good()
    },
    user: {
      apiKey: null,
      name: '',
      phone: '',
      admin: false
    }
  },
  getters: {
    getAllGoods (state) {
      return state.goods
    }
  },
  mutations: {
    addInCart (state, data) {
      var good = state.goods.find(obj => obj._id === data.id)
      new Cart(data.id, data.ver, data.count, good).addInCart(
        state.cart.cartPos
      )
      localStorage.cart = JSON.stringify(state.cart)
    },
    saveCart (state) {
      localStorage.cart = JSON.stringify(state.cart)
    },
    loadCart (state) {
      if (localStorage.cart) {
        Vue.set(state, 'cart', JSON.parse(localStorage.cart))
      }
    },
    clearCart (state) {
      state.cart = {
        name: state.user.name,
        phone: state.user.phone,
        info: '',
        cartPos: []
      }
    },
    addGoodVer (state) {
      state.goodAdminModal.good.ver.push(new Good().ver[0])
    },
    addGood (state, good) {
      state.goods.push(good)
    },
    delGood (state, gid) {
      var id = state.goods.findIndex(obj => obj._id === gid)
      state.goods.splice(id, 1)
    },
    setGood (state, good) {
      var id = state.goods.findIndex(obj => obj._id === good._id)
      Vue.set(state.goods, id, good)
    },
    setAllGoods (state, data) {
      state.goods = data
    },
    setAllOrders (state, data) {
      state.orders = data
    },
    setSelected (state, data) {
      var good = state.goods.find(obj => obj._id === data.good._id)
      Vue.set(good, 'selected', data.id)
    },
    showGoodAdminModal (state, data) {
      Vue.set(state.goodAdminModal, 'type', data.type)
      if (data.type !== 'add') {
        Vue.set(state.goodAdminModal, 'good', data.good)
      } else {
        Vue.set(state.goodAdminModal, 'good', new Good())
      }
      switch (data.type) {
        case 'add':
          Vue.set(state.goodAdminModal, 'header', 'Добавление товара')
          break
        case 'photo':
          Vue.set(state.goodAdminModal, 'header', 'Загрузка фото')
          break
        default:
          Vue.set(state.goodAdminModal, 'header', 'Изменение товара')
          break
      }
      Vue.set(state.goodAdminModal, 'show', true)
    },
    closeGoodAdminModal (state) {
      Vue.set(state.goodAdminModal, 'show', false)
    }
  },
  actions: {
    delGoodVer (context, index) {
      this.dispatch('delFile', {
        good: context.state.goodAdminModal.good,
        id: index
      })
      context.state.goodAdminModal.good.ver.splice(index, 1)
    },
    getAllGoods (context) {
      Axios.get(context.state.server + '/api/goods/').then(resp => {
        context.commit('setAllGoods', resp.data)
      })
    },
    getAllOrders (context) {
      Axios.get(context.state.server + '/api/orders/').then(resp => {
        context.commit('setAllOrders', resp.data)
      })
    },
    setGood (context, good) {
      if (good._id !== undefined) {
        var data = JSON.parse(JSON.stringify(good))
        delete data._id
        Axios.put(context.state.server + '/api/goods/' + good._id, data).then(
          resp => {
            context.commit('closeGoodAdminModal')
          }
        )
      } else {
        Axios.post(context.state.server + '/api/goods/', good).then(resp => {
          context.commit('addGood', resp.data)
        })
      }
    },
    orderSend (context) {
      var data = JSON.parse(JSON.stringify(context.state.cart))
      Axios.post(context.state.server + '/api/orders/', data).then(resp => {
        context.state.cartInfoShow = true
        setInterval(() => {
          context.state.cartInfoShow = false
        }, 15000)
      })
    },
    delOrder (context, order) {
      Axios.delete(context.state.server + '/api/orders/' + order._id).then(
        resp => {
          context.dispatch('getAllOrders')
        }
      )
    },
    doneOrder (context, order) {
      Axios.put(context.state.server + '/api/orders/' + order._id, { status: 'done' }).then(
        resp => {
          context.dispatch('getAllOrders')
        }
      )
    },
    delGood (context, good) {
      Axios.delete(context.state.server + '/api/goods/' + good._id).then(
        resp => {
          context.commit('closeGoodAdminModal')
          context.commit('delGood', good._id)
        }
      )
    },
    sendFile (context, data) {
      var formData = new FormData()
      formData.append('filedata', data.file)
      if (
        data.good.selected === undefined ||
        data.good.selected >= data.good.ver.length
      ) {
        Vue.set(data.good, 'selected', 0)
      }
      var selected = data.good.selected
      Axios.post(
        context.state.server +
          '/api/goods/upload/' +
          data.good._id +
          '/' +
          selected,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
        .then(resp => {
          resp.data.selected = selected
          context.commit('setGood', resp.data)
        })
        .catch(error => {
          console.log(error)
          console.log(this.file)
        })
    },
    delFile (context, data) {
      var selected = 0
      if (data.id === undefined) {
        if (
          data.good.selected === undefined ||
          data.good.selected >= data.good.ver.length
        ) {
          Vue.set(data.good, 'selected', 0)
        }
        selected = data.good.selected
      } else {
        selected = data.id
      }
      if (data.good._id !== undefined) {
        Axios.delete(
          context.state.server +
            '/api/goods/upload/' +
            data.good._id +
            '/' +
            selected
        )
          .then(resp => {
            if (data.id === undefined) {
              data.good.ver[data.good.selected].photo = null
              context.commit('setGood', data.good)
            }
          })
          .catch(error => {
            console.log(error)
            console.log(this.file)
          })
      }
    },
    login (context) {
      var login = Vue.$cookies.get('login')
      // var password = Vue.$cookies.get('password')
      // эмулируем ответ сервера
      if (login === 'admin') {
        context.state.user.admin = true
        context.state.user.apiKey = '12345'
        context.state.user.name = 'admin'
        context.state.user.phone = '22-55-66'
        // обновляем данные корзины
        context.commit('loadCart')
        context.state.cart.name = context.state.user.name
        context.state.cart.phone = context.state.user.phone
        context.commit('saveCart')
        context.dispatch('getAllOrders')
      }
      // конец ответа
    },
    logout (context) {
      Vue.$cookies.remove('login')
      Vue.$cookies.remove('password')
      context.state.user.admin = false
      context.state.user.apiKey = null
      context.state.user.name = ''
      context.state.user.phone = ''
      context.state.orders = []
    }
  },
  modules: {}
})

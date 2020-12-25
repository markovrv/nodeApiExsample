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
function convertPhone (phone) {
  var tt = phone.split('')
  tt.splice(2, '', '(')
  tt.splice(6, '', ') ')
  tt.splice(10, '', '-')
  tt.splice(0, 2)
  return tt.join('')
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
    errorCodes: {
      403: 'Неверный логин или пароль'
    },
    messages: {
      orderSended:
        'Ваш заказ успешно отправлен. Мы свяжемся с Вами для уточнения деталей оплаты и доставки.',
      orderSendedOldPassSMS: 'Ваш заказ успешно отправлен. Мы свяжемся с Вами для уточнения деталей оплаты и доставки. Для отслеживания статуса заказа войдите на сайт с Вашим логином и паролем. Пароль отправлен Вам по СМС.',
      orderSendedNewPassSMS: 'Ваш заказ успешно отправлен. Мы свяжемся с Вами для уточнения деталей оплаты и доставки. Вы успешно зарегистрированы на сайте. Пароль для входа отправлен Вам по СМС. Пароль:',
      inputLoginPassword: 'Введите логин и пароль'
    },
    goods: [],
    orders: [],
    cart: {
      name: '',
      phone: '',
      info: '',
      cartPos: [],
      sendedAt: null
    },
    server: '', // 'http://192.168.2.120:3012', // 'http://node.markovrv.ru', //
    goodAdminModal: {
      show: false,
      header: 'Заголовок',
      type: '',
      good: new Good()
    },
    user: {
      apikey: null,
      name: '',
      phone: '',
      admin: false
    }
  },
  mutations: {
    //
    // =======================  методы корзины  ===========================
    // добавление товара в корзину
    addInCart (state, data) {
      if (state.cart.sendedAt) {
        state.cart = {
          name: state.user.name,
          phone: convertPhone(state.user.phone),
          info: '',
          cartPos: [],
          sendedAt: null
        }
      }
      var good = state.goods.find(obj => obj._id === data.id)
      new Cart(data.id, data.ver, data.count, good).addInCart(
        state.cart.cartPos
      )
      localStorage.cart = JSON.stringify(state.cart)
    },
    // сохранение корзины в локальное хранилище
    saveCart (state) {
      localStorage.cart = JSON.stringify(state.cart)
    },
    // загрузка корзины из локального хранилища
    loadCart (state) {
      if (localStorage.cart) {
        Vue.set(state, 'cart', JSON.parse(localStorage.cart))
      }
    },
    // очистка корзины
    clearCart (state) {
      state.cart = {
        name: state.user.name,
        phone: convertPhone(state.user.phone),
        info: '',
        cartPos: [],
        sendedAt: null
      }
    },
    //
    // =======================  методы товаров  ===========================
    // добавление категории товара
    addGoodVer (state) {
      state.goodAdminModal.good.ver.push(new Good().ver[0])
    },
    // добавление товара
    addGood (state, data) {
      data.component.$Notify.success({
        message: data.message
      })
      state.goods.push(data.good)
    },
    // удаление товара
    delGood (state, gid) {
      var id = state.goods.findIndex(obj => obj._id === gid)
      state.goods.splice(id, 1)
    },
    // изменение товара по id
    setGood (state, good) {
      var id = state.goods.findIndex(obj => obj._id === good._id)
      Vue.set(state.goods, id, good)
    },
    // выбор версии товара
    setSelected (state, data) {
      var good = state.goods.find(obj => obj._id === data.good._id)
      Vue.set(good, 'selected', data.id)
    },
    // открытие окна редактирования товара
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
    // скрытие окна редактирования товара
    closeGoodAdminModal (state, data) {
      if (data) {
        data.component.$Notify.success({
          message: data.message
        })
      }
      Vue.set(state.goodAdminModal, 'show', false)
    }
  },
  actions: {
    //
    // =======================  действия товаров  ===========================
    // удаление версии товара
    delGoodVer (context, index) {
      this.dispatch('delFile', {
        good: context.state.goodAdminModal.good,
        id: index
      })
      context.state.goodAdminModal.good.ver.splice(index, 1)
    },
    // получение всех товаров
    getAllGoods (context) {
      Axios.get(context.state.server + '/api/goods/').then(resp => {
        context.state.goods = resp.data
      })
    },
    // изменение/добавление товара
    setGood (context, reqData) {
      var good = reqData.good
      var component = reqData.component
      if (!context.state.user.apikey) return null
      if (good._id !== undefined) {
        var data = JSON.parse(JSON.stringify(good))
        delete data._id
        Axios.put(context.state.server + '/api/goods/' + good._id, data).then(
          resp => {
            context.commit('closeGoodAdminModal', {
              component,
              message: 'Товар изменен'
            })
          }
        )
      } else {
        Axios.post(context.state.server + '/api/goods', good).then(resp => {
          var respData = {
            good: resp.data,
            component,
            message: 'Товар добавлен'
          }
          context.commit('addGood', respData)
        })
      }
    },
    // удаление товара
    delGood (context, data) {
      var good = data.good
      if (!context.state.user.apikey) return null
      Axios.delete(context.state.server + '/api/goods/' + good._id).then(
        resp => {
          context.commit('closeGoodAdminModal', {
            component: data.component,
            message: 'Товар удален'
          }) // дописать компонент
          context.commit('delGood', good._id)
        }
      )
    },
    // отправка фото товара
    sendFile (context, data) {
      if (!context.state.user.apikey) return null
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
    // удаление фото товара
    delFile (context, data) {
      if (!context.state.user.apikey) return null
      // выбор нужного фото
      var selected = 0
      // если удаляем не из формы (не по id)
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
    //
    // =======================  действия заказов  ===========================
    // получение всех доступных заказов
    getAllOrders (context) {
      if (!context.state.user.apikey) return null
      Axios.get(context.state.server + '/api/orders/').then(resp => {
        context.state.orders = resp.data
      })
    },
    // отправка заказа
    orderSend (context, req) {
      var data = JSON.parse(JSON.stringify(context.state.cart))
      // Проверка поля Телефон и Пользователь
      if (!data.phone) return null
      if (data.phone.indexOf('+7') !== 0) {
        data.phone = '+7' + data.phone.replace(/[- )(]/g, '')
      }
      if (context.state.user.apikey) {
        context.state.user.phone = data.phone
        context.state.user.name = data.name
        context.dispatch('userSet', context.state.user)
        data.user = context.state.user._id
      }
      Axios.post(context.state.server + '/api/orders/', data).then(resp => {
        req.component.$Modal.alert({
          width: 300,
          title: 'Заказ отправлен',
          content: req.message,
          callback: () => {
            if (context.state.user.apikey) {
              context.commit('clearCart')
              context.commit('saveCart')
              window.location.href = '#/orders'
            } else {
              var date = new Date()
              date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
              Vue.set(context.state.cart, 'sendedAt', date)
              context.commit('saveCart')
            }
          }
        })
      })
    },
    // удаление заказа
    delOrder (context, order) {
      if (!context.state.user.apikey) return null
      Axios.delete(context.state.server + '/api/orders/' + order._id).then(
        resp => {
          context.dispatch('getAllOrders')
        }
      )
    },
    // отметка Заказ выполнен
    doneOrder (context, order) {
      if (!context.state.user.apikey) return null
      Axios.put(context.state.server + '/api/orders/' + order._id, {
        status: 'done'
      }).then(resp => {
        context.dispatch('getAllOrders')
      })
    },
    //
    // =======================  действия пользователей  ===========================
    // изменение данных пользователя
    userSet (context, user) {
      if (!context.state.user.apikey) return null
      var data = JSON.parse(JSON.stringify(user))
      delete data._id
      Axios.put(context.state.server + '/api/users/' + user._id, data).then(
        resp => {}
      )
    },
    // регистрация нового пользователя
    register (context, req) {
      if (context.state.user.apikey) return null
      var data = JSON.parse(JSON.stringify(req.user))
      delete data._id
      Axios.post(context.state.server + '/api/users/register', data)
        .then(resp => {
          if (resp.data.message === 'USER_EXISTS') {
            // не логинимся, нужен только id
            context.state.user._id = resp.data._id
            // отправляем заказ
            context.dispatch('orderSend', {
              component: req.component,
              message: context.state.messages.orderSendedOldPassSMS
            })
          }
          if (resp.data.message === 'USER_CREATED') {
            // сохраняем данные пользователя
            context.state.user = resp.data
            // Добавляем apikey в запрос
            Axios.defaults.headers.common.apikey = context.state.user.apikey
            // запоминаем логин и пароль в Cookies
            Vue.$cookies.set('login', resp.data.login)
            Vue.$cookies.set('password', resp.data.password)
            // отправляем заказ
            context.dispatch('orderSend', {
              component: req.component,
              message:
                context.state.messages.orderSendedNewPassSMS +
                ' ' +
                resp.data.password
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // авторизация пользователя
    login (context, component) {
      var login = Vue.$cookies.get('login')
      var password = Vue.$cookies.get('password')
      if (!login || !password) {
        if (component.loginForm) {
          component.$Notify.error({
            message: context.state.messages.inputLoginPassword
          })
        }
        return null
      }
      Axios.post(context.state.server + '/api/users/login', {
        login,
        password
      })
        .then(resp => {
          // сохраняем данные пользователя
          context.state.user = resp.data
          // Добавляем apikey в запрос
          Axios.defaults.headers.common.apikey = context.state.user.apikey
          // обновляем данные корзины
          context.commit('loadCart')
          context.state.cart.name = context.state.user.name
          context.state.cart.phone = convertPhone(context.state.user.phone)
          context.commit('saveCart')
          context.dispatch('getAllOrders')
          // если вход через форму логина (не автовход)
          if (component.loginForm) {
            // выводим оповещение об успешном входе
            component.$Notify.success({
              title: 'Здравствуйте, ' + context.state.user.name
            })
            // на предыдущую страницу
            component.$router.go(-1)
          }
        })
        .catch(error => {
          if (error.response) {
            // выводим ошибку о неверных логине - пароле
            component.$Notify.error({
              message: context.state.errorCodes[error.response.status]
            })
            context.dispatch('logout')
          }
        })
    },
    // выход пользователя
    logout (context) {
      Vue.$cookies.remove('login')
      Vue.$cookies.remove('password')
      context.state.user.admin = false
      context.state.user.apikey = null
      context.state.user.name = ''
      context.state.user.phone = ''
      context.state.orders = []
    }
  },
  modules: {}
})

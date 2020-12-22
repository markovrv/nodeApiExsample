var Users = require('../models/users')

// Генератор apikey
function generateUUID () {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
  return uuid
}

// Генератор пароля
function generatePassword (len = 4) {
  if (len > 10) len = 10
  len = len * -1
  return Math.random()
    .toString(36)
    .slice(len)
}

// Запрос всех пользователей
exports.all = (req, res) =>
  Users.all((err, docs) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    docs.forEach(el => {delete el['password']})
    res.send(docs)
  })

// Поиск пользователя по id
exports.findByID = (req, res) =>
  Users.findByID(req.params.id, (err, doc) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })

// Создание пользователя
exports.create = (req, res) => {
  var user = req.body
  // Если не указан логин - выходим
  if (!user.login) return res.sendStatus(500)
  // Ищем пользователя с таким логином
  Users.findByLogin(user.login, (err, oldUser) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    // Если нашли
    if (oldUser) {
        delete oldUser['password']
        delete oldUser['apikey']
        oldUser.message = "USER_EXISTS"
        return res.send(oldUser)
    }
  })
  // Генерируем новые ключи
  user.apikey = generateUUID()
  if (!user.password) user.password = generatePassword()
  // На всякий случай - не админ
  user.admin = false
  // Создаём пользователя
  Users.create(user, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    user.message = "USER_CREATED"
    res.send(user)
  })
}

// Обновление данных пользователя
exports.update = (req, res) => {
  // Проверяем права пользователя
  if (!req.query.apikey) return res.sendStatus(500)
  Users.findByApikey(req.query.apikey, (err, user) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    if (!user) return res.sendStatus(500)
    // Не-админ правит только свои данные
    var id = user._id
    if (user.admin) id = req.params.id
    // Не-админ админом не станет
    else req.body.admin = false
    // Обновляем
    Users.updateById(id, req.body, (err, result) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
      res.sendStatus(200)
    })
  })
}

// Удаление пользователя
exports.delete = (req, res) =>
  Users.delete(req.params.id, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })

// Авторизация по логину и паролю
exports.login = (req, res) =>
  Users.findByLoginPassword(
    { login: req.body.login, password: req.body.password },
    (err, doc) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
      delete doc['password']
      res.send(doc)
    }
  )

// Открытые маршруты
var opened = [
  'GET/api/goods',         // получить товары
  'POST/api/orders',       // отправить заказ
  'POST/api/users/login',  // залогиниться
  'POST/api/users/register' // зарегистрироваться
]

// Маршруты для пользователей (есть apikey, но нет прав админа)
var usered = [
  'GET/api/orders', // Получить список заказов
  'PUT/api/orders', // Изменить заказ
  'DELETE/api/orders', // Удалить заказ
  'PUT/api/users' // Изменить данные пользователя
]

// Посредник прав пользователей
exports.middlware = (req, res, next) => {
  var path = req.method + req.path
  var finded = false
  opened.forEach(el => {
    if (path.indexOf(el) >= 0) {
      finded = true
      return
    }
  })
  if (finded) return next()
  if (!req.query.apikey) return res.sendStatus(500)
  Users.findByApikey(req.query.apikey, (err, user) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    if (user && !user.admin) {
      finded = false
      usered.forEach(el => {
        if (path.indexOf(el) >= 0) {
          finded = true
          return
        }
      })
      if (finded) return next()
    }
    if (user && user.admin) return next()
    return res.sendStatus(500)
  })
}

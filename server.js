var goodsRouter = require('./routes/api/goods')
var ordersRouter = require('./routes/api/orders')
var usersRouter = require('./routes/api/users')
var usersController = require('./controllers/users')
var express = require('express')
var app = express()
var db = require('./db')
const cors = require('cors');

app.use(cors());
app.options('*', cors());

// Статический роут для фронтенда в папке public
app.use(express.static('public'))

// Посредник, проверяет права доступа пользователя
app.use(usersController.middlware)

// Роуты товаров
app.use('/api/goods', goodsRouter)

// Роуты заказов
app.use('/api/orders', ordersRouter)

// Роуты пользователей
app.use('/api/users', usersRouter)

// Подключение к БД и старт сервера
db.connect('mongodb://localhost:27017', 'myapi', err => {
  if (err) return console.log(err)
  app.listen(3012, () => console.log('server started on http://127.0.0.1:3012'))
})

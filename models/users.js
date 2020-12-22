var ObjectID = require('mongodb').ObjectID
var db = require('../db')

// Имя таблицы в БД
var tableName = 'users'

// Выводит всех пользователей
exports.all = cb =>
  db
    .collection(tableName)
    .find()
    .toArray((err, docs) => cb(err, docs))

// Выводит пользователя по id
exports.findByID = (id, cb) =>
  db.collection(tableName).findOne(
    {
      _id: ObjectID(id)
    },
    (err, doc) => cb(err, doc))

// Выводит пользователя по apikey
exports.findByApikey = (apikey, cb) =>
  db.collection(tableName).findOne(
    {
      apikey: apikey
    },
    (err, doc) => cb(err, doc))

// Выводит пользователя по логину и паролю
exports.findByLoginPassword = (data, cb) =>
  db.collection(tableName).findOne(
    {
      login: data.login,
      password: data.password
    },
    (err, doc) => cb(err, doc))

// Выводит пользователя по логину
exports.findByLogin = (login, cb) =>
  db.collection(tableName).findOne(
    {
      login: login,
    },
    (err, doc) => cb(err, doc))

// Создает пользователя
exports.create = (data, cb) =>
  db.collection(tableName).insertOne(data, (err, result) => cb(err, result))

// Изменяет пользователя
exports.updateById = (id, newData, cb) =>
  db.collection(tableName).updateOne(
    {
      _id: ObjectID(id)
    },
    {
      $set: newData
    },
    (err, result) => cb(err, result))

// Удаляет пользователя
exports.delete = (id, cb) =>
  db.collection(tableName).deleteOne(
    {
      _id: ObjectID(id)
    },
    (err, result) => cb(err, result))




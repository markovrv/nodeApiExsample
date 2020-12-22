var Orders = require('../models/orders')
var Users = require('../models/users')

exports.all = (req, res) => {
  // Проверяем права пользователя
  if (!req.query.apikey) return res.sendStatus(500)
  Users.findByApikey(req.query.apikey, (err, user) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    if (!user) return res.sendStatus(500)
    if (user.admin) {
      Orders.all((err, docs) => {
        if (err) {
          console.log(err)
          return res.sendStatus(500)
        }
        res.send(docs)
      })
    } else {
      Orders.findByUserId(user._id, (err, docs) => {
        if (err) {
          console.log(err)
          return res.sendStatus(500)
        }
        res.send(docs)
      })
    }
  })
}

exports.findByID = (req, res) =>
  Orders.findByID(req.params.id, (err, doc) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })

exports.create = (req, res) =>
  Orders.create(req.body, (err, result) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(req.body)
  })

exports.update = (req, res) => {
  // Проверяем права пользователя
  if (!req.query.apikey) return res.sendStatus(500)
  Users.findByApikey(req.query.apikey, (err, user) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    if (!user) return res.sendStatus(500)
    if (user.admin) {
      Orders.update(req.params.id, req.body, (err, result) => {
        if (err) {
          console.log(err)
          return res.sendStatus(500)
        }
        res.sendStatus(200)
      })
    } else {
      Orders.findByID(req.params.id, (err, doc) => {
        if (err) {
          console.log(err)
          return res.sendStatus(500)
        }
        if (doc.user != user._id) return res.sendStatus(500)
        Orders.update(req.params.id, req.body, (err, result) => {
          if (err) {
            console.log(err)
            return res.sendStatus(500)
          }
          res.sendStatus(200)
        })
      })
    }
  })
}

exports.delete = (req, res) => {
    // Проверяем права пользователя
    if (!req.query.apikey) return res.sendStatus(500)
    Users.findByApikey(req.query.apikey, (err, user) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }
      if (!user) return res.sendStatus(500)
      if (user.admin) {
        Orders.delete(req.params.id, (err, result) => {
          if (err) {
            console.log(err)
            return res.sendStatus(500)
          }
          res.sendStatus(200)
        })
      } else {
        Orders.findByID(req.params.id, (err, doc) => {
          if (err) {
            console.log(err)
            return res.sendStatus(500)
          }
          if (doc.user != user._id) return res.sendStatus(500)
          Orders.delete(req.params.id, (err, result) => {
            if (err) {
              console.log(err)
              return res.sendStatus(500)
            }
            res.sendStatus(200)
          })
        })
      }
    })
  }

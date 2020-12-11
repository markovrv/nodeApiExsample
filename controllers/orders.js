var Orders = require('../models/orders');

exports.all = (req, res) => Orders.all((err, docs) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(docs);
});

exports.findByID = (req, res) => Orders.findByID(req.params.id, (err, doc) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(doc);
});

exports.create = (req, res) =>
    Orders.create(req.body, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(req.body);
    });

exports.update = (req, res) =>
    Orders.update(req.params.id, req.body, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });

exports.delete = (req, res) => Orders.delete(req.params.id, (err, result) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.sendStatus(200);
});
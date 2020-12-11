var Goods = require('../models/goods');

exports.all = (req, res) => Goods.all((err, docs) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(docs);
});

exports.findByID = (req, res) => Goods.findByID(req.params.id, (err, doc) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(doc);
});

exports.create = (req, res) =>
    Goods.create(req.body, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(req.body);
    });

exports.update = (req, res) =>
    Goods.update(req.params.id, req.body, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });

exports.delete = (req, res) => Goods.delete(req.params.id, (err, result) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.sendStatus(200);
});
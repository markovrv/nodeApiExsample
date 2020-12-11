var ObjectID = require('mongodb').ObjectID;
var db = require('../db');
var tableName = 'goods';

exports.all = (cb) => db.collection(tableName).find()
    .toArray((err, docs) => cb(err, docs));

exports.findByID = (id, cb) =>
    db.collection(tableName).findOne({
        _id: ObjectID(id)
    }, (err, doc) => cb(err, doc));

exports.create = (data, cb) =>
    db.collection(tableName)
    .insertOne(data, (err, result) => cb(err, result));

exports.update = (id, newData, cb) =>
    db.collection(tableName).updateOne({
            _id: ObjectID(id)
        }, {
            $set: newData
        },
        (err, result) => cb(err, result));

exports.delete = (id, cb) => db.collection(tableName).deleteOne({
    _id: ObjectID(id)
}, (err, result) => cb(err, result));
var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = (cb) => db.collection('artists').find()
    .toArray((err, docs) => cb(err, docs));

exports.findByID = (id, cb) =>
    db.collection('artists').findOne({
        _id: ObjectID(id)
    }, (err, doc) => cb(err, doc));


exports.create = (artist, cb) =>
    db.collection('artists')
    .insert(artist, (err, result) => cb(err, result));

exports.update = (id, newData, cb) =>
    db.collection('artists').updateOne({
            _id: ObjectID(id)
        }, {
            $set: {
                name: newData
            }
        },
        (err, result) => cb(err, result));

exports.delete = (id, cb) => db.collection('artists').deleteOne({
    _id: ObjectID(id)
}, (err, result) => cb(err, result));
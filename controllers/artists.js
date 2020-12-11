var Artists = require('../models/artists');

exports.all = (req, res) => Artists.all((err, docs) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(docs);
});

exports.findByID = (req, res) => Artists.findByID(req.params.id, (err, doc) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.send(doc);
});

exports.create = (req, res) => {
    var artist = { name: req.body.name };
    Artists.create(artist, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(artist);
    });
}

exports.update = (req, res) => {
    var artist = { name: req.body.name };
    Artists.update(req.params.id, artist, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
}
exports.delete = (req, res) => Artists.delete(req.params.id, (err, result) => {
    if (err) {
        console.log(err);
        return res.sendStatus(500);
    }
    res.sendStatus(200);
});
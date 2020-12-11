var Goods = require('../models/goods');
const fs = require("fs");

function deleteFile(name) {
    var path = './public/img/' + name;
    fs.access(path, err => {
        if (err) return "OK";
        fs.unlink(path, err => {
            if (err) return console.log(err);
            return "OK";
        });
    });

}

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

exports.delete = (req, res) =>
    Goods.delete(req.params.id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });

exports.uploadFile = (req, res) => {
    Goods.findByID(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }

        var filedata = req.file;
        if (!filedata) {
            console.log("File upload error");
            return res.sendStatus(500);
        }

        if (!doc.ver[req.params.ver]) {
            console.log("empty resource");
            deleteFile(filedata.filename);
            return res.sendStatus(500);
        }

        var photo = doc.ver[req.params.ver].photo;
        if (photo) deleteFile(photo.file);

        doc.ver[req.params.ver].photo = {
            file: filedata.filename,
            type: filedata.originalname.split('.').pop()
        }

        Goods.update(req.params.id, doc, (err, result) => {
            if (err) {
                console.log(err);
                deleteFile(photo.file);
                return res.sendStatus(500);
            }
            res.send(doc);
        });
    });
}

exports.deleteFile = (req, res) => {
    Goods.findByID(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }

        if (!doc.ver[req.params.ver]) {
            console.log("empty resource");
            return res.sendStatus(500);
        }

        var photo = doc.ver[req.params.ver].photo;
        if (photo && photo.file) deleteFile(photo.file);
        doc.ver[req.params.ver].photo = null;

        Goods.update(req.params.id, doc, (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        });
    });
}
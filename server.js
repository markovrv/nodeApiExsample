var express = require("express")
var bodyParser = require('body-parser')
var db = require('./db')
var router = require("./router")
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

router.use(app);

db.connect('mongodb://localhost:27017', 'myapi', err => {
    if (err) return console.log(err);
    app.listen(3012, () =>
        console.log('server started on http://127.0.0.1:3012')
    );
})
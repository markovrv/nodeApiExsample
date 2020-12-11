var express = require("express")
var bodyParser = require('body-parser')
var db = require('./db')
var artistsController = require('./controllers/artists')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/artists', artistsController.all)
app.get('/artists/:id', artistsController.findByID)
app.put('/artists/:id', artistsController.update)
app.post('/artists', artistsController.create)
app.delete('/artists/:id', artistsController.delete)

db.connect('mongodb://localhost:27017', 'myapi', err => {
    if (err) return console.log(err);
    app.listen(3012, () =>
        console.log('server started on http://127.0.0.1:3012')
    );
})
var goodsRouter = require("./routes/api/goods");
var ordersRouter = require("./routes/api/orders");
var app = require("express")();
var db = require('./db');

app.use('/api/goods', goodsRouter);
app.use('/api/orders', ordersRouter);

db.connect('mongodb://localhost:27017', 'myapi', err => {
    if (err) return console.log(err);
    app.listen(3012, () =>
        console.log('server started on http://127.0.0.1:3012')
    );
})
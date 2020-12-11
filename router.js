var artistsController = require('./controllers/artists')

exports.use = (app) => {
    app.get('/artists', artistsController.all)
    app.get('/artists/:id', artistsController.findByID)
    app.put('/artists/:id', artistsController.update)
    app.post('/artists', artistsController.create)
    app.delete('/artists/:id', artistsController.delete)
}
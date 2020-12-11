var goodsController = require('../../controllers/goods')
var router = require('express').Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.get('/', goodsController.all)
router.get('/:id', goodsController.findByID)
router.put('/:id', goodsController.update)
router.post('/', goodsController.create)
router.delete('/:id', goodsController.delete)

module.exports = router;
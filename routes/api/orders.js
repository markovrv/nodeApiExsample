var ordersController = require('../../controllers/orders')
var router = require('express').Router();
var bodyParser = require('body-parser');
const cors = require('cors');

router.use(cors());
router.options('*', cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.get('/', ordersController.all)
router.get('/:id', ordersController.findByID)
router.put('/:id', ordersController.update)
router.post('/', ordersController.create)
router.delete('/:id', ordersController.delete)

module.exports = router;
var usersController = require('../../controllers/users')
var router = require('express').Router();
var bodyParser = require('body-parser');
const cors = require('cors');

router.use(cors());
router.options('*', cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.get('/', usersController.all)
router.get('/:id', usersController.findByID)
router.put('/:id', usersController.update)
router.post('/register', usersController.create)
router.delete('/:id', usersController.delete)
router.post('/login', usersController.login)

module.exports = router;
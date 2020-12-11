var goodsController = require('../../controllers/goods')
var router = require('express').Router();
var bodyParser = require('body-parser');
var multer = require("multer");
const cors = require('cors');

router.use(cors());
router.options('*', cors());
router.use(multer({ dest: "public/img" }).single("filedata"));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.get('/', goodsController.all)
router.get('/:id', goodsController.findByID)
router.put('/:id', goodsController.update)
router.post('/', goodsController.create)
router.delete('/:id', goodsController.delete)
router.post("/upload/:id/:ver", goodsController.uploadFile);
router.delete("/upload/:id/:ver", goodsController.deleteFile);

module.exports = router;
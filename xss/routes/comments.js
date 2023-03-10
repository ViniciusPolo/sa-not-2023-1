var express = require('express');
const controller = require('../controllers/comments');
var router = express.Router();

router.post('/', controller.create )


module.exports = router;

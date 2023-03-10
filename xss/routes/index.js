var express = require('express');
const controller = require('../controllers/index');
var router = express.Router();

router.get('/',controller.retrieve)

module.exports = router;

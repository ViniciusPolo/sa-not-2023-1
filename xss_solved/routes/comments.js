var express = require('express');
const controller = require('../controllers/comments');
var router = express.Router();

router.post('/', controller.create )
// método post 
// método get da problema por enviar pela url


module.exports = router;

var express = require('express');
const controller = require('../controllers/users');
var router = express.Router();

router.post('/login', controller.login )

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  global.token = null;
  console.log(global.token);
  res.render('index', { title: 'Express' });
});

module.exports = router;
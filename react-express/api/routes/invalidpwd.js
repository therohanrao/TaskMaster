var express = require('express');
const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(__dirname + '/invalidpwd.html');
	res.sendFile(path.join(__dirname + '/invalidpwd.html'));
});

module.exports = router;

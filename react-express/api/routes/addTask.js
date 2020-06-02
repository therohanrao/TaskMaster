var express = require('express');
var router = express.Router();
const sql = require('mysql');

router.get('/',function(req, res, next){
	res.redirect('http://localhost:3000/addTask');
    });
router.post('/', function(request, response) {

    });

module.exports = router;
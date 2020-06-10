var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var session = require('express-session');
router.use(cookieParser());

const mysql = require('mysql');


var dbConfig = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'tasks',
	port: '8889'
    });


router.post('/', function(request, response) {
	var na2 = request.body.taskname;
	var username = request.session.username;
	console.log(na2);
	dbConfig.query("SELECT * FROM tasks WHERE name=? AND author=?;", [na2,username], (err, rows, fields)=>{
		if(!err) {
		    response.render('task-list.ejs', {page_title:"Tasks", data:rows});
		} else {
		    console.log(err);
		}
	    });
    });

module.exports = router;

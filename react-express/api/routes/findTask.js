var express = require('express');
var router = express.Router();
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
	console.log(na2);
	dbConfig.query("SELECT * FROM tasks WHERE author=?;", [na2], (err, rows, fields)=>{
		if(!err) {
		    response.render('task-list.ejs', {page_title:"Tasks", data:rows});
		} else {
		    console.log(err);
		}
	    });
    });

module.exports = router;

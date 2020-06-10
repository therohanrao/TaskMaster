var express = require('express');
var router = express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');

router.use(cookieParser());

const mysql = require('mysql');

var dbConfig = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'tasks',
	port: '3308'
    });

router.get('/',function(req, res, next){
	res.redirect('http://localhost:3000/addTask');
    });
router.post('/', function(request, response) {
	var na2 = request.body.Name;
	var de2 = request.body.Description;
        var pwd = request.body.Password;
        var startime = request.body.startdate + " " + request.body.starttime;
        var endtime = request.body.enddate + " " + request.body.endtime;
	var author = request.session.username;
	console.log(author);
        console.log(startime);
        console.log(endtime);
	dbConfig.query("INSERT INTO tasks (name, description, author, password, startdate, deadline) VALUES (?, ?,?,?,?,?);", [na2, de2, author, pwd, startime, endtime], (err, rows, fields)=>{
		if(!err) {
			console.log(rows);
		} else {
			console.log(err);
		}
	});
	return response.redirect('http://localhost:3000/MyCal');
    });

module.exports = router;
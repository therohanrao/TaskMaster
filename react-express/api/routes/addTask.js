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

router.get('/',function(req, res, next){
	res.redirect('http://localhost:3000/addTask');
    });
router.post('/', function(request, response) {
	var na2 = request.body.Name;
	var de2 = request.body.Description;
	var start = request.body.startdate;
	var end = request.body.enddate;
	console.log(start.value);
	console.log(end.value);
	    dbConfig.query("INSERT INTO tasks (author, description,startdate, deadline) VALUES (?, ?,?,?);", [na2, de2,start,end], (err, rows, fields)=>{
			    if(!err) {
				console.log(rows);
			    } else {
				console.log(err);
			    }
			});
	return response.redirect('http://localhost:3000/MyCal');
    });

module.exports = router;
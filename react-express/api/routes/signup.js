var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var dbConfig = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'users',
	port: '3308'
    });
dbConfig.connect((err) => {
	if (!err) {
	    console.log('DB connection succeeded.');
	} else {
	    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
	}
    });


router.get('/', function(req, res, next) {
	res.send('signuppage');
    });
router.post('/', function(request, response) {
	var em2 = request.body.email;
	var sq2 = request.body.securityquestion;
	var sa2 = request.body.securityanswer;
	var un2 = request.body.username;
	var pwd2 = request.body.password;
	dbConfig.query("INSERT INTO users (em, agreement, sq, sa, un, pw) VALUES ( ?, '1', ?, ?, ?, ?);", [em2, sq2, sa2, un2, pwd2], (err, rows, fields)=>{
		if(!err) {
		    console.log(rows);
		} else {
		    console.log(err);
		}
	    });
	return response.redirect('http://localhost:3000/SignIn');
    });
module.exports = router;
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var router = express.Router();
router.use(cookieParser());
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

router.post('/', function(request, response) {
	var un2 = request.body.username;
	var pwd2 = request.body.password;
	dbConfig.query("SELECT * FROM users WHERE un = ? AND pw = ?", [un2, pwd2], (err, rows, fields)=>{
			   if (rows.length > 0) {
				//response.redirect('/calendar');
                                global.token = un2;
			        request.session.username = un2;
			        console.log(request.session.username);
				response.redirect('http://localhost:3000/MyCal');
                                   
			   } else {
			       console.log('Invalid credentials.');
			       response.redirect('http://localhost:3000/InvalidPwd');
			   }
		       });
    });

module.exports = router;

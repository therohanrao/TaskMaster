var express = require('express');
var router = express.Router();
const mysql = require('mysql');
global.token = null;
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
	res.send('loginpage');
    });
router.post('/', function(request, response) {
	var un2 = request.body.username;
	var pwd2 = request.body.password;
	dbConfig.query("SELECT * FROM users WHERE un = ? AND pw = ?", [un2, pwd2], (err, rows, fields)=>{
			   if (rows.length > 0) {
				   //response.redirect('/calendar');
				   response.redirect('http://localhost:3000/MyCal');
                                   global.token = un2;
			   } else {
			       console.log('Invalid credentials.');
			       //response.redirect('/invalidpwd');
			       response.redirect('http://localhost:3000/InvalidPwd');
			   }
		       });
    });

module.exports = router;

var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var dbConfig = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '',
	database: 'users',
	port: '8889'
    });
console.log("hello");
router.post('/login', function(req, res) {
        var un2 = request.body.username;
	var pwd2 = request.body.password;
	dbConfig.query("SELECT * FROM users WHERE un = ? AND pw = ?", [un2, pwd2], (err, rows, fields)=>{
			   if (rows.length > 0) {
			       return response.redirect("/calendar");
			   } else {
			       console.log('Invalid credentials.');
			       return response.redirect('/');
			   }
		       });
    });
module.exports = router
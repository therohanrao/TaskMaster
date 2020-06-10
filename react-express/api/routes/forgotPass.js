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
        database: 'users',
        port: '8889'
    });


router.post('/', function(request, response) {
        var username = request.body.username;
        console.log(username);
        dbConfig.query("SELECT * FROM users WHERE un=?;", [username], (err, rows, fields)=>{
                if(!err) {
                    response.render('sa-list.ejs', {page_title:"Tasks", data:rows});
                } else {
                    console.log(err);
                }
            });
    });

module.exports = router;

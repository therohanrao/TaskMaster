var express = require('express');

var session = require('express-session');


var router = express.Router();

const mysql = require('mysql');

var dbConfig = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'users',
        port: '8889'
    });
dbConfig.connect((err) => {
        if (!err) {
            console.log('DB connection succeeded.');
        } else {
            console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
        }
    });


router.get('/', function(req, res, next) {
        res.send('checksa');
    });
router.post('/', function(request, response) {
        var un2 = request.body.username;
        var sa2 = request.body.testsa;
        dbConfig.query("SELECT * FROM users WHERE un = ? AND sa = ?", [un2, sa2], (err, rows,fields)=>{
                           if (!err) {
			       //response.redirect('/calendar');                            
			       console.log(un2);
			       console.log(sa2);
			       response.render('check-sa.ejs', {page_title:"Check SA", data:rows});
                           } else {
                               console.log(err);
                           }
                       });
    });

module.exports = router;
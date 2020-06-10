var express = require('express');
var router = express.Router();
const mysql = require('mysql');


var dbConfig = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'tasks',
        port: '3308'
    });


router.post('/', function(request, response) {
        var test = request.body.date;
	var un = request.session.username;
	console.log(un);
	console.log(test);
        
        dbConfig.query("SELECT * FROM tasks WHERE CAST(deadline AS DATE)=? AND contributor=?;", [test,un], (err, rows, fields)=>{
                if(!err) {
                    response.render('task-list.ejs', {page_title:"Tasks", data:rows});
                } else {
                    console.log(err);
                }
            });
    });

module.exports = router;
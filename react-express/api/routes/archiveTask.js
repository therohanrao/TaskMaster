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


router.get('/', function(request, response) {
        if (global.token == null) {
        	return response.redirect('http://localhost:3000/');
        }
        dbConfig.query("SELECT * FROM tasks WHERE completed=? AND (contributor=? OR author=?);", [1,global.token,global.token], (err, rows, fields)=>{
                if(!err) {
		    console.log(global.token);
                    response.render('archive.ejs', {page_title:"Archived Tasks", data:rows});
                } else {
                    console.log('No tasks archived.');
                }
            });
    });

module.exports = router;
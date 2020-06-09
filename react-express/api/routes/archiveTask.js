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
        dbConfig.query("SELECT * FROM tasks WHERE completed=1;", (err, rows, fields)=>{
                if(!err) {
                    response.render('archive.ejs', {page_title:"Archived Tasks", data:rows});
                } else {
                    console.log(err);
                }
            });
    });

module.exports = router;
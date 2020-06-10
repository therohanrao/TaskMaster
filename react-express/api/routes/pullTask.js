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
        var task = request.body.taskname;
        console.log(task);
        dbConfig.query("UPDATE tasks SET completed=NULL WHERE taskid=?;", [task], (err, rows, fields)=>{
                if(!err) {
                    response.redirect("http://localhost:8000/archiveTask");
                } else {
                    console.log(err);
                }
            });
    });

module.exports = router;
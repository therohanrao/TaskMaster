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


router.post('/', function(request, response) {
        var task = request.body.taskname;
	var commit = request.body.complete;
        console.log(task);
        dbConfig.query("UPDATE tasks SET completed = ?, cmsg = ? WHERE name=?;", [1, commit, task], (err, rows, fields)=>{
                if(!err) {
                    response.render('task-list.ejs', {page_title:"Tasks", data:rows});
                } else {
                    console.log(err);
                }
            });
    });

module.exports = router;
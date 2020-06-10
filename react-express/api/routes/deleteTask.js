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
    var idno = request.body.id;
    var commit = request.body.complete;
    dbConfig.query("SELECT * FROM tasks WHERE taskid=? AND author=?;", [idno, global.token], (err, rows, fields)=>{
        if (rows.length > 0) {
            var tempid = rows[0].taskid;
            var temp = rows[0].subtask;
            if (temp != null) {
                dbConfig.query("SELECT * from tasks WHERE subtask=?;", [tempid], (err, rows, fields)=>{
                    if (rows.length > 0) {
                        var newid = rows[0].taskid;
                        dbConfig.query("UPDATE tasks SET subtask=? WHERE taskid=?;", [temp, newid], (err, rows, fields)=>{
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                });
            }
            dbConfig.query("UPDATE tasks SET completed=?, cmsg=? WHERE taskid=?;", [1, commit, idno], (err, rows, fields)=>{
                if (!err) {
                    response.render('task-list.ejs', {page_title:"Tasks", data:rows});
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log('No task identified.');
        }
    });
});

module.exports = router;
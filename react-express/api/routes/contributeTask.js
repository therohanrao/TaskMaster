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

function getToLeaf(idno) {
    dbConfig.query("SELECT * FROM tasks WHERE taskid=? AND author=?;", [idno, global.token], (err, rows, fields)=>{
        if (rows[0].subtask == null) {
            var previd = rows[0].taskid;
            var newid = null;
            var prevname = rows[0].name;
            var prevdescription = rows[0].description;
            var prevauthor = rows[0].author;
            dbConfig.query("INSERT INTO tasks (name, description, author, contributor) VALUES (?, ?, ?, ?);", [prevname, prevdescription, prevauthor, global.token], (err, rows, fields)=>{
                if (!err) {
                    console.log(rows.insertId);
                    var newid = rows.insertId;
                    dbConfig.query("UPDATE tasks SET subtask=? WHERE taskid=?;", [newid, previd], (err, rows, fields)=>{
                        if (!err) {
                            return 0;
                        } else {
                            console.log(err);
                        }
                    });
                } else {
                    console.log(err);
                }
            });
        } else {
            return getToLeaf(rows[0].subtask);
        }
    });
}

router.post('/', function(request, response) {
    var idno = request.body.taskID;
    var password = request.body.password;
    if (password == '') {
        password = null;
    }
    dbConfig.query("SELECT * FROM tasks WHERE taskid=? AND password=?;", [idno, password], (err, rows, fields)=>{
        if (rows.length > 0) {
            if (rows[0].contributor == null) {
                dbConfig.query("UPDATE tasks SET contributor=? WHERE taskid=?;", [global.token, idno], (err, rows, fields)=>{
                    if (!err) {
                        return response.redirect('http://localhost:3000/MyCal');
                    } else {
                        console.log(err);
                    }
                });                
            } else {
                var dummy = getToLeaf(idno);
                return response.redirect('http://localhost:3000/MyCal');
            }
        } else {
            console.log('No task identified.');
        }
    });
});

module.exports = router;
let http = require('http');
let fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();
var usernameValid = null;
var username100 = null;
global.securityQuestionValid = null;
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    console.log('Called 1.');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about', function(req, res) {
    console.log('Called 2.');
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/create', function(req, res) {
    console.log('Called 3.');
    res.sendFile(path.join(__dirname + '/create-account.html'));
});

app.get('/calendar', function(req, res) {
    console.log('Called 4.');
    if (usernameValid != null) {
        res.sendFile(path.join(__dirname + '/calendar.html'));
    }
});

app.get('/taskadd', function(req, res) {
    console.log('Called 5.');
    if (usernameValid != null) {
        res.sendFile(path.join(__dirname + '/taskadd.html'));
    }
});

app.get('/taskfind', function(req, res) {
    console.log('Called 6.');
    if (usernameValid != null) {
        res.sendFile(path.join(__dirname + '/taskfind.html'));
    }
});

app.get('/tasklist', function(req, res) {
    console.log('Called 7.');
    if (usernameValid != null) {
        res.sendFile(path.join(__dirname + '/task-list.html'));
    }
});

app.get('/forgot', function(req, res) {
    console.log('Called 8.');
    res.sendFile(path.join(__dirname + '/forgot.html'));
});

app.get('/forgot2', function(req, res) {
    console.log('Called 9.');
    res.sendFile(path.join(__dirname + '/securityq.html'));
});

app.get('/contact', function(req, res) {
    console.log('Called 10.');
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/taskcontribute', function(req, res) {
    console.log('Called 11.');
    if (usernameValid != null) {
        res.sendFile(path.join(__dirname + '/contribute.html'));
    }
});

app.get('/taskdelete', function(req, res) {
    console.log('Called 12.');
    if (usernameValid != null) {
        res.sendFile(path.join(__dirname + '/delete.html'));
    }
});

app.post('/escape', function(req, res) {
    console.log('Called 13.');
    res.sendFile(path.join(__dirname + '/index.html'));
});

var dbConfig = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'users',
    port: '3308'
});

var dbConfig2 = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'tasks',
    port: '3308'
});

dbConfig.connect((err) => {
    if (!err) {
        console.log('DB connection succeeded.');
    } else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
    }
});

dbConfig2.connect((err) => {
    if (!err) {
        console.log('DB connection succeeded.');
    } else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
    }
});

app.listen(8000,()=>console.log('Express server is running at port no. 8000'));

app.use(express.static(path.join(__dirname + '/create-account.html')));
app.use(express.static(path.join(__dirname + '/index.html')));
app.use(express.static(path.join(__dirname + '/taskadd.html')));
app.use(express.static(path.join(__dirname + '/taskfind.html')));
app.use(express.static(path.join(__dirname + '/contribute.html')));
app.use(express.static(path.join(__dirname + '/delete.html')));
app.use(express.static(path.join(__dirname + '/securityq.html')));
app.use(express.static(path.join(__dirname + '/newpass.html')));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('short'));

function getToLeaf(idno) {
    dbConfig2.query("SELECT * FROM tasks WHERE taskid=? AND author=?;", [idno, usernameValid], (err, rows, fields)=>{
        if (rows[0].subtask == null) {
            var previd = rows[0].taskid;
            var newid = null;
            var prevname = rows[0].name;
            var prevdescription = rows[0].description;
            var prevauthor = rows[0].author;
            dbConfig2.query("INSERT INTO tasks (name, description, author, contributor) VALUES (?, ?, ?, ?);", [prevname, prevdescription, prevauthor, usernameValid], (err, rows, fields)=>{
                if (!err) {
                    console.log(rows.insertId);
                    var newid = rows.insertId;
                    dbConfig2.query("UPDATE tasks SET subtask=? WHERE taskid=?;", [newid, previd], (err, rows, fields)=>{
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

app.post('/addUser', function(request, response) {
    var em2 = request.body.em;
    var sq2 = request.body.sq;
    var sa2 = request.body.sa;
    var un2 = request.body.username;
    var pwd2 = request.body.pwd;
    var pwd3 = request.body.pwd2;
    dbConfig.query("INSERT INTO users (em, agreement, sq, sa, un, pw) VALUES ( ?, '1', ?, ?, ?, ?);", [em2, sq2, sa2, un2, pwd2], (err, rows, fields)=>{
        if(!err) {
            console.log(rows);
        } else {
            console.log(err);
        }
    });
    return response.redirect('/');
});

app.post('/login', function(request, response) {
    var un2 = request.body.username;
    var pwd2 = request.body.password;
    dbConfig.query("SELECT * FROM users WHERE un = ? AND pw = ?", [un2, pwd2], (err, rows, fields)=>{
        if (rows.length > 0) {
            usernameValid = un2;
            return response.redirect('/calendar');
        } else {
            console.log('Invalid credentials.');
            return response.redirect('/');
        }
    });
});

app.post('/addTask', function(request, response) {
    var na2 = request.body.name;
    var de2 = request.body.description;
    dbConfig2.query("INSERT INTO tasks (name, description, author) VALUES (?, ?, ?);", [na2, de2, usernameValid], (err, rows, fields)=>{
        if(!err) {
            console.log(rows);
        } else {
            console.log(err);
        }
    });
    return response.redirect('/calendar');
});

app.post('/findTask', function(request, response) {
    var na2 = request.body.name;
    console.log(na2);
    dbConfig2.query("SELECT * FROM tasks WHERE name=?;", [na2], (err, rows, fields)=>{
        if(!err) {
             response.render('task-list.ejs', {page_title:"Tasks", data:rows});
        } else {
            console.log(err);
        }
    });
});

app.post('/findTask2', function(request, response) {
    var de2 = request.body.description;
    console.log(de2);
    dbConfig2.query("SELECT * FROM tasks WHERE description=?;", [de2], (err, rows, fields)=>{
        if(!err) {
            response.render('task-list.ejs', {page_title:"Tasks", data:rows});
        } else {
            console.log(err);
        }
    });
});

app.post('/contributeTask', function(request, response) {
    var idno = request.body.id;
    dbConfig2.query("SELECT * FROM tasks WHERE taskid=? AND author=?;", [idno, usernameValid], (err, rows, fields)=>{
        if (rows.length > 0) {
            if (rows[0].contributor == null) {
                dbConfig2.query("UPDATE tasks SET contributor=? WHERE taskid=?;", [usernameValid, idno], (err, rows, fields)=>{
                    if (!err) {
                        return response.redirect('/calendar');
                    } else {
                        console.log(err);
                    }
                });                
            } else {
                var dummy = getToLeaf(idno);
                return response.redirect('/calendar');
            }
        } else {
            console.log('No task identified.');
        }
    });
});

app.post('/deleteTask', function(request, response) {
    var idno = request.body.id;
    dbConfig2.query("SELECT * FROM tasks WHERE taskid=? AND author=?;", [idno, usernameValid], (err, rows, fields)=>{
        if (rows.length > 0) {
            var tempid = rows[0].taskid;
            var temp = rows[0].subtask;
            if (temp != null) {
                dbConfig2.query("SELECT * from tasks WHERE subtask=?;", [tempid], (err, rows, fields)=>{
                    if (rows.length > 0) {
                        var newid = rows[0].taskid;
                        dbConfig2.query("UPDATE tasks SET subtask=? WHERE taskid=?;", [temp, newid], (err, rows, fields)=>{
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                });
            }
            dbConfig2.query("DELETE FROM tasks WHERE taskid=?;", [idno], (err, rows, fields)=>{
                if (!err) {
                    return response.redirect('/calendar');
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log('No task identified.');
        }
    });
});

app.post('/forgot2', function(request, response) {
    username100 = request.body.username;
    dbConfig.query("SELECT * FROM users WHERE un=?", [username100], (err, rows, fields)=>{
        if(rows.length > 0) {       
            securityQuestionValid = rows[0].sq;
            console.log(securityQuestionValid);
            return response.render(path.join(__dirname + '/securityq.html'), {name:securityQuestionValid});
        } else {
            console.log(err);
        }
    });
});

app.post('/newpass', function(request, response) {
    var answerQuestion = request.body.answer;
    dbConfig.query("SELECT * FROM users WHERE un=? AND sa=?", [username100, answerQuestion], (err, rows, fields)=>{
        if (rows.length > 0) {
            var password = rows[0].pw;
            return response.render(path.join(__dirname + '/newpass.html'), {name:password});
        }
    });
});

app.post('/redirect1', function(request, response) {
    return response.redirect('/taskadd');
});

app.post('/redirect2', function(request, response) {
    return response.redirect('/taskfind');
});

app.post('/redirect3', function(request, response) {
    return response.redirect('/taskcontribute');
});

app.post('/redirect4', function(request, response) {
    return response.redirect('/taskdelete');
});
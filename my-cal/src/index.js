let http = require('http');
let fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var jsonParser = bodyParser.json();

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

var dbConfig = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'users',
    port: '3306'
});

dbConfig.connect((err) => {
    if (!err) {
        console.log('DB connection succeeded.');
    } else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
    }
});

app.listen(8000,()=>console.log('Express server is running at port no. 8000'));

app.use(express.static(path.join(__dirname + '/create-account.html')));
app.use(express.static(path.join(__dirname + '/index.html')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('short'));

app.post('/addUser', function(request, response) {
    var em2 = request.body.em;
    var sq2 = request.body.sq;
    var sa2 = request.body.sa;
    var un2 = request.body.username;
    var pwd2 = request.body.pwd;
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
            console.log('You have logged in.');
        } else {
            console.log('Invalid credentials.');
        }
    });
    return response.redirect('/');
});
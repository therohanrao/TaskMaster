let http = require('http');
let fs = require('fs');
let path = require('path');
const mysql = require('mysql');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if(request.url.match("\.html$")){
        fs.readFile('./src' + request.url, null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write(request.url);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    } else if (request.url.match("\.php$")){
        fs.readFile('./src' + request.url, null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write(request.url);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });	
    } else {
        fs.readFile('./src/index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    }
};

http.createServer(handleRequest).listen(8000);

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "users",
    port: 3306
});

connection.connect(function(err) {
    if(err) {
        console.log("An error occurred with connection.");
    }
    console.log("Connected!");
});

connection.query("INSERT INTO users (em, agreement, sq, sa, un, pw) VALUES ('brianchap@protonmail.com', '1', 'Who is the Eggman?', 'Eggert', 'Brian', 'Brian')", function(err, result) {
    if (err) {
        console.log("An error occurred performing the query.");
        return;
    }
    console.log("Query successfully executed");
});
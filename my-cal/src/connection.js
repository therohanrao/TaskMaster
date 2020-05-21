const mysql = require('mysql');
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
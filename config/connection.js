var mysql = require("mysql");

//create connection
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Artloeb00*",
    database: "burger_db"
});

//make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection
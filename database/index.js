const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localHost",
    user: "root",
    password: "",
    database: "ball"
});

db.connect();

module.exports = db;
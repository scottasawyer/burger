require('dotenv').config();
const mysql = require('mysql'),
    con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.DB_PASS,
        database: "burgers_db"
    });

con.connect((err) => {
    if (err) {
        console.log(`ERROR CONNECTING: ${err.stack}`);
        return;
    }
    console.log(`Connect as id ${con.threadId}`);
});

module.exports = con;
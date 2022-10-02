const mysql = require('mysql2');

// creating connection to mysql database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jfuai9-iqyxP-prbTy',
    database: 'employee_tracker'
});

module.exports = db;
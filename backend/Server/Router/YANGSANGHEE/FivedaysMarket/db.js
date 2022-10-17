const mysql = require('mysql');

const Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nongdam1234',
  database: 'projectnongdam',
  multipleStatements: true,
});

Connection.connect();

module.exports = { Connection };

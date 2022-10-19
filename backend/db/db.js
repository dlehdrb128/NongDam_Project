const mysql = require('mysql');

const dbconfig = {
  host: 'localhost',
  user: 'root',
  password: 'nongdam1234',
  database: 'nongdam',
  multipleStatements: true,
};

const connection = mysql.createConnection(dbconfig);

module.exports = connection;

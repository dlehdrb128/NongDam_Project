const mysql = require('mysql');

const dbconfig = {
  host: "localhost",
  user: "root",
  password: "yehoon123!@",
  database: "nongdam_yehoon",
  multipleStatements: true,
};

const connection = mysql.createConnection(dbconfig);

module.exports = connection;

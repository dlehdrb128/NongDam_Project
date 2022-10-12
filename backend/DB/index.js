const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'storetest',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('데이터 베이스 접속');
});

module.exports = connection;

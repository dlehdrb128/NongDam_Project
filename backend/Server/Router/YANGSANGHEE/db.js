const mysql = require('mysql');

const Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ysh940516!",
  database: "projectnongdam",
})

Connection.connect();

module.exports = {
  Connection
}
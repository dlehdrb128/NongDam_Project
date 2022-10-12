const mysql = require("mysql");

const config = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "nongdam",
};

const con = mysql.createConnection(config);
con.connect((err) => {
  if (err) console.error("error connecting :", err.stack);
  console.log("connected");
});

module.exports = con;

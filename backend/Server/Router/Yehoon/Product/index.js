const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const dbconfig = require("../db");
const connection = mysql.createConnection(dbconfig);

router.get(`/:local`, (req, res) => {
  let local = req.params.local;

  if (local !== "all") {
    connection.query(
      `SELECT * FROM product WHERE product_search_local = '${local}'`,
      (err, rows, field) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      }
    );
  } else {
    connection.query(`SELECT * FROM product`, (err, rows, field) => {
      res.json(rows);
    });
  }
});

module.exports = router;

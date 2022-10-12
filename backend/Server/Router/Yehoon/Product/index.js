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

// 해당하는 product id의 product데이터와 review데이터를 가져오는 쿼리문
router.get("/detail/:id", (req, res) => {
  let id = req.params.id;

  connection.query(
    // `SELECT * FROM product INNER JOIN review on product.product_id = review.product_id WHERE product.product_id = ${id}`,
    `SELECT * FROM product where product_id = ${id}; SELECT * FROM review where product_id = ${id};`,
    (err, row, field) => {
      res.json(row);
    }
  );
});

module.exports = router;

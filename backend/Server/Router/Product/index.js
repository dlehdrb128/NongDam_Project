const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

router.get(`/search/:local/:sort`, (req, res) => {
  let local = req.params.local;
  let sort = req.params.sort;

  if (local !== "all") {
    switch (sort) {
      case "new":
        connection.query(
          `SELECT * FROM product WHERE product_local_eng = '${local}' ORDER BY product_post_date DESC`,
          (err, rows, field) => {
            if (err) {
              throw err;
            }

            res.json(rows);
          }
        );
        break;
      case "highPrice":
        connection.query(
          `SELECT * FROM product WHERE product_local_eng = '${local}' ORDER BY product_price DESC`,
          (err, rows, field) => {
            if (err) {
              throw err;
            }

            res.json(rows);
          }
        );
        break;
      case "lowPrice":
        connection.query(
          `SELECT * FROM product WHERE product_local_eng = '${local}' ORDER BY product_price ASC`,
          (err, rows, field) => {
            if (err) {
              throw err;
            }
            res.json(rows);
          }
        );
        break;
      default:
        connection.query(
          `SELECT * FROM product WHERE product_local_eng = '${local}'`,
          (err, rows, field) => {
            if (err) {
              throw err;
            }
            res.json(rows);
          }
        );
        break;
    }
  } else {
    switch (sort) {
      case "new":
        connection.query(
          `SELECT * FROM product ORDER BY product_post_date DESC`,
          (err, rows, field) => {
            res.json(rows);
          }
        );
        break;

      case "highPrice":
        connection.query(
          `SELECT * FROM product ORDER BY product_price DESC`,
          (err, rows, field) => {
            res.json(rows);
          }
        );
        break;

      case "lowPrice":
        connection.query(
          `SELECT * FROM product ORDER BY product_price ASC`,
          (err, rows, field) => {
            res.json(rows);
          }
        );
        break;

      default:
        connection.query(`SELECT * FROM product`, (err, rows, field) => {
          res.json(rows);
        });
        break;
    }
  }
});

// 해당하는 product id의 product데이터와 review데이터를 가져오는 쿼리문
router.get("/detail/:id", (req, res) => {
  let id = req.params.id;

  connection.query(
    // `SELECT * FROM product INNER JOIN review on product.product_id = review.product_id WHERE product.product_id = ${id}`,
    `SELECT product.*,admin_store.store_name FROM product inner join admin_store on product.user_key = admin_store.user_key where product_key = ${id}; select review.*, review_image.* from review inner join review_image on review.review_key = review_image.review_key where review.product_key = ${id}`,
    (err, row, field) => {
      if (err) {
        throw err;
      }
      res.json(row);
    }
  );
});

router.post("/cart/insert", (req, res) => {
  let key = req.body[0].product_key;
  let count = req.body[1];
  connection.query(`insert into cart value (null,2,${key},'일반',${count}`),
    (err, row, field) => {
      if (err) throw err;
    };
});

router.get("/value/:id", (req, res) => {
  let id = req.params.id;

  connection.query(
    `select count(review_key) as reviewCount,avg(review_value) as reviewValue from review where product_key = ${id};`,
    (err, row, field) => {
      if (err) {
        throw err;
      }
      res.json(row);
    }
  );
});

module.exports = router;

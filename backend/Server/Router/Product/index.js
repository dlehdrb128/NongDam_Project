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
    `SELECT product.*,admin_store.store_name, admin_store.store_key FROM product inner join admin_store on product.user_key = admin_store.user_key where product_key = ${id}; SELECT DISTINCT review.review_post_date,review.*, review_image.review_image,review_image.review_image_2,review_image.review_image_3 from review inner join review_image on review.user_key = review_image.user_key where review.product_key = ${id} AND review_image.product_key = ${id};`,
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

router.post(`/review/write`, (req, res) => {
  let data = req.body;
  connection.query(
    "select review_key from review order by review_key desc limit 1",
    (err, rows, fields) => {
      connection.query(
        `insert into review values(null,${data.product_key},${data.user_key},'${
          data.user_auth
        }','${data.user_id}','${data.review_value}','${data.review_text}','${
          data.review_post_date
        }');
      insert into review_image values(null,${rows[0].review_key + 1},${
          data.product_key
        },${data.user_key},'${data.review_image}','${data.review_image_2}','${
          data.review_image_3
        }')`,
        (err, rows, fields) => {
          if (err) throw err;
          res.json({ status: 201 });
        }
      );
    }
  );
});

router.post("/review/delete", (req, res) => {
  let review_key = req.body.review_key;
  connection.query(
    `delete from review where review_key = ${review_key};`,
    (err, row, field) => {
      if (err) throw err;

      res.json({ status: 201 });
    }
  );
});

router.post("/review/edit", (req, res) => {
  let review_key = req.body.review_key;
  let review_text = req.body.review_text;
  let review_value = req.body.review_value;
  connection.query(
    `update review set review_text = '${review_text}', review_value = ${review_value} where review_key = ${review_key}`,
    (err, row, field) => {
      if (err) throw err;

      res.json({ status: 201 });
    }
  );
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

router.post("/productdetail/insert", (req, res) => {
  let key = req.body[0].product_key;
  let count = req.body[1];
  connection.query(
    `insert into cart value (null,2,${key},'일반',${count})`,
    (err, row, field) => {
      if (err) throw err;
    }
  );
});

module.exports = router;

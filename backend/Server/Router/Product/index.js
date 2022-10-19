const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

router.get(`/:local`, (req, res) => {
  let local = req.params.local;
  if (local !== "all") {
    connection.query(
      `SELECT * FROM product WHERE product_local_eng = '${local}'`,
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
    `SELECT * FROM product where product_key = ${id}; select review.review_user_id, review.review_value, review.review_text, review.review_post_date, review.review_key, review_image.review_image,review_image.review_image_2,review_image.review_image_3 from review inner join review_image on review.review_key = review_image.review_key where review.product_key = ${id}`,
    (err, row, field) => {
      if (err) {
        throw err;
      }
      res.json(row);
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
  let key = req.body[0].product_key
  let count = req.body[1];
  connection.query(`insert into cart value (null,2,${key},'일반',${count})`, (err, row, field) => {
    if (err) throw err;
  })
})

module.exports = router;

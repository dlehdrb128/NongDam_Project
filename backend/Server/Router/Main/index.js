const express = require('express');
const router = express.Router();
const connection = require("../../../db/db");

router.get('/', (req, res) => {
  res.send('하이');
});

// 최근 상품 4개만 가져오는 쿼리문
router.get("/latest", (req, res) => {
  connection.query(
    "SELECT * FROM product ORDER BY product_post_date DESC limit 4",
    (err, row, field) => {
      res.json(row);
    }
  );
});

// 최근 리뷰중에서 별점 높은 순으로 데이터를 가져오는 쿼리문
router.get("/review", (req, res) => {
  connection.query(
    // "select * from review ORDER BY review_value DESC, review_date limit 3; select * from product limit 3;",
    "select DISTINCT review.review_user_id, review.review_text, product.product_name,product.product_key, review_image from review inner join product on review.product_key = product.product_key join review_image on review.product_key = review_image.product_key ORDER BY  review_post_date DESC,review.review_value DESC limit 3 ",

    (err, row, field) => {
      res.json(row);
      console.log(row);
    }
  );
});

module.exports = router;

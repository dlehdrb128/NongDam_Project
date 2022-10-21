const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");
const userCheck = require("../../../util/usercheck");

router.get("/", (req, res) => {
  connection.query(
    `select * from product LEFT OUTER JOIN cart on 
  product.product_key = cart.product_key;`,
    (error, row, field) => {
      if (error) throw error;
      res.send(row);
      console.log(row);
    }
  );
});

router.get('/user/:user_key', (req, res) => {
  let user_key = req.params.user_key;
  connection.query(
    `select cart.*,product.product_name,product.product_price,product.product_image,product.product_discount_set,product.product_discount_percent from cart inner join product ON product.product_key = cart.product_key where cart.user_key = ${user_key}`,
    (error, row, field) => {
      if (error) throw error;
      res.send(row);
    }
  );
});

module.exports = router;

const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

router.get('/', (req, res) => {
  connection.query(`select * from product LEFT OUTER JOIN cart on 
  product.product_key = cart.product_key;`,
    (error, row, field) => {
      if (error) throw error;
      res.send(row);
      console.log(row);
    })
  console.log('db 연동완료');
})

module.exports = router;
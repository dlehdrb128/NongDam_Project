const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

router.get('/', (req, res, err) => {
  connection.query(`select * ,date_format(orders_date,'%Y.%m.%d %h:%i')as covert_date from orders;
  select user_name from user inner join orders on user.user_key = orders.user_key;
  select product_name,product_price,product_image from product inner join orders on product.product_key = orders.product_key;
  `, (error, row, field) => {
    if (error) throw error;
    res.send(row);
  });
  console.log('db 연동완료');
})

module.exports = router;

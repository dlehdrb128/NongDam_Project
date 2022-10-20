const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");
const userCheck = require("../../../util/usercheck");

router.get("/", (req, res) => {
  connection.query(
    `select * ,date_format(orders_date,'%Y.%m.%d %h:%i')as covert_date from orders;
  select user_name from user inner join orders on user.user_key = orders.user_key;
  select product_name,product_price,product_image from product inner join orders on product.product_key = orders.product_key;
  `,
    (error, row, field) => {
      if (error) throw error;
      res.send(row);
    }
  );
  console.log("db 연동완료");
});

router.get("/:productId", userCheck, (req, res) => {
  console.log(req.params);
  console.log(req.session.userInfo);

  const SQL = ``;

  // connection.query(SQL, (error, row, field) => {
  //   if (error) throw error;
  //   res.json(row);
  // });
  res.send("test");
});

module.exports = router;

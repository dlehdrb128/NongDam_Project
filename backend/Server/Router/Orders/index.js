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
  const { productId } = req.params;
  const { user_key } = req.session.userInfo;
  // console.log(req.session.userInfo);

  const SQL1 = `
  SELECT
     P.product_key, P.product_name, P.product_price, P.product_image,
     P.product_detail, P.product_discount_set, P.product_discount_percent,
     O.orders_date, O.Orders_date, O.orders_number, O.orders_status, O.orders_point
  FROM orders O
    JOIN product P
    ON P.product_key = ${productId}
  WHERE O.user_key = ${user_key} AND O.product_key = ${productId};
  `;

  const SQL2 = `
  SELECT 
  COUNT(user_key) as orderTotal 
  FROM orders WHERE user_key = ${user_key};
  `;

  connection.query(`${SQL1} ${SQL2}`, (error, row, field) => {
    if (error) throw error;

    console.log(req.session.userInfo);

    console.log(row[1].orderTotal);
    const userInfo = row[1];

    res.json({
      status: 201,
      orderDetail: row[0],
    });
  });
});

module.exports = router;

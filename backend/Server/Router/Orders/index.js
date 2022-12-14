const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");
const userCheck = require("../../../util/usercheck");

router.get("/:id", (req, res) => {
  let id = req.params.id
  connection.query(
    `select user_name from user where user_key =${id};
    select * from orders left outer join product on product.product_key = orders.product_key where orders.user_key = ${id};
    select count(orders.orders_status)as count from orders where orders.user_key = ${id};
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
     date_format(O.orders_date,'%Y.%m.%d %h:%i') As orders_date, O.orders_number, O.orders_status, O.orders_point
  FROM orders O
    JOIN product P
    ON P.product_key = ${productId}
  WHERE O.user_key = ${user_key} AND O.product_key = ${productId};
  `;

  const SQL2 = `
  SELECT round(SUM(P.product_price - (P.product_price * P.product_discount_percent / 100)))  AS totalPrice, 
		     COUNT(O.user_key) AS totalOrder 
  FROM orders O
    JOIN product P
    ON P.product_key = O.product_key
  WHERE O.user_key = ${user_key};
  `;

  connection.query(`${SQL1} ${SQL2}`, (error, row, field) => {
    if (error) throw error;

    let [[orderDetail], [userInfo]] = row;

    // userInfo = {
    //   ...req.session.userInfo,
    // };

    orderDetail = {
      ...orderDetail,
      ...req.session.userInfo,
      ...userInfo,
    };

    res.json({
      status: 201,
      orderDetail,
    });
  });
});

module.exports = router;

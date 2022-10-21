const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

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

module.exports = router;

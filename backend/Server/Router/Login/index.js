const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

// router.post("/attempt", (req, res) => {
//   console.log(req.body);
//   const { id, password } = req.body;

//   connection.query(
//     `select * from user where user_id = '${id}' and user_password = '${password}'`,
//     (err, row, field) => {
//       if (row === undefined) {
//         console.log("실패");
//       } else {
//         res.send("야메떼");
//       }
//     }
//   );
// });

router.post("/attempt", (req, res) => {
  const { id, password } = req.body;

  connection.query(
    `select * from user where user_id = '${id}' AND user_password = '${password}'`,
    (err, row, field) => {
      if (row[0] === undefined) {
        console.log("데이터가 없습니다");
      } else {
        res.json({ login: "성공", statusMessage: 201 });
      }
    }
  );
});

module.exports = router;

const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");
const userCheck = require("../../../util/usercheck");
const admincheck = require("../../../util/admincheck");

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

router.post("/", async (req, res, next) => {
  const { id, password } = req.body;

  const SQL = `SELECT *
  FROM user
  WHERE user_id LIKE '${id}' AND user_password LIKE '${password}'
`;
  connection.query(SQL, (err, row, filed) => {
    if (err || row.length === 0) {
      console.error(err);
      return res
        .clearCookie("connect.sid")
        .json({ status: 401, statusMessage: "로그인 실패" });
    }

    if (row[0].user_id === id && row[0].user_password === password) {
      // 데이터 베이스에 있는 user_id 컬럼과 웹 브라우저에 있는 id 같고
      // user_password 웹 브라우저에 있는 password가 같을 경우에

      //  req.session에 userId를 추가한다, 그러면 세션이 생기고 이에 따라서 쿠키를 자동으로 프론트에 추가

      req.session.userId = row[0].user_id;
      // req.session.userInfo = row[0];

      res.json({ status: 201, statusMessage: "로그인 성공" });
    }
  });
});

router.get("/check", userCheck, (req, res, next) => {
  if (req.session.userId) {
    res.json({ status: 201, userInfo: req.userInfo });
  }
});

router.get("/admincheck", admincheck, (req, res, next) => {
  console.log("aa");

  res.status(200).json({ status: 201, statusMessage: "ok" });
});

// router.get("/check", (req, res) => {
//   console.log(req.cookies);
//   res.json(req.cookies);
// });

module.exports = router;

const express = require("express");
const { Store } = require("express-session");
const router = express.Router();
const db = require("../../../db/index");
const userCheck = require("../../../util/userCheck");

// const userCheck = (req, res, next) => {
//   const { user_id, password } = req.body;

//   const SQL = `SELECT *
//   FROM user
//   WHERE user_id LIKE '${user_id}' AND user_password LIKE '${password}'
// `;
//   db.query(SQL, (err, row, filed) => {
//     if (err || row.length === 0) {
//       console.error(err);
//       return res
//         .status(401)
//         .json({ status: 401, statusMessage: "로그인 실패" });
//     }

//     if (row[0].user_id === user_id && row[0].user_password === password) {
//       req.session.userId = row[0].user_id;
//       next();
//     }
//   });
// };

router.post("/", async (req, res, next) => {
  // const cookieValue = req.session.save();
  const { user_id, password } = req.body;

  const SQL = `SELECT *
  FROM user
  WHERE user_id LIKE '${user_id}' AND user_password LIKE '${password}'
`;
  db.query(SQL, (err, row, filed) => {
    if (err || row.length === 0) {
      console.error(err);
      return res
        .status(401)
        .json({ status: 401, statusMessage: "로그인 실패" });
    }

    if (row[0].user_id === user_id && row[0].user_password === password) {
      req.session.userId = row[0].user_id;

      return res
        .status(201)
        .json({ status: 201, statusMessage: "로그인 성공" });
    }
  });

  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("Access-Control-Allow-Headers", "content-type");
});

// const userCheck = (req, res, next) => {
//   if (!req.session.userId) {
//     req.session.destroy();
//     return res
//       .clearCookie("connect.sid")
//       .status(401)
//       .json({ status: 401, statusMessage: "로그인 실패입니다" });
//   }

//   const SQL = `SELECT user_key, user_name, user_email, user_point
//                FROM   user WHERE user_id = '${req.session.userId}'`;

//   db.query(SQL, (err, row, filed) => {
//     if (err) console.error(err);

//     req.userInfo = row[0];
//     next();
//   });
// };

router.get("/", userCheck, (req, res) => {
  console.log(req.userInfo, "흑흑");

  res.json({ userInfo: req.userInfo });
});

//로컬, 세션, 쿠키, 캐시

module.exports = router;

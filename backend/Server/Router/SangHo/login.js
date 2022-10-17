const express = require("express");
const { Store } = require("express-session");
const router = express.Router();
const db = require("../../../db/index");

const utill = (req, res, next) => {
  console.log(req.sessionID);

  console.log(Store.get("GHBEgI7hzs_HukoqEwbxXcUCUl_Nh3lB"));
  if (!req.session.userId) {
    return res
      .status(401)
      .json({ status: 401, statusMessage: "로그인 실패입니다" });
  }
};

const testID = (req, res, next) => {
  const { email, password } = req.body;

  const SQL = `SELECT *
  FROM user
  WHERE user_email LIKE '${email}' AND user_password LIKE '${password}'
`;
  db.query(SQL, (err, row, filed) => {
    if (err || row.length === 0) {
      console.error(err);
      return res
        .status(401)
        .json({ status: 401, statusMessage: "로그인 실패" });
    }

    if (row[0].user_email === email && row[0].user_password === password) {
      req.session.userId = row[0].user_email;
      next();
    }
  });
};

router.post("/", testID, async (req, res, next) => {
  // const cookieValue = req.session.save();

  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("Access-Control-Allow-Headers", "content-type");

  res.status(201).json({ status: 201, statusMessage: "로그인 성공" });
});

router.get("/", utill, (req, res) => {
  console.log("요청");

  res.send("ok");
});

//로컬, 세션, 쿠키, 캐시

module.exports = router;

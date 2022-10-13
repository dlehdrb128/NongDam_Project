const express = require("express");
const router = express.Router();
const db = require("../../../db/index");

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
      req.session.save(() => {
        req.session.userId = row[0].user_email;
      });
      next();
    }
  });
};

router.post("/", testID, async (req, res, next) => {
  // const cookieValue = req.session.save();
  console.log(req.session.id);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.status(201).json({ status: 201, statusMessage: "로그인 성공" });
});

router.get("/", (req, res) => {
  console.log("요청");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.send("ok");
});

//로컬, 세션, 쿠키, 캐시

module.exports = router;

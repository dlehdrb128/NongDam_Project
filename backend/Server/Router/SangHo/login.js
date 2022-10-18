const express = require('express');
const { Store } = require('express-session');
const router = express.Router();
const db = require('../../../db/index');

const testID = (req, res, next) => {
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
        .json({ status: 401, statusMessage: '로그인 실패' });
    }

    if (row[0].user_id === user_id && row[0].user_password === password) {
      req.session.userId = row[0].user_id;
      next();
    }
  });
};

router.post('/', testID, async (req, res, next) => {
  // const cookieValue = req.session.save();

  console.log(req.session);
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("Access-Control-Allow-Headers", "content-type");

  res.status(201).json({ status: 201, statusMessage: '로그인 성공' });
});

router.get('/', (req, res) => {
  console.log(req.session);

  if (!req.session.userId) {
    req.session.destroy();
    return res
      .clearCookie('connect.sid')
      .status(401)
      .json({ status: 401, statusMessage: '로그인 실패입니다' });
  }

  res.status(201).json({ status: 201, statusMessage: 'ok' });
});

//로컬, 세션, 쿠키, 캐시

module.exports = router;

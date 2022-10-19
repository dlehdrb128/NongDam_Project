const db = require("../db/index");

const userCheck = (req, res, next) => {
  if (!req.session.userId) {
    req.session.destroy();
    return res
      .clearCookie("connect.sid")
      .status(401)
      .json({ status: 401, statusMessage: "로그인 실패입니다" });
  }

  const SQL = `SELECT user_key, user_name, user_email, user_point 
               FROM   user WHERE user_id = '${req.session.userId}'`;

  db.query(SQL, (err, row, filed) => {
    if (err) console.error(err);

    req.userInfo = row[0];
    next();
  });
};

module.exports = userCheck;

const connection = require('../db/db');

// 사업자 로그인 체크 함수
const admincheck = (req, res, next) => {
  if (!req.session.userId) {
    req.session.destroy();
    return res
      .status(401)
      .clearCookie('connect.sid')
      .json({ status: 401, statusMessage: '로그인 실패입니다' });
  } else {
    const SQL1 = `SELECT 
    user_auth
FROM  user WHERE user_id = '${req.session.userId}'`;

    const SQL = `SELECT user_key, user_name, user_email, user_point, user_auth,user_id,
    user_address, user_address_detail, user_phone
FROM  user WHERE user_id = '${req.session.userId}'`;

    connection.query(SQL1, (err, row, filed) => {
      if (err) console.error(err);
      const [userAuth] = row;
      ex(userAuth.user_auth);
    });

    const ex = (userauth) => {
      if (userauth === '사업자') {
        connection.query(SQL, (err, row, filed) => {
          console.log('1');
          if (err) console.error(err);

          req.userInfo = row[0];
          req.session.userInfo = row[0];
          return next();
        });
      } else {
        return res
          .status(401)
          .json({ status: 401, statusMessage: '권한이 없습니다.' });
      }
    };
  }
};

module.exports = admincheck;

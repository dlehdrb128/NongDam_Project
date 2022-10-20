const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');

router.get('/', (req, res) => {
  console.log('연결해따');
  res.send('연결해찌');
});

router.post('/', (req, res) => {
  console.log('DB연동완료');
  const {
    userAuth,
    userId,
    userEmail,
    userPassword,
    userName,
    userZipcode,
    userAddress,
    userAddressDetail,
    userCall,
    userPhone,
    userSMS,
    userEmailReceive,
    userReferralId,
    userAdminCompanyNum,
  } = req.body;

  const signUpSQL = `INSERT INTO user (user_key,user_auth,user_email,user_id,user_password,user_name,user_zipcode,user_address,user_address_detail,user_call,user_phone,user_sms,user_email_receive,user_referral_id,user_admin_companyNum) VALUES (null,'${userAuth}','${userEmail}','${userId}','${userPassword}','${userName}','${userZipcode}','${userAddress}','${userAddressDetail}','${userCall}','${userPhone}','${userSMS}','${userEmailReceive}','${userReferralId}','${userAdminCompanyNum}');`;

  connection.query(signUpSQL, (err, row, fild) => {
    if (err) throw err;
    console.log(row);
  });
});

module.exports = router;

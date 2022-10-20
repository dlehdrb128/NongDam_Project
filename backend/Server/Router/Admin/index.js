const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');

router.get('/storeOpen', (req, res) => {});

router.post('/storeOpen', (req, res) => {
  console.log(req.body);
  const {
    storeName,
    storeCeophone,
    storeCeoEmail,
    storeCeoName,
    storeAddress,
    storeCall,
    storePhone,
    storeReceiveEmail,
    storeOutgoingEmail,
    storeBusiness,
    storecsCall,
    storeCsEmail,
    storeFax,
    storeCsTime,
  } = req.body;

  const SQL = `INSERT INTO admin_store VALUES(null,13,'사업자','${storeName}','${storeCeophone}','${storeCeoEmail}','${storeCeoName}','${storeAddress}','${storeCall}','${storePhone}','${storeReceiveEmail}','${storeOutgoingEmail}',${storeBusiness},'${storecsCall}','${storeCsEmail}','${storeFax}','${storeCsTime}');`;

  connection.query(SQL, (err, row, fild) => {
    if (err) throw err;
    console.log(row);
  });
});

router.get('/newProduct', (req, res) => {
  console.log('상품등록');
  res.send('상품등록페이지');
});

// router.get('/newProduct', (req, res) => {
//   const {
//     productName,
//     productLocal,
//     productPrice,
//     productDiscountSet,
//     ProductDiscountPercent,
//   } = req.body;

//   const newproductSQL = `INSERT INTO product (product_key, product_name, product_local,product_price,product_discount_set,product_discount_percent) VALUES (null,'${productName}','${productLocal}','${productPrice}','${productDiscountSet}','${ProductDiscountPercent}');`;

//   connection.query(newproductSQL, (err, row, fild) => {
//     if (err) throw err;
//     console.log(row);
//   });
// });

module.exports = router;

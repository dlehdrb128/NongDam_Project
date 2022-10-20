const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const path = require('path');

router.get('/newProduct', (req, res) => {
  console.log('상품등록');
  res.send('상품등록페이지');
});

router.post('/newProduct', (req, res) => {
  console.log('연동완료');
  const {
    productName,
    productLocal,
    productLocalEng,
    productPrice,
    productDiscountSet,
    ProductDiscountPercent,
    productDiscountStart,
    productDiscountEnd,
  } = req.body;

  const newproductSQL = `INSERT INTO product (product_key,user_key,user_auth, product_name, product_local,product_local_eng,product_price,
    product_discount_set,product_discount_percent,product_discount_start,product_discount_end) VALUES (null,13,'사업자','${productName}','${productLocal}','${productLocalEng}','${productPrice}','${productDiscountSet}','${ProductDiscountPercent}','${productDiscountStart}','${productDiscountEnd}' );`;

  // product_image, product_detail 설정 못함

  connection.query(newproductSQL, (err, row, fild) => {
    if (err) throw err;
    console.log(row);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const multer = require('multer');
const path = require('path');

const upload = multer({
  // storage 어디에 저장할건지 , diskStorage 하드 디스크에 저장하겠다.

  storage: multer.diskStorage({
    // 어디 파일에 저장할것인지
    // cb는 함수이고 (에러, 파일이름) 에러가 없으나 null

    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },

    // 파일 이름 무엇으로 할건지
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname);
    },

    // 'admin/vegetables-1363033_960_720.jpg'
  }),
});

router.get('/storeOpen', (req, res) => {
  res.send(' 연동쓰');
  console.log('연동');
});

router.post('/upload', upload.single('img'), (req, res) => {
  console.log('aa');
  console.log(req.file);

  res.send('ok');
});

router.post('/storeOpen', (req, res) => {
  console.log(req.body);
  console.log(req.file);
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
    storeDesc,
  } = req.body;

  const SQL = `INSERT INTO admin_store (store_key, user_key,user_auth, store_name,store_ceo_phone,store_ceo_email,store_ceo_name,store_address,store_call,store_phone,store_reciveEmail,store_outgoingEmail,store_business,store_cs_call,store_cs_email,store_fax,store_cs_time,store_desc) VALUES (null, 13,'사업자','${storeName}','${storeCeophone}','${storeCeoEmail}','${storeCeoName}','${storeAddress}','${storeCall}','${storePhone}','${storeReceiveEmail}','${storeOutgoingEmail}',${storeBusiness},'${storecsCall}','${storeCsEmail}','${storeFax}','${storeCsTime}','${storeDesc}'
  );`;

  // store_img 설정 못함

  connection.query(SQL, (err, row, fild) => {
    if (err) throw err;
    console.log(row);
  });
});

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

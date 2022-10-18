const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const multer = require('multer');

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
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

router.get('/storeOpen', (req, res) => {});

router.post('/storeOpen', upload.single('img'), (req, res) => {
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
  } = req.body;

  const SQL = `INSERT INTO admin_store VALUES(null, 13,'사업자','${storeName}','${storeCeophone}','${storeCeoEmail}','${storeCeoName}','${storeAddress}','${storeCall}','${storePhone}','${storeReceiveEmail}','${storeOutgoingEmail}',${storeBusiness},'${storecsCall}','${storeCsEmail}','${storeFax}','${storeCsTime}');`;

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

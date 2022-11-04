const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');
const mime = require('mime-types');

const upload = multer({
  // storage 어디에 저장할건지 , diskStorage 하드 디스크에 저장하겠다.

  storage: multer.diskStorage({
    // 어디 파일에 저장할것인지
    // cb는 함수이고 (에러, 파일이름) 에러가 없으나 null

    destination: function (req, file, cb) {
      console.log(req);
      cb(null, 'uploads/store');
    },

    // 파일 이름 무엇으로 할건지
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
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
    storeimg,
    user_key,
  } = req.body;

  const SQL = `INSERT INTO admin_store (store_key, user_key,user_auth, store_name,store_ceo_phone,store_ceo_email,store_ceo_name,store_address,store_img,store_call,store_phone,store_reciveEmail,store_outgoingEmail,store_business,store_cs_call,store_cs_email,store_fax,store_cs_time,store_desc) VALUES (null, ${user_key},'사업자','${storeName}','${storeCeophone}','${storeCeoEmail}','${storeCeoName}','${storeAddress}','${storeimg}','${storeCall}','${storePhone}','${storeReceiveEmail}','${storeOutgoingEmail}',${storeBusiness},'${storecsCall}','${storeCsEmail}','${storeFax}','${storeCsTime}','${storeDesc}'
  );`;

  connection.query(SQL, (err, row, fild) => {
    if (err) throw err;
    console.log(row);
  });
});

// 스토어 대표이미지 업로드
router.post('/storeImage', upload.single('img'), (req, res) => {
  console.log(req.file, 'aaaaaa');
  console.log(req.body);
  console.log(req.file.filename);
  res.json({ imagePath: req.file.filename });
});

const upload_product = multer({
  // storage 어디에 저장할건지 , diskStorage 하드 디스크에 저장하겠다.

  storage: multer.diskStorage({
    // 어디 파일에 저장할것인지
    // cb는 함수이고 (에러, 파일이름) 에러가 없으나 null

    destination: function (req, file, cb) {
      cb(null, 'uploads/product');
    },

    // 파일 이름 무엇으로 할건지
    filename: function (req, file, cb) {
      console.log(file);
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
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
    productImage,
  } = req.body;

  // product_key 기준으로 desc 내림차순 으로
  // product테이블에 product_key 컬럼을 product_key기준으로 내림차순으로 1개
  connection.query(
    'select product_key from product order by product_key desc limit 1',
    (err, row1, field) => {
      if (err) throw err;
      console.log(row1);
      const newproductSQL = `INSERT INTO product (product_key,user_key,user_auth, product_name, product_local,product_local_eng,product_price,
      product_image,
      product_discount_set,product_discount_percent) VALUES (null,${user_key},'사업자','${productName}','${productLocal}','${productLocalEng}',${productPrice},'${productImage}',${productDiscountSet},${ProductDiscountPercent});
      INSERT INTO admin_discount_date VALUES(null,${
        row1[0].product_key + 1
      },${user_key},'사업자',${productDiscountStart},${productDiscountEnd});`;

      connection.query(newproductSQL, (err, row2, fild) => {
        if (err) throw err;
        console.log(row2);
      });
    }
  );

  // res.json({ status: '상품 등록 완료' });
});

// 상품등록 이미지 업로드
router.post('/newProductImage', upload_product.single('img'), (req, res) => {
  res.json({ imgPath: req.file.filename });
});

router.get(`/product/data/:user_key`, (req, res) => {
  console.log('요청');
  let key = req.params.user_key;

  connection.query(
    `select * from product where user_key = ${key}`,
    (err, row, field) => {
      res.json(row);
    }
  );
});

// 상품등록 - 상세페이지 사진 업로드 과정
const productStorage = multer.diskStorage({
  // (2)
  destination: (req, file, cb) => {
    // (3)
    cb(null, 'uploads/product');
  },
  filename: (req, file, cb) => {
    // (4)
    cb(null, `${uuid()}.${mime.extension(file.mimetype)}`); // (5)
  },
});

const productUpload = multer({
  // (6)
  storage: productStorage,
  fileFilter: (req, file, cb) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype))
      cb(null, true);
    else cb(new Error('해당 파일의 형식을 지원하지 않습니다.'), false);
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

router.post('/productImages', productUpload.single('file'), (req, res) => {
  // (7)
  console.log('데이터');
  res.status(200).json(req.file);
});

router.get('/product/delete/:product_key', (req, res) => {
  connection.query(
    `delete from product where product_key = ${req.params.product_key}`,
    (err, row, field) => {
      if (err) throw err;
      res.json({ status: 201 });
    }
  );
});

// 스토어 정보 불러오기
router.get('/store/data/:user_key', (req, res) => {
  console.log('스토어연동');

  let key = req.params.user_key;

  connection.query(
    `select * from admin_store where user_key = ${key}`,
    (err, row, field) => {
      res.json(row);
    }
  );
});

module.exports = router;

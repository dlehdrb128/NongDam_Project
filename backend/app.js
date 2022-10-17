const express = require('express');
const app = express();
const Main = require('./Server/Router/Main/index');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const yjdb = require('./Server/Router/Admin/index');

const Product = require('./Server/Router/Product/index');
const uploadTest = require('./Server/Router/uploadTest');

const PORT = process.env.PORT || 8080;

try {
  fs.readdirSync('uploads');
} catch (error) {
  fs.mkdirSync('uploads');
  console.log('uploads 파일이 없어서 생성합니다!');
}

// Request full drive access.

// const upload = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + Date.now() + ext);
//   },
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', Main);
app.use('/product', Product);
app.use('/upload', uploadTest);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/upload', upload.single('img'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.dir(req.header('Content-Type'));
  // console.log(req.files);

  res.send('하이');
});

app.get('/storOpen', (req, res) => {
  res.send('storeOpen 페이지 연결');
});

app.post('/storeOpen', (req, res) => {
  console.log('storeopen 성공');
  const {
    storeName,
    mobilePhone,
    email,
    name,
    address,
    huntingLine,
    mobile,
    receiveEmail,
    outgoingEmail,
    csTel,
    csEmail,
    faxTel,
    csHours,
    business,
  } = req.body;

  /**
   * storeName 스토어명
   * mobilePhone 대표 휴대전화
   * email 대표 이메일
   * name 이름
   * address 사업장주소
   * huntingLine 대표전화
   * mobile 휴대전화
   * receiveEmail 수신전용 이메일
   * outgoingEmail 발신전용 이메일
   * csTel 상담전화
   * csEmail 상담이메일
   * faxTel 팩스전화
   * csHours cs운영시간
   * business 통신판매업 신고
   */
  const SQL = `INSERT INTO admin VALUES(null,9,'사업자','${storeName}','${mobilePhone}','${email}','${name}','${address}','${huntingLine}','${mobile}','${receiveEmail}','${outgoingEmail}','${business}','${csTel}','${csEmail}','${faxTel}','${csHours}')`;

  yjdb.query(SQL, (err, row, fild) => {
    if (err) throw err;
    console.log(row);
  });
});

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

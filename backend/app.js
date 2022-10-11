const express = require('express');
const app = express();
const Main = require('./Server/Router/Main/index');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const db = require('./DB/index');

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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', Main);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/upload', upload.single('img'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.dir(req.header('Content-Type'));
  // console.log(req.files);

  res.send('ok');
});

app.post('/storeOpen', (req, res) => {
  console.log(req.body);
  console.log('ggg');
  
  db.query(``, (err, row, filed) => {
    if (err) throw err;

  
  });
  res.send('ㅎㅎ');
});

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

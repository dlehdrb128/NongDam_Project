const express = require("express");
const app = express();
const Main = require('./Server/Router/Main/index');
const Market = require('./Server/Router/Market/index');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const Product = require("./Server/Router/Product/index");
const uploadTest = require("./Server/Router/uploadTest");
const orders = require("./Server/Router/Orders/index");
const cart = require("./Server/Router/Cart/index");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const login = require("./Server/Router/Login/index");

const PORT = process.env.PORT || 8080;

try {
  fs.readdirSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
  console.log("uploads 파일이 없어서 생성합니다!");
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
//   limits: { fileSize: 5 * 1024 * 1024 },s
// });

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});


app.use(
  cors({
    origin: "http://localhost:3000", // 출처 허용 옵션
    credentials: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  })
);
app.use('/', Main);
app.use('/market', Market);
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser("keyboard cat"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false, // 자바스크립트를 통해 세션 쿠키를 사용할 수있는 지여부
      Secure: true,
    },
  })
);

app.use("/", Main);
app.use("/product", Product);
app.use("/login", login);
app.use("/upload", uploadTest);
app.use("/orders", orders);
app.use("/cart", cart);

app.post("/upload", upload.single("img"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.dir(req.header("Content-Type"));
  // console.log(req.files);

  res.send("ok");
});

app.get("/", (req, res) => {
  res.send(decode);
});

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

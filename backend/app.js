const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const db = require("./db/index");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const Main = require("./Server/Router/Main/index");
const Order = require("./Server/Router/SangHo/order");
const login = require("./Server/Router/SangHo/login");
const { MemoryStore } = require("express-session");

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
//   limits: { fileSize: 5 * 1024 * 1024 },
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
    origin: "*",
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("keyboard cat"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true, // 자바스크립트를 통해 세션 쿠키를 사용할 수
      Secure: true,
    },
    store: new MemoryStore(),
  })
);

app.use("/", Main);
app.use("/order", Order);
app.use("/login", login);

app.post("/upload", upload.single("img"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.dir(req.header("Content-Type"));
  // console.log(req.files);

  res.send("ok");
});

app.get("/test", (req, res) => {
  res.send("에러처리");
});

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

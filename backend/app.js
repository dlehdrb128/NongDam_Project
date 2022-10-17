const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const db = require("./db/index");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fileStore = require("session-file-store")(session);

const Main = require("./Server/Router/Main/index");
const Order = require("./Server/Router/SangHo/order");
const login = require("./Server/Router/SangHo/login");

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

let corsOptions = {
  origin: "http://localhost:3000",
  credential: true,
};

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
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
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // 자바스크립트를 통해 세션 쿠키를 사용할 수
      Secure: true,
    },
  })
);
// app.options("*", (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header("Access-Control-Allow-Headers", "content-type");
//   next();
// });

// app.use("/", Main);
app.use("/order", Order);
app.use("/login", login);

app.get("/", (req, res) => {
  console.log(req.session);
  if (!req.session.num) {
    req.session.num = 1;
  } else {
    req.session.num += 1;
  }
  res.send(`Views : ${req.session.num}`);
});

app.get("/out", (req, res) => {
  req.session.destroy();
  // console.log("logout success");

  res.send("ok");
});

app.post("/upload", upload.single("img"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.dir(req.header("Content-Type"));
  // console.log(req.files);

  res.send("ok");
});

app.get("/test", (req, res) => {
  console.log(req.session);

  if (!req.session.userId) {
    res.send("로그인하시오!");
  } else {
    res.send("okokok");
  }
});

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

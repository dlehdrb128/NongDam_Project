const express = require("express");
const app = express();
const Main = require("./Server/Router/Main/index");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");

const PORT = process.env.PORT || 8080;

try {
  fs.readdirSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
  console.log("uploads 파일이 없어서 생성합니다!");
}

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

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", Main);

app.post("/upload", upload.single("img"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  console.dir(req.header("Content-Type"));
  // console.log(req.files);

  res.send("ok");
});

app.get("/test", (req, res) => {
  console.log(__dirname + "/uploads/1664249585032.png");

  let decode = Buffer.from(
    __dirname + "/uploads/1664249585032.png",
    "base64",
    "UTF-8"
  ); //

  console.log(decode);

  res.send(decode);
});

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");
const multer = require("multer");

const upload = multer({
  // storage 어디에 저장할건지 , diskStorage 하드 디스크에 저장하겠다.

  storage: multer.diskStorage({
    // 어디 파일에 저장할것인지
    // cb는 함수이고 (에러, 파일이름) 에러가 없으나 null

    destination: function (req, file, cb) {
      cb(null, "uploads");
    },

    // 파일 이름 무엇으로 할건지
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

router.post("/test", upload.single("img"), (req, res) => {
  console.log(req.file); // req.file에 요청한 파일 정보가 있음
  console.log(req.body);

  // 저장 된 파일 경로 저장하는 로직짜기
  const sql = "insert into....";
  connection.query(sql, (err, row, filed) => {
    if (err) console.error(err);

    //
  });

  res.send("ok");
});

module.exports = router;

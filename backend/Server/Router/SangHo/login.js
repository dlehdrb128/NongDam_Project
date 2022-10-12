const express = require("express");
const router = express.Router();

router.get("/", () => {});

router.post("/", (req, res) => {
  console.log("aa");
  // const { email, password } = req.body;
  console.log(req.body);

  if (req.session.num === undefined)
    // 세션이 없다면
    req.session.num = 1; // 세션 등록
  else req.session.num += 1;

  res.send(`${req.session.num}번 접속`);

  res.status(201).send("ok");
});

module.exports = router;

const express = require("express");
const db = require("../../../db/db");
const router = express.Router();

router.get("/", (req, res) => {
  db.query(
    "select * from product; select * from market;",
    (error, row, field) => {
      if (error) throw error;
      res.send(row);
    }
  );
  console.log("db 연동완료");
});

module.exports = router;

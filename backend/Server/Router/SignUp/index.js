const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

router.get("/", (req, res) => {
  connection.query("select * from user", (err, row, field) => {
    res.json(row);
  });
});

module.exports = router;

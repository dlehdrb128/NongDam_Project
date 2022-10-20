const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

const userData = router.get("/", (req, res) => {
  connection.query("select * from user", (err, row, field) => {
    res.json(row);
  });

  router.post("/signUp", (req, res) => {
    let user_id = req.body.id;
    let user_password = req.body.password;
    let user_name = req.body.name;
    let user_phone = req.body.phone;
    let user_email = req.body.email;
    userData.push({
      user_id,
      user_password,
      user_name,
      user_phone,
      user_email,
    });
  });
});

module.exports = router;

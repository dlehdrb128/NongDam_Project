const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

router.get("/:id", (req, res) => {
  console.log(req.params);
});

module.exports = router;

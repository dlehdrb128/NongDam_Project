const express = require("express");
const connection = require("../../../db/db");
const router = express.Router();

router.get("/:id", (req, res) => {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM product; SELECT * FROM market where market_key =${id} `,
    (error, row, field) => {
      if (error) throw error;
      res.json(row);
    }
  );
});

module.exports = router;

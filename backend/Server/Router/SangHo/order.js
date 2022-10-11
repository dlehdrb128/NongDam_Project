const express = require('express');
const router = express.Router();
const db = require('../../../db/index');

router.get('/', (req, res) => {
  const SQL = `SELECT * FROM orders`;
  db.query(SQL, (error, row, fields) => {
    if (error) console.error('order err');

    res.send(row);
  });
});

module.exports = router;

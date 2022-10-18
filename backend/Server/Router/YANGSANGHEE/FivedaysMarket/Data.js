const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/', (req, res) => {
  db.Connection.query('select * from productdata;select*from marketdata;', (error, row, field) => {
    if (error) throw error;
    res.send(row);
  });
  console.log('db 연동완료');
});

module.exports = router;

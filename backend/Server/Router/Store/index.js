const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');

router.get('/:id', (req, res) => {
  let id = req.params.id;
  connection.query(`select * from product left outer join admin_store on product.user_key = admin_store.user_key left outer join review on product.product_key = review.product_key where admin_store.store_key = ${id};`, (err, row, field) => {
    res.send(row);
  })
})

module.exports = router
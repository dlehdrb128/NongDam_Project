const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');

router.get('/detail/:id/:sort', (req, res) => {
  let id = req.params.id;
  let sort = req.params.sort;

  switch (sort) {
    case 'highPrice': connection.query(`select * from product inner join admin_store on product.user_key = admin_store.user_key where admin_store.store_key = ${id} ORDER BY product.product_price DESC;`, (err, row, field) => {
      res.send(row);
    })
      break;

    case 'lowPrice': connection.query(`select * from product inner join admin_store on product.user_key = admin_store.user_key where admin_store.store_key = ${id} ORDER BY product.product_price ASC;`, (err, row, field) => {
      res.send(row);
    })
      break;

    case 'new': connection.query(`select * from product inner join admin_store on product.user_key = admin_store.user_key where admin_store.store_key = ${id} ORDER BY product.product_post_date DESC;`, (err, row, field) => {
      res.send(row);
    })
      break;

    default: connection.query(`select * from product inner join admin_store on product.user_key = admin_store.user_key where admin_store.store_key = ${id};`, (err, row, field) => {
      res.send(row);
    })
      break;


  }

  // connection.query(`select * from product inner join admin_store on product.user_key = admin_store.user_key where admin_store.store_key = ${id};`, (err, row, field) => {
  //   res.send(row);
  // })
})

router.get('/review/:id/', (req, res) => {
  const id = req.params.id


  connection.query(`select count(review_key) as count, avg(review_value) as avg from review where product_key = ${id}`, (err, row, field) => {
    res.json(row);
  })
})

module.exports = router
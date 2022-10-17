const express = require('express');
const router = express.Router();
const connection = require('../../../db/db');
const app = express();
const mysql = require('mysql');

const connetion = mysql.createConnection({
  host: 'localhost',
  post: 8080,
  user: 'root',
  password: '1234',
  database: 'nongdam',
});

connetion.connect((err) => {
  if (err) throw err;
  console.log('데이터 베이스 접속');
});

module.exports = connection;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('하이');
});

module.exports = router;

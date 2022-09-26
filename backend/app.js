const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

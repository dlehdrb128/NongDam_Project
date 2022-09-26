const express = require("express");
const app = express();
const Main = require("./Router/Main/index");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use("/", Main);

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER START ${PORT} `);
});

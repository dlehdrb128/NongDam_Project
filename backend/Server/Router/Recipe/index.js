const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

const recipeData = router.get("/", (req, res) => {
  connection.query("select * from recipe", (err, row, field) => {
    res.json(row);
  });
});
router.post("/recipe", (req, res) => {
  let recipe_title = req.body.title;
  let recipe_guide = req.body.guide;
  let recipe_ingredient = req.body.ingredient;
  let recipe_tip = req.body.tip;
  recipeData.push({
    recipe_title,
    recipe_guide,
    recipe_ingredient,
    recipe_tip,
  });
});
module.exports = router;

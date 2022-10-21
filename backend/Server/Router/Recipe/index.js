const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");

router.get("/post/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `select recipe.*,recipe_image.* from recipe inner join recipe_image where recipe.recipe_key = ${id} AND recipe_image.recipe_key = ${id}`,
    (err, row, field) => {
      res.json(row);
    }
  );
});

// router.get("/", (req, res) => {
//   connection.query(`select * from recipe_image`, (err, row, field) => {
//     res.json(row);
//   });
// });

router.get("/", (req, res) => {
  connection.query(
    `select * from recipe inner join recipe_image where recipe.recipe_key = recipe_image.recipe_key; select * from recipe inner join recipe_image inner join user where recipe.recipe_key = recipe_image.recipe_key AND recipe.user_key = user.user_key ORDER BY recipe_views DESC limit 1;`,
    (err, row, field) => {
      res.json(row);
    }
  );
});

router.post("/", (req, res) => {
  console.log(req.body);
  let recipe_title = req.body.title;
  let recipe_guide = req.body.guide;
  let recipe_ingredient = req.body.ingredient;
  let recipe_tip = req.body.tip;
  connection.query(
    `insert into recipe values (null, 3, "일반","${recipe_title}", "${recipe_guide}", "${recipe_ingredient}", "${recipe_tip}", now(), 0, 0)`,
    (err, row, field) => {
      if (err) console.error(err);
      res.json(row);
    }
  );
});

router.post("/recipeCreateReview/upload", (req, res) => {});
module.exports = router;

const express = require("express");
const router = express.Router();
const connection = require("../../../db/db");
const multer = require("multer");
const path = require("path");
// 멀터 세팅
const uploadImg = multer({
  storage: multer.diskStorage({
    destination: (req, file, cd) => {
      console.log(req);
      cd(null, "uploads/recipe");
    },
    filename: (req, file, cd) => {
      console.log(file);
      cd(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});
// 레시피 이미지 업로드
router.post("/newRecipeImage", uploadImg.single("img"), (req, res) => {
  res.json({ imgPath: req.file.filename });
});
router.get(`/recipe/data/:user_key`, (req, res) => {
  console.log("요청");
  let key = req.params.user_key;
  connection.query(
    `select * from recipe where user_key = ${key}`,
    (err, row, field) => {
      res.json(row);
    }
  );
});

router.get("/post/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `select recipe.*,recipe_image.* from recipe inner join recipe_image where recipe.recipe_key = ${id} AND recipe_image.recipe_key = ${id}`,
    (err, row, field) => {
      res.json(row);
    }
  );
});

let query =
  "select * from recipe inner join recipe_image inner join user where recipe.recipe_key = recipe_image.recipe_key AND recipe.user_key = user.user_key ORDER BY recipe_views DESC limit 1";

let test = (type) => {
  return `select * from recipe inner join recipe_image where recipe.recipe_key = recipe_image.recipe_key ORDER BY ${type} DESC;`;
};

// router.get("/", (req, res) => {
//   connection.query(`select * from recipe_image`, (err, row, field) => {
//     res.json(row);
//   });
// });

router.get("/", (req, res) => {
  connection.query(
    `select * from recipe inner join recipe_image where recipe.recipe_key = recipe_image.recipe_key; ${query} `,
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

router.post("/recipeCreateReview/upload", (req, res) => {
  let user_key = req.body.user_key;
  let user_auth = req.body.user_auth;
  let recipe_title = req.body.recipe_title;
  let recipe_guide = req.body.recipe_guide;
  let recipe_ingredient = req.body.recipe_ingredient;
  let recipe_tip = req.body.recipe_tip;
  let recipe_created_date = req.body.recipe_created_date;
  let recipe_views = req.body.recipe_views;
  let recipe_value = req.body.recipe_value;
  let recipe_image_path = req.body.recipe_image_path;
  let recipe_image_path_2 = req.body.recipe_image_path_2;
  let recipe_image_path_3 = req.body.recipe_image_path_3;
  let recipe_image_path_4 = req.body.recipe_image_path_4;
  let recipe_image_path_5 = req.body.recipe_image_path_5;

  connection.query(
    "select recipe_key from recipe order by recipe_key desc limit 1",
    (err, row, field) => {
      connection.query(
        `INSERT INTO recipe VALUES (null,${user_key},'${user_auth}','${recipe_title}','${recipe_guide}','${recipe_ingredient}','${recipe_tip}','${recipe_created_date}',${recipe_views},${recipe_value}); INSERT INTO recipe_image VALUES(null,${
          row[0].recipe_key + 1
        },${user_key},'${recipe_image_path}','${recipe_image_path_2}','${recipe_image_path_3}','${recipe_image_path_4}','${recipe_image_path_5}')`,
        (err, row, field) => {
          if (err) throw err;
          res.json({ status: 201 });
        }
      );
    }
  );
});

router.get("/sort/:type", (req, res) => {
  const type = req.params.type;

  switch (type) {
    case "new":
      connection.query(
        `${test("recipe.recipe_created_date")} ${query}`,
        (err, row, field) => {
          if (err) throw err;
          res.json(row);
        }
      );
      break;
    case "view":
      connection.query(
        `${test("recipe.recipe_views")} ${query}`,
        (err, row, field) => {
          if (err) throw err;
          res.json(row);
        }
      );
      break;
    default:
      connection.query(
        `select * from recipe inner join recipe_image where recipe.recipe_key = recipe_image.recipe_key; ${query}`,
        (err, row, field) => {
          if (err) throw err;
          res.json(row);
        }
      );
      break;
  }
});

router.get("/delete/:recipe_Key", (req, res) => {
  connection.query(
    `delete from recipe where recipe_key = ${req.params.recipe_Key}`,
    (err, row, field) => {
      if (err) throw err;
      res.json({ status: 201 });
    }
  );
});
module.exports = router;

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

const guensoo = {
  user: {
    key: req.body.user_key,
    auth: req.body.user_auth,
  },
  recipe: {
    title: req.body.recipe_title,
    guide: req.body.recipe_guide,
  },
};

for (let key in guensoo.user) {
  matdd.push(guensoo.user[key]);
  console.log(guensoo.user[key]);
}

console.log(guensoo.user.key);

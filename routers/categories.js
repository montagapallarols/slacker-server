const { Router } = require("express");
const Category = require("../models").category;
const router = new Router();


router.get("/", async (req, res, next) => {
    try {
      const allCategories = await Category.findAll();
      res.json(allCategories);
    } catch (e) {
      next(e);
    }
  });


// const categories = await axios.get('/categories');
// categories.map((category) => <button onClick={()=>{setCategoryFilter(category.id)}}>Show all {category.name}</button>)


module.exports = router;
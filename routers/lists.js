const { Router } = require("express");
const List = require("../models").list;
const router = new Router();


router.get("/", async (req, res, next) => {
    try {
      const allLists = await List.findAll();
      res.json(allLists);
    } catch (e) {
      next(e);
    }
  });


module.exports = router;
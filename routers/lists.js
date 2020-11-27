const { Router } = require("express");
const List = require("../models").list;
const ListItem = require("../models").listItem;
const Item = require("../models").item;
const Profile = require("../models").profile;
const router = new Router();


router.get("/", async (req, res, next) => {
    try {
      const allLists = await List.findAll();
      res.json(allLists);
    } catch (e) {
      next(e);
    }
  });

  router.get("/listItems", async (req, res, next) => {
    try {
      const allListItems = await ListItem.findAll({include: [List, Item]});
      res.json(allListItems);
    } catch (e) {
      next(e);
    }
  });

  router.get("/listItems/favourites/:categoryId", async (req, res, next) => {
    try {
      const allFavouriteFilms = await ListItem.findAll({
        include: [{
          model: List,
          where: {
            type: 'Favourites'
          }
        }, {
          model: Item,
          where: {
            categoryId: req.params.categoryId
          }
        }]
      });
      res.json(allFavouriteFilms);
    } catch (e) {
      next(e);
    }
  });



module.exports = router;
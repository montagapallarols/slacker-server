const { Router } = require("express");
const List = require("../models").list;
const ListItem = require("../models").listItem;
const Item = require("../models").item;
const User = require("../models").user;
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
      const allFavouritesByCategory = await ListItem.findAll({
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
      res.json(allFavouritesByCategory);
    } catch (e) {
      next(e);
    }
  });

  router.get("/listItems/favourites", async (req, res, next) => {
    try {
      const userFavourites = await ListItem.findAll({
        include: [{
          model: List,
          where: {
            type: 'Favourites'
          }
        }, {
          model: Item
        }
      ]
      });
      res.json(userFavourites);
    } catch (e) {
      next(e);
    }
  });

  router.post("/library/listItems", async (req, res, next) => {
    const { name, year, genre, director, plot, poster, type, apiId, apiName, categoryId, listId } = req.body;
   
    if (!name || !year || !genre || !director || !plot || !poster || !type || !apiId || !apiName || !categoryId || !listId) {
      return res.status(400).send("There is some missing info!");
    }
    try {
      
      const list = await List.findByPk(listId)
      
      const existingItem = await Item.findOne({ where: { apiId: apiId } })
      if (!existingItem) {
        const newItem = await Item.create({
          name: name,
          year: year,
          genre: genre,
          director: director,
          plot: plot,
          poster: poster,
          type: type,
          apiId: apiId,
          apiName: apiName,
          categoryId: categoryId
        })
        const newListItem = await ListItem.create({
          listId: listId,
          itemId: newItem.id
        })
        const response = {...newListItem.dataValues, list, item: newItem}
        res.json(response)
      } else {
        const newItemToList = await ListItem.create({
          listId: listId,
          itemId: existingItem.id
        })
        const response = {...newItemToList.dataValues, list, item: existingItem}
        res.json(response)
      }
     
    } catch(e) {
      console.log("What is the ERROR?", e)
      next(e);
    }
  }) 

  router.delete("/listItems/:itemApiId", async (req, res, next) => {
    try {
      const itemApiId = req.params.itemApiId
      const foundListItem = await ListItem.findOne({
        include: [{
          model: Item,
          where: {
            apiId: itemApiId
          }
        }]});
        console.log("LIST ITEMS", foundListItem)
        const thisListItem = foundListItem.dataValues
        console.log("THIS list item", thisListItem)
      if (!foundListItem) {
        res.status(404).send("List item not found!")
      } else {
        await ListItem.destroy({
          where: { id: thisListItem.id }
         });
        res.json(thisListItem);
      }
    } catch (e) {
      next(e);
    }
  });


module.exports = router;
const { Router } = require("express");
const List = require("../models").list;
const ListItem = require("../models").listItem;
const Item = require("../models").item;
const User = require("../models").user;
const Profile = require("../models").profile;
const Review = require("../models").review;
const router = new Router();

router.get("/all", async (req, res, next) => {
    try {
      const allReviews = await Review.findAll({include: [Profile, Item]});
      res.json(allReviews);
    } catch (e) {
      next(e);
    }
  });

  router.get("/:profileId", async (req, res, next) => {
    try {
        const profileId = parseInt(req.params.profileId)
      const profileReviews = await Review.findAll({include: [Profile, Item], where: { profileId: profileId }});
      res.json(profileReviews);
    } catch (e) {
      next(e);
    }
  });

  router.post("/:apiId/:profileId", async (req, res, next) => {
    const { name, content, rating } = req.body;
    const apiId = req.params.apiId
    const profileId = parseInt(req.params.profileId)
   
    if (!name || !content || !rating ) {
      return res.status(400).send("Please provide a name, content and rating for your review.");
    }
    try {
      
      const foundItem = await Item.findOne({ where: { apiId: apiId } })
      
        const newReview = await Review.create({
          name: name,
          content: content,
          rating: rating,
          profileId: profileId,
          itemId: foundItem.id
        })
        
    res.json(newReview)
     
    } catch(e) {
      console.log("What is the ERROR?", e)
      next(e);
    }
  }) 



module.exports = router;
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



module.exports = router;
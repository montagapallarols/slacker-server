const { Router } = require("express");
const Profile = require("../models").profile;
const List = require("../models").list;
const User = require("../models").user;
const router = new Router();


router.get("/", async (req, res, next) => {
    try {
      const allProfiles = await Profile.findAll({include: [User, List]});
      res.json(allProfiles);
    } catch (e) {
      next(e);
    }
  });



module.exports = router;
const { Router } = require("express");
const Profile = require("../models").profile;
const List = require("../models").list;
const ListItem = require("../models").listItem;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();


router.get("/", async (req, res, next) => {
    try {
      const allProfiles = await Profile.findAll({include: [User, List]});
      res.json(allProfiles);
    } catch (e) {
      next(e);
    }
  });

router.patch("/:profileId", authMiddleware, async (req, res, next) => {
  try {
    const profileId = parseInt(req.params.profileId)
    const { imageUrl } = req.body

    if (!profileId || !imageUrl) {
      return res.status(401).json({ message: "Profile not found or imageUrl is missing" });
    }

    const profileToUpdate = await Profile.findByPk(profileId)
    console.log("PROFILE TO UPDATE", profileToUpdate)
    if (!profileToUpdate) {
      return res.status(404).json({ message: "No profile found." });
    }

    const updatedProfile = await profileToUpdate.update({
      imageUrl
    });

    res.json(updatedProfile);
  } catch (e) {
    next(e);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
})



module.exports = router;

// https://cdn.vox-cdn.com/thumbor/LW3mhemL4J6bXob-9a47xRjDyic=/0x0:700x566/1820x1213/filters:focal(294x227:406x339):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63199158/grand-budapest-review.0.0.1500867064.0.jpg	
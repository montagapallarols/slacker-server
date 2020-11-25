// const User = require("../models").user;
// const Space = require("../models").space;
// const Story = require("../models").story;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");


  if (!auth || !auth[0] === "Bearer" || !auth[1]) {
    res.status(401).send({
      message:
        "This endpoint requires an Authorization header with a valid token"
    });
  }

  try {
    const data = toData(auth[1]);
    const user = await User.findByPk(data.userId, {include: [{model: Space, include: [Story]}]});
    if (!user) {
      return res.status(404).send({ message: "User does not exist" });
    }
    // console.log("USER WITH SPACE", user)

    // const userSpace = await Space.findOne({
    //   where: { userId: user.dataValues.id},
    //   include: [Story],
    // })
    // console.log("Middleware user Space", userSpace.dataValues)
    

    // add user object to request
    req.user = user
  
    // res.send({space: userSpace.dataValues.space, stories: [userSpace.dataValues.stories]})
    // next handler
    return next();
  } catch (error) {
    console.log("ERROR IN AUTH MIDDLEWARE", error);

    switch (error.name) {
      case "TokenExpiredError":
        return res
          .status(401)
          .send({ error: error.name, message: error.message });

      case "JsonWebTokenError":
        return res
          .status(400)
          .send({ error: error.name, message: error.message });

      default:
        return res.status(400).send({
          message: "Something went wrong, sorry"
        });
    }
  }
}

module.exports = auth;

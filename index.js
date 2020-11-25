const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
// const authRouter = require("./routers/auth");
// const spaceRouter = require("./routers/spaces");
// const storyRouter = require("./routers/stories");
// const authMiddleWare = require("./auth/middleware");

const app = express();

app.use(loggerMiddleWare("dev"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

// GET endpoint for testing purposes
app.get("/", (req, res) => {
  res.send("Hi from express");
});

// POST endpoint for testing purposes
app.post("/echo", (req, res) => {
  res.json({
    youPosted: {
      ...req.body,
    },
  });
});

// // POST endpoint which requires a token for testing purposes
// app.post("/authorized_post_request", authMiddleWare, (req, res) => {
//   // accessing user that was added to req by the auth middleware
//   const user = req.user;
//   // don't send back the password hash
//   delete user.dataValues["password"];

//   res.json({
//     youPosted: {
//       ...req.body,
//     },
//     userFoundWithToken: {
//       ...user.dataValues,
//     },
//   });
// });

// app.use("/", authRouter);
// app.use("/spaces", spaceRouter);
// app.use("/stories", storyRouter);



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

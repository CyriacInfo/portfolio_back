const mainRouter = require("express").Router();
const articlesRouter = require("./articles.routes");
const imagesRouter = require("./images.routes");
const usersRouter = require("./users.routes");
const authRouter = require("./auth.routes");

mainRouter.use("/articles", articlesRouter);
mainRouter.use("/images", imagesRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/auth", authRouter);

module.exports = mainRouter;

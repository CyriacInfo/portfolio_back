const mainRouter = require("express").Router();
const articlesRouter = require("./articles.routes");
const imagesRouter = require("./images.routes");


mainRouter.use("/articles", articlesRouter);
mainRouter.use("/images", imagesRouter);


module.exports = mainRouter;

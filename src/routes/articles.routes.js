const articlesRouter = require("express").Router();

const {
  getArticles,
  createArticle,
  verifIfIdExist,
  getOneArticles,
  modifyOneArticles,
  deleteOneArticles,
} = require("../controllers").articlesController;

const { postImageObject, postImage } =
  require("../controllers/").imageController;

const { verifyAccessToken } = require("../controllers").authController;

articlesRouter.get("/", getArticles);
articlesRouter.post(
  "/",
  verifyAccessToken,
  postImageObject,
  postImage,
  createArticle
);
articlesRouter.get("/:id", verifIfIdExist, getOneArticles);
articlesRouter.put(
  "/:id",
  verifyAccessToken,
  verifIfIdExist,
  modifyOneArticles
);
articlesRouter.delete(
  "/:id",
  verifyAccessToken,
  verifIfIdExist,
  deleteOneArticles
);

module.exports = articlesRouter;

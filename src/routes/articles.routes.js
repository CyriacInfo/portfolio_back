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

articlesRouter.get("/", getArticles);
articlesRouter.post("/", postImageObject, postImage, createArticle);
articlesRouter.get("/:id", verifIfIdExist, getOneArticles);
articlesRouter.put("/:id", verifIfIdExist, modifyOneArticles);
articlesRouter.delete("/:id", verifIfIdExist, deleteOneArticles);

module.exports = articlesRouter;

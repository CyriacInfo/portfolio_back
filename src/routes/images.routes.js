const imagesRouter = require("express").Router();

const { postImageObject, postImage, getImages } =
  require("../controllers").imageController;


  imagesRouter.get("/", getImages);
  imagesRouter.post("/", postImageObject, postImage);

module.exports = imagesRouter;

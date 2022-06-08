const imagesRouter = require("express").Router();

const { postImageObject, postImage, getImages } =
  require("../controllers").imageController;
  const { verifyAccessToken } = require("../controllers").authController;

  imagesRouter.get("/", getImages);
  imagesRouter.post("/", verifyAccessToken, postImageObject, postImage);

module.exports = imagesRouter;

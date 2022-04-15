const multer = require("multer");
const { Images } = require("../models");

/**
 * This function takes in a request and a response object.
 * It then uses the multer library to upload a file to the public folder.
 * It then returns a response object with a status of 200 and a message of "ok"
 * @param req - The request object.
 * @param res - The response object.
 */
const postImageObject = (req, res, next) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./images");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  console.log("file", req.file);
  const upload = multer({ storage }).single("file");

  upload(req, res, (err) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      req.imageName = req.file.filename;
      next();
    }
  });
};

const postImage = async (req, res, next) => {
  const { imageName } = req;
  console.log("name file", imageName);

  try {
    const [result] = await Images.postOne(imageName);
    next();
  } catch (err) {
    res.status(500).json({ errorPostImage: err.message });
  }
};

const getImages = async (req, res) => {
  try {
    const [result] = await Images.getOne();
    res.status(200).json(result[1]);
  } catch (err) {
    res.status(500).json({ errorGetImage: err.message });
  }
};

module.exports = {
  postImageObject,
  postImage,
  getImages,
};

const { Articles } = require("../models");

const getArticles = async (req, res) => {
  try {
    const results = await Articles.allArticles();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).send({ errGetArticles: err.message });
  }
};

const createArticle = async (req, res) => {
  const { title, description, technologies, paraf, urlProject } = req.body;
  const date = new Date();
  const { imageName } = req;
  try {
    const result = await Articles.createOneArticle({
      title,
      description,
      paraf,
      imgName: imageName,
      technologies,
      date,
      urlProject,
    });
    res.status(201).json("Créer");
  } catch (err) {
    res.status(400).send({ errCreateArticle: err.message });
  }
};

const verifIfIdExist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const [results] = await Articles.verifId(id);
    if (results.length > 0) {
      next();
    } else {
      res.status(404).send({ errVerifId: err.message });
    }
  } catch (err) {
    res.status(400).send({ errVerifId: err.message });
  }
};

const getOneArticles = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Articles.getMyArticles(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send({ errGetOneArticle: err.message });
  }
};

const modifyOneArticles = async (req, res) => {
  const { id } = req.params;
  const { title, description, technologies, paraf } = req.body;
  const date = new Date();
  const { imageName } = req;
  try {
    const result = await Articles.createOneArticle({
      title,
      description,
      paraf,
      imgName: imageName,
      technologies,
      date,
    });
    res.status(201).json("Créer");
  } catch (err) {
    res.status(400).send({ errCreateArticle: err.message });
  }
};

const deleteOneArticles = async (req, res) => {
  const { id } = req.params;
  try {
    await Articles.deleteArticles(id);
    res.sendStatus(201);
  } catch (err) {
    res.status(400).send({ errDeleteOneArticle: err.message });
  }
};

module.exports = {
  getArticles,
  createArticle,
  verifIfIdExist,
  getOneArticles,
  modifyOneArticles,
  deleteOneArticles,
};

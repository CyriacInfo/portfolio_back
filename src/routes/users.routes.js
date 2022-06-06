const usersRouter = require("express").Router();
const { User } = require("../models");
const { usersController } = require("../controllers");
const { verifyAccessToken } = require("../controllers/auth.controllers");

usersRouter.get("/", verifyAccessToken, async (req, res) => {
  try {
    const [results] = await User.findMany();
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
// Coucou
usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [[results]] = await User.findOneById(id);
    res.json(results);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

usersRouter.post("/", usersController.validateDataCreateUser, usersController.createOneUser, usersController.getOneUserById, (req, res) => {
  const { email, password } = req.body;
  res.status(201).json({ email, password });
});

// usersRouter.post("/", usersController.validateDataCreateUser, usersController.createOneUser, usersController.getOneUserById);

usersRouter.delete("/:id", usersController.deleteOne);

module.exports = usersRouter;

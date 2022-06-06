const authRouter = require("express").Router();
const { logout } = require("../controllers/auth.controllers");
const { login, createAccessToken } = require("../controllers").authController;
const { verifyCredentials } = require("../controllers").usersController;

// Création de la routes login
authRouter.post("/login", login, createAccessToken);
authRouter.post("/verifyCredentials", verifyCredentials);
authRouter.get("/logout", logout, verifyCredentials);

module.exports = authRouter;
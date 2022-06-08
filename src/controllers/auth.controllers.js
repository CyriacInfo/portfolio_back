require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const [result] = await User.findOneByEmail(email);
  if (result.length === 0) {
    res.status(400).send("email ou mot de passe incorrect");
  } else {
    const validPassword = await User.verifyPassword(
      password,
      result[0].password
    );
    if (validPassword) {
      delete result[0].password;
      req.user = result[0];
      next();
    } else {
      res.status(400).send("email ou mot de passe incorrect");
    }
  }
};

const createAccessToken = (req, res) => {
  const { id, email } = req.user;
  const token = jwt.sign(req.user, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });

  const results = {
    id,
    email,
    token,
  };

  res
    .status(200)
    .cookie("token", token, { httpOnly: true, maxAge: 900000 })
    .json(results);
};

const verifyAccessToken = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      }
      req.user = decoded;
      return next();
    });
  } else {
    res.status(403).send("Unauthorized");
  }
};

const logout = (req, res) => {
  res.clearCookie("verifyAccessToken");
  res.clearCookie("token");
  res.clearCookie("key");
};

module.exports = {
  login,
  createAccessToken,
  verifyAccessToken,
  logout,
};

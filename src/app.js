const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    // Les méthodes autorisé dans l'application
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    // Autorisation des cookies
    credentials: true,
    allowedHeaders:
      "Content-Type, Authorization, X-requested-With, Accept, xsrf-token",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ hello: "World" });
});

app.use("/api", mainRouter);
app.use("/images", express.static("./images"));

module.exports = app;

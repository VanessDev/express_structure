// import des packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// crée l'application express AVANT d'utiliser app
const app = express();

// utilise les middlewares
app.use(morgan("dev"));
app.use(cors()); 

// route de test
app.get("/test", (req, res) => {
  console.log("la route est ok");
  res.send("test de la route test ok");
});

// export de l'app pour que server.js puisse l'utiliser
module.exports = app;

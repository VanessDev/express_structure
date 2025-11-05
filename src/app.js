// import des packages
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
const notFound = require('./middlewares/notFound')

// crée l'application express AVANT d'utiliser app
const app = express();

//parse(transforme un objet(tableau) json en objet js (serialisation: l'inverse, transformer
// un tableau js en json)) le contenu du body de ma request(req.body)
app.use(express.json());

// log les requests http
app.use(morgan("dev"));

//autoriser les requests cross origin
app.use(cors());

//cherher toutes les routes (sous la route/monapi)
app.use('/monapi',router);

//Je recupere la request qui n'a pas trouvé de route
app.use(notFound);


// export de l'app pour que server.js puisse l'utiliser
module.exports = app;

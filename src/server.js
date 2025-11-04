// charge les variables d'environnement depuis .env
require("dotenv").config();

// importe l'application express depuis app.js
const app = require("./app");

// récupère le port
const PORT = process.env.PORT || 3000;

// vérifie que le port existe
if (!PORT) {
  console.log("PORT absent, veuillez compléter le fichier .env");
  process.exit(1);
}

// lance le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});

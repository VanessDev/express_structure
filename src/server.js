//recuperer les infos du .env pour param node
//installation du dotenv 'npm  install dotenv'

//charge les variables d'environnement de .env
require("dotenv").config();

//recupere le port
const PORT = process.env.PORT;

//verifie que le port existe
if (!PORT) {
  console.log("PORT absent veuillez completer le fichier");
  //stoppe le programme de lancement de mode
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`serveur lancé sur le port ${PORT}`);
});

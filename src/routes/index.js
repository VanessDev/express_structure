//extrait routeur de express
const { Router } = require('express');

const router = Router();

//montage des sous routes
//route produits/ monapi/ products

router.use('/products',require('./products.routes'));

//exporte le routeur
module.exports = router;
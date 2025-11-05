const { Router } = require('express');

const productsController = require('../controllers/productsController');

const router = Router();

//Définir les endpoints
router.get('/', productsController.listProducts)
router.get('/:id',productsController.getProductById);
router.post('/', productsController.createProduct);

module.exports= router;
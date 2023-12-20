// /routes/categoriasRoutes.js
const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', authMiddleware, categoriasController.crearCategoria);
router.get('/', authMiddleware, categoriasController.obtenerTodasCategorias);
router.get('/:id', authMiddleware, categoriasController.obtenerCategoriaPorID);
router.put('/:id', authMiddleware, categoriasController.actualizarCategoria);
router.delete('/:id', authMiddleware, categoriasController.eliminarCategoria);

module.exports = router;
// /routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const etiquetasController = require('../controllers/etiquetasController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, etiquetasController.crearEtiqueta);
router.get('/', authMiddleware, etiquetasController.obtenerTodasEtiquetas);
router.get('/:id', authMiddleware, etiquetasController.obtenerEtiquetaPorID);
router.put('/:id', authMiddleware, etiquetasController.actualizarEtiqueta);
router.delete('/:id', authMiddleware, etiquetasController.eliminarEtiqueta);

module.exports = router;
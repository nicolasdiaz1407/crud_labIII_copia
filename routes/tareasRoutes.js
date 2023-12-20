// /routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareasController');
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', authMiddleware, tareasController.crearTarea);
router.get('/', authMiddleware, tareasController.obtenerTodasTareas);
router.get('/:id', authMiddleware, tareasController.obtenerTareaPorID);
router.put('/:id', authMiddleware, tareasController.actualizarTarea);
router.delete('/:id', authMiddleware, tareasController.eliminarTarea);

module.exports = router;
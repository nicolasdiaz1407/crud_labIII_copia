// /routes/usuariosRoutes.js
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', usuariosController.crearUsuario);
router.post('/iniciar-sesion', usuariosController.iniciarSesion);

// Aplicamos el middleware de autenticación solo a las rutas que lo necesitan

router.get('/', authMiddleware, usuariosController.obtenerUsuarios);
router.get('/:id', authMiddleware, usuariosController.obtenerUsuarioPorID);
router.put('/:id', authMiddleware, usuariosController.actualizarUsuario);
router.delete('/:id', authMiddleware, usuariosController.eliminarUsuario);

module.exports = router;

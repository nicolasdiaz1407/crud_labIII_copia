// /middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    console.log('Acceso no autorizado. Token no proporcionado.');
    return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), secret);
    console.log('Token decodificado:', decoded);
    req.usuario = decoded.usuario;
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error);
    res.status(401).json({ error: 'Token no válido.' });
  }
};

module.exports = authMiddleware;

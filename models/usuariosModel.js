// /models/usuariosModel.js
const db = require('../config/db');

const Usuarios = {
  create: (usuario, callback) => {
    db.query('INSERT INTO usuarios SET ?', usuario, callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM usuarios', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
  },
  update: (id, usuario, callback) => {
    db.query('UPDATE usuarios SET ? WHERE id = ?', [usuario, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
  },
  
  iniciarSesion: (correo, contraseña, callback) => {
    db.query('SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?', [correo, contraseña], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result[0]);
      }
    });
  },
};

module.exports = Usuarios;

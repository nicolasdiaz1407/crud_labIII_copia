// /models/categoriasModel.js
const db = require('../config/db');

const Categorias = {
  create: (categoria, callback) => {
    db.query('INSERT INTO categorias SET ?', categoria, callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM categorias', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM categorias WHERE id = ?', [id], callback);
  },
  update: (id, categoria, callback) => {
    db.query('UPDATE categorias SET ? WHERE id = ?', [categoria, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM categorias WHERE id = ?', [id], callback);
  },
};

module.exports = Categorias;

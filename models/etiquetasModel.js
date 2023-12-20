// /models/etiquetasModel.js
const db = require('../config/db');

const Etiquetas = {
  create: (etiqueta, callback) => {
    db.query('INSERT INTO etiquetas SET ?', etiqueta, callback);
  },
  getAll: (callback) => {
    db.query('SELECT * FROM etiquetas', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM etiquetas WHERE id = ?', [id], callback);
  },
  update: (id, etiqueta, callback) => {
    db.query('UPDATE etiquetas SET ? WHERE id = ?', [etiqueta, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM etiquetas WHERE id = ?', [id], callback);
  },
};

module.exports = Etiquetas;

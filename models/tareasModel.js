// /models/tareasModel.js
const db = require('../config/db');

const Tareas = {
  create: (tarea, callback) => {
    db.query('INSERT INTO tareas SET ?', tarea, callback);
  },

  /*getAll: (callback) => {
    db.query('SELECT * FROM tareas', callback);
  },*/

  /*getAll: (callback) => {
    db.query(`
      SELECT t.*, e.nombre AS etiqueta
      FROM tareas t
      LEFT JOIN tareas_etiquetas te ON t.id = te.tarea_id
      LEFT JOIN etiquetas e ON te.etiqueta_id = e.id
    `, callback);
  },*/

  getAll: (callback) => {
    db.query(`
      SELECT t.id, t.titulo, t.descripcion, t.fecha_creacion, t.fecha_limite, t.estado,
             u.nombre AS nombre_usuario,
             c.nombre AS nombre_categoria,
             e.nombre AS nombre_etiqueta
      FROM tareas t
      LEFT JOIN usuarios u ON t.usuario_id = u.id
      LEFT JOIN categorias c ON t.categoria_id = c.id
      LEFT JOIN tareas_etiquetas te ON t.id = te.tarea_id
      LEFT JOIN etiquetas e ON te.etiqueta_id = e.id
    `, callback);
  },

  /*getById: (id, callback) => {
    db.query('SELECT * FROM tareas WHERE id = ?', [id], callback);
  },*/

  /*getById: (id, callback) => {
    db.query(`
      SELECT t.*, e.nombre AS etiqueta
      FROM tareas t
      LEFT JOIN tareas_etiquetas te ON t.id = te.tarea_id
      LEFT JOIN etiquetas e ON te.etiqueta_id = e.id
      WHERE t.id = ?
    `, [id], callback);
  },*/
  getById: (id, callback) => {
    // Modificar la consulta para incluir información adicional
    db.query(`
      SELECT t.id, t.titulo, t.descripcion, t.fecha_creacion, t.fecha_limite, t.completada,
             u.nombre AS nombre_usuario,
             c.nombre AS nombre_categoria,
             e.nombre AS nombre_etiqueta
      FROM tareas t
      LEFT JOIN usuarios u ON t.usuario_id = u.id
      LEFT JOIN categorias c ON t.categoria_id = c.id
      LEFT JOIN tareas_etiquetas te ON t.id = te.tarea_id
      LEFT JOIN etiquetas e ON te.etiqueta_id = e.id
      WHERE t.id = ?
    `, callback);
  },

  update: (id, tarea, callback) => {
    db.query('UPDATE tareas SET ? WHERE id = ?', [tarea, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM tareas WHERE id = ?', [id], callback);
  },
};

module.exports = Tareas;

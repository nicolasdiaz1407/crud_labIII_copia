// /controllers/tareasController.js
const Tareas = require("../models/tareasModel");
const Etiquetas = require('../models/etiquetasModel');

const tareasController = {
  crearTarea: (req, res) => {
    const nuevaTarea = req.body;
    Tareas.create(nuevaTarea, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al crear la tarea" });
      } else {
        const tareaCreada = {
          id: result.insertId,
          mensaje: "Tarea creada con éxito"
        };
        res.status(201).json(tareaCreada);
      }
    });
  },

  obtenerTodasTareas: (req, res) => {
    Tareas.getAll((err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener las tareas" });
      } else {
        res.status(200).json(result);
      }
    });
  },

  obtenerTareaPorID: (req, res) => {
    const tareaID = req.params.id;
    Tareas.getById(tareaID, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener la tarea" });
      } else if (result.length === 0) {
        res.status(404).json({ error: "Tarea no encontrada" });
      } else {
        res.status(200).json(result[0]);
      }
    });
  },

  actualizarTarea: (req, res) => {
    const tareaID = req.params.id;
    const tareaActualizada = req.body;
    Tareas.update(tareaID, tareaActualizada, (err) => {
      if (err) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
      } else {
        res.status(200).json({ mensaje: "Tarea actualizada con éxito" });
      }
    });
  },

  eliminarTarea: (req, res) => {
    const tareaID = req.params.id;
    Tareas.delete(tareaID, (err) => {
      if (err) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
      } else {
        res.status(200).json({ mensaje: "Tarea eliminada con éxito" });
      }
    });
  }
};

module.exports = tareasController;

// /controllers/etiquetasController.js
const Etiquetas = require("../models/etiquetasModel");

const etiquetasController = {
    
  crearEtiqueta: (req, res) => {
    const nuevaEtiqueta = req.body;
    Etiquetas.create(nuevaEtiqueta, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al crear la etiqueta" });
      } else {
        const etiquetaCreada = {
          id: result.insertId,
          mensaje: "Etiqueta creada con éxito"
        };
        res.status(201).json(etiquetaCreada);
      }
    });
  },

  obtenerTodasEtiquetas: (req, res) => {
    Etiquetas.getAll((err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener las etiquetas" });
      } else {
        res.status(200).json(result);
      }
    });
  },

  obtenerEtiquetaPorID: (req, res) => {
    const etiquetaID = req.params.id;
    Etiquetas.getById(etiquetaID, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener la etiqueta" });
      } else if (result.length === 0) {
        res.status(404).json({ error: "Etiqueta no encontrada" });
      } else {
        res.status(200).json(result[0]);
      }
    });
  },

  actualizarEtiqueta: (req, res) => {
    const etiquetaID = req.params.id;
    const etiquetaActualizada = req.body;
    Etiquetas.update(etiquetaID, etiquetaActualizada, (err) => {
      if (err) {
        res.status(500).json({ error: "Error al actualizar la etiqueta" });
      } else {
        res.status(200).json({ mensaje: "Etiqueta actualizada con éxito" });
      }
    });
  },

  eliminarEtiqueta: (req, res) => {
    const etiquetaID = req.params.id;
    Etiquetas.delete(etiquetaID, (err) => {
      if (err) {
        res.status(500).json({ error: "Error al eliminar la etiqueta" });
      } else {
        res.status(200).json({ mensaje: "Etiqueta eliminada con éxito" });
      }
    });
  }
};

module.exports = etiquetasController;

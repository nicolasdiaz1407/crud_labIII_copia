// /controllers/categoriasController.js
const Categorias = require("../models/categoriasModel");

const categoriasController = {

  crearCategoria: (req, res) => {
    const nuevaCategoria = req.body;
    Categorias.create(nuevaCategoria, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al crear la categoría" });
      } else {
        const categoriaCreada = {
          id: result.insertId,
          mensaje: "Categoría creada con éxito"
        };
        res.status(201).json(categoriaCreada);
      }
    });
  },

  obtenerTodasCategorias: (req, res) => {
    Categorias.getAll((err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener las categorías" });
      } else {
        res.status(200).json(result);
      }
    });
  },

  obtenerCategoriaPorID: (req, res) => {
    const categoriaID = req.params.id;
    Categorias.getById(categoriaID, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener la categoría' });
      } else if (result.length === 0) {
        res.status(404).json({ error: 'Categoría no encontrada' });
      } else {
        res.status(200).json(result[0]);
      }
    });
  },

  actualizarCategoria: (req, res) => {
    const categoriaID = req.params.id;
    const categoriaActualizada = req.body;
    Categorias.update(categoriaID, categoriaActualizada, (err) => {
      if (err) {
        res.status(500).json({ error: 'Error al actualizar la categoría' });
      } else {
        res.status(200).json({ mensaje: 'Categoría actualizada con éxito' });
      }
    });
  },

  eliminarCategoria: (req, res) => {
    const categoriaID = req.params.id;
    Categorias.delete(categoriaID, (err) => {
      if (err) {
        res.status(500).json({ error: 'Error al eliminar la categoría' });
      } else {
        res.status(200).json({ mensaje: 'Categoría eliminada con éxito' });
      }
    });
  },
};

module.exports = categoriasController;

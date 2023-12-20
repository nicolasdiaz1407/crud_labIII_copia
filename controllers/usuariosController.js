// /controllers/usuariosController.js
const Usuarios = require("../models/usuariosModel");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

const usuariosController = {
  crearUsuario: (req, res) => {
    const nuevoUsuario = req.body;
    Usuarios.create(nuevoUsuario, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al crear el usuario" });
      } else {
        const usuarioCreado = {
          id: result.insertId,
          mensaje: "Usuario creado con éxito"
        };
        res.status(201).json(usuarioCreado);
      }
    });
  },

  iniciarSesion: (req, res) => {
    const { correo, contraseña } = req.body;
    Usuarios.iniciarSesion(correo, contraseña, (err, usuario) => {
      if (err) {
        return res.status(500).json({ error: "Error al iniciar sesión" });
      }

      if (!usuario) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }

      const token = jwt.sign({ usuario: usuario.id }, secret, {
        expiresIn: "1h"
      });
      console.log("Token generado:", token); // Agrega esta línea
      res.status(200).json({ token });
    });
  },

  obtenerUsuarios: (req, res) => {
    Usuarios.getAll((err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
      } else {
        res.status(200).json(result);
      }
    });
  },

  obtenerUsuarioPorID: (req, res) => {
    const usuarioID = req.params.id;
    Usuarios.getById(usuarioID, (err, result) => {
      if (err) {
        res.status(500).json({ error: "Error al obtener el usuario" });
      } else if (result.length === 0) {
        res.status(404).json({ error: "Usuario no encontrado" });
      } else {
        res.status(200).json(result[0]);
      }
    });
  },

  actualizarUsuario: (req, res) => {
    const usuarioID = req.params.id;
    const usuarioActualizado = req.body;
  
    // Verificar si el usuario con el ID existe antes de intentar actualizar
    Usuarios.getById(usuarioID, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al verificar el usuario' });
      }
  
      if (result.length === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      // El usuario existe, proceder con la actualización
      Usuarios.update(usuarioID, usuarioActualizado, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error al actualizar el usuario' });
        } else {
          return res.status(200).json({ mensaje: 'Usuario actualizado con éxito' });
        }
      });
    });
  },
  
  

  eliminarUsuario: (req, res) => {
    const usuarioID = req.params.id;
    Usuarios.delete(usuarioID, (err) => {
      if (err) {
        res.status(500).json({ error: "Error al eliminar el usuario" });
      } else {
        res.status(200).json({ mensaje: "Usuario eliminado con éxito" });
      }
    });
  }
};

module.exports = usuariosController;

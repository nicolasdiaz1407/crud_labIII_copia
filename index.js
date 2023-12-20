// index.js
const express = require('express');
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuariosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const etiquetasRoutes = require('./routes/etiquetasRoutes');
const tareasRoutes = require("./routes/tareasRoutes")
const app = express();

// Middleware para procesar JSON
app.use(bodyParser.json());

// Rutas
app.use('/usuarios', usuariosRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/etiquetas', etiquetasRoutes);
app.use('/tareas', tareasRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});

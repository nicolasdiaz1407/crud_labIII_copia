// /config/db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '!F4r@#mulaC0mpleja',
  database: 'tarea_db',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

module.exports = connection;

// db.js

const mysql = require('mysql2');

// Creamos un "pool" de conexiones
const pool = mysql.createPool({
  host: 'localhost',       // Dónde está MySQL (localhost si está en tu compu)
  user: 'root',            // Tu usuario de MySQL
  password: '',            // Tu contraseña de MySQL (puede ser vacía)
  database: 'mi_ecommerce' // Nombre de la base de datos que vas a usar
});

module.exports = pool;

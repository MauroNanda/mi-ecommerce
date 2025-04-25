const mysql = require('mysql2');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'D_1cc7e8bx', // Si tienes una contraseña para root, ponela aquí
  database: 'mi_ecommerce'
});

// Verificar que la conexión fue exitosa
connection.connect(err => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;

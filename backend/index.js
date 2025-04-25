const express = require('express');
const app = express();
const port = 3000;
const connection = require('./db'); // Importamos la conexión a la base de datos

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en la base de datos');
      return;
    }
    res.json(results); // Respondemos con los productos
  });
});
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

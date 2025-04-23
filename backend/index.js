const express = require('express');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para manejar las peticiones JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor de e-commerce funcionando!');
});

// Puerto donde el servidor escuchará
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors()); // Permitir solicitudes CORS
app.use(bodyParser.json()); // Habilitar el análisis de JSON en las solicitudes

const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/pruebasUsabilidad', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.error('No se pudo conectar a MongoDB...', err));

// Ruta principal
app.get('/', (req, res) => {
    res.send('API de Pruebas de Usabilidad en Línea');
});

// Middleware para manejar errores - captura de errores y lógica de respuesta
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
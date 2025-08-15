const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/pruebasUsabilidad', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.error('No se pudo conectar a MongoDB...', err));

app.get('/', (req, res) => {
    res.send('API de Pruebas de Usabilidad en Línea');
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
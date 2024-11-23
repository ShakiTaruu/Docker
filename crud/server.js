const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Asegura que otros servicios puedan acceder al CRUD
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Datos simulados (en memoria)
let data = [];

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor CRUD. Usa las rutas /items para interactuar.');
});


// Rutas
app.get('/items', (req, res) => {
    res.json(data);
});

app.post('/items', (req, res) => {
    const item = req.body;
    data.push(item);
    res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < data.length) {
        data[id] = req.body;
        res.json(data[id]);
    } else {
        res.status(404).json({ error: "Item no encontrado" });
    }
});

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < data.length) {
        data.splice(id, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: "Item no encontrado" });
    }
});

// Iniciar servidor
app.listen(80, () => console.log('CRUD server corriendo en el puerto 80'));

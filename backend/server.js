const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
 
// Crear el servidor
const app = express();
app.use(cors());  // Permitir solicitudes desde el frontend
app.use(express.json());
 
// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Cambia 'root' si tienes otro usuario configurado
    password: 'root',  // Coloca tu contraseña de MySQL
    port: '3306', 
    database: 'escuela'
});
 
// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});
 
// Endpoint para obtener estudiantes
app.get('/api/estudiantes', (req, res) => {
    const query = 'SELECT * FROM estudiantes';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});
 
// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
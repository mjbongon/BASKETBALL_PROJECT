const express = require('express');
const { Client } = require('pg');  // PostgreSQL client
const cors = require('cors');

// Crear el servidor
const app = express();
app.use(cors());  // Permitir solicitudes desde el frontend
app.use(express.json());

// Configurar la conexión a la base de datos PostgreSQL
const db = new Client({
    host: 'localhost',
    user: 'postgres',  // Cambia esto si tu usuario es diferente
    password: 'postgres',  // Coloca la contraseña de tu base de datos PostgreSQL
    port: 5432, // Puerto de PostgreSQL
    database: 'basketball'  // Nombre de tu base de datos 'basketball'
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos PostgreSQL');
});

// Endpoint para obtener todos los equipos
app.get('/api/teams', (req, res) => {
    const query = 'SELECT * FROM "Teams"';  // Use double quotes for case-sensitive names
    db.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err); // Debugging
            return res.status(500).send(err);
        }
        res.json(results.rows);  // PostgreSQL returns results in `.rows`
    });
});

// Endpoint para obtener un equipo específico por nombre
// Endpoint para obtener un equipo específico por nombre
app.get('/api/teams/:id', (req, res) => {
    const teamNameParam = req.params.id; // Get the team name from the URL (e.g., 'boston-celtics')
    console.log(`Requested team name: ${teamNameParam}`); // Debugging

    const teamName = teamNameParam.replace(/-/g, ' '); // Convert to 'boston celtics'
    console.log(`Converted team name: ${teamName}`); // Debugging

    const query = 'SELECT * FROM "Teams" WHERE name = $1'; // Query to fetch a team by name
    db.query(query, [teamName], (err, results) => {
        if (err) {
            console.error('Database error:', err); // Debugging
            return res.status(500).send(err);
        }
        if (results.rows.length === 0) {
            console.log('Team not found in database'); // Debugging
            return res.status(404).send('Team not found');
        }
        console.log('Found team:', results.rows[0]); // Debugging
        res.json(results.rows[0]); // Send the team data as a response
    });
});

// Endpoint para obtener todos los jugadores
app.get('/api/players', (req, res) => {
    const query = 'SELECT * FROM "Players"';  // Use double quotes for case-sensitive names
    db.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err); // Debugging
            return res.status(500).send(err);
        }
        res.json(results.rows);  // PostgreSQL returns results in `.rows`
    });
});

// Endpoint para obtener un jugador específico por nombre
app.get('/api/players/:id', (req, res) => {
    const playerNameParam = req.params.id;  // Get the player name from the URL (e.g., 'jrue-holiday')
    console.log(`Requested player name: ${playerNameParam}`); // Debugging

    const playerName = playerNameParam.replace(/-/g, ' '); // Convert to 'Jrue Holiday'
    console.log(`Converted player name: ${playerName}`); // Debugging

    const query = `SELECT * FROM "Players" WHERE CONCAT(first_name, ' ', last_name) = $1`; // Query to fetch a player by full name
    db.query(query, [playerName], (err, results) => {
        if (err) {
            console.error('Database error:', err); // Debugging
            return res.status(500).send(err);
        }
        if (results.rows.length === 0) {
            console.log('Player not found in database'); // Debugging
            return res.status(404).send('Player not found');
        }
        console.log('Found player:', results.rows[0]); // Debugging
        res.json(results.rows[0]); // Send the player data as a response
    });
});


// Iniciar el servidor
const PORT = 3001;  // Cambiar a puerto 3001
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
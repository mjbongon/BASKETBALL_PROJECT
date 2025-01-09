const express = require('express');
const path = require('path');
const { Player } = require('./models'); // Adjust the path if needed
const app = express();

// Middleware (for parsing JSON)
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API endpoint for players
app.get('/api/players', async (req, res) => {
  try {
    const players = await Player.findAll(); // Fetch all players from the database
    res.json(players); // Send the players as JSON response
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

// Catch-all handler to serve the React app for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const { Player } = require('./models'); // Adjust the path if needed
const app = express();

// Middleware (if any)
app.use(express.json()); // For parsing JSON requests

// Define the /api/players endpoint
app.get('/api/players', async (req, res) => {
  try {
    const players = await Player.findAll(); // Fetch all players from the database
    res.json(players); // Send the players as JSON response
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ error: 'Failed to fetch players' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

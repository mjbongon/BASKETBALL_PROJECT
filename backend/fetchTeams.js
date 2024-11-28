const axios = require('axios');
const { Team } = require('./models');
require('dotenv').config();

async function fetchAndSeedTeams() {
  const API_KEY = 'b5ce404e-44b8-47d9-9503-8ea75371ca15';
  const url = 'https://api.balldontlie.io/v1/teams';
    
  console.log('Using API Key:', API_KEY); // Log the API key for debugging

  try {
    console.log('Fetching teams from API...');
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`, // Use Bearer if required
      },
    });

    const teamsData = response.data.data;

    if (!teamsData || !Array.isArray(teamsData)) {
      throw new Error('Teams data is missing or invalid');
    }

    const promises = teamsData.map((team) =>
      Team.create({
        name: team.full_name,
        abbreviation: team.abbreviation,
        city: team.city,
        conference: team.conference,
        division: team.division,
      })
    );

    await Promise.all(promises);
    console.log('Teams seeded successfully.');
  } catch (error) {
    console.error('Error fetching or seeding teams:', error.message);
    if (error.response) {
      console.error('API Response:', error.response.data);
    }
  }
}

fetchAndSeedTeams();

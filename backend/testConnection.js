const { Sequelize } = require('sequelize');
const config = require('./config/config.json');  // Adjust path if needed

// Initialize Sequelize with the development configuration
const sequelize = new Sequelize(config.development);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

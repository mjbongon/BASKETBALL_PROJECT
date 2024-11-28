'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teams', [
      { name: 'Atlanta Hawks', city: 'Atlanta', abbreviation: 'ATL', conference: 'East', division: 'Southeast', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Boston Celtics', city: 'Boston', abbreviation: 'BOS', conference: 'East', division: 'Atlantic', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Brooklyn Nets', city: 'Brooklyn', abbreviation: 'BKN', conference: 'East', division: 'Atlantic', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charlotte Hornets', city: 'Charlotte', abbreviation: 'CHA', conference: 'East', division: 'Southeast', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chicago Bulls', city: 'Chicago', abbreviation: 'CHI', conference: 'East', division: 'Central', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cleveland Cavaliers', city: 'Cleveland', abbreviation: 'CLE', conference: 'East', division: 'Central', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dallas Mavericks', city: 'Dallas', abbreviation: 'DAL', conference: 'West', division: 'Southwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Denver Nuggets', city: 'Denver', abbreviation: 'DEN', conference: 'West', division: 'Northwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Detroit Pistons', city: 'Detroit', abbreviation: 'DET', conference: 'East', division: 'Central', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Golden State Warriors', city: 'San Francisco', abbreviation: 'GSW', conference: 'West', division: 'Pacific', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Houston Rockets', city: 'Houston', abbreviation: 'HOU', conference: 'West', division: 'Southwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Indiana Pacers', city: 'Indianapolis', abbreviation: 'IND', conference: 'East', division: 'Central', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Los Angeles Clippers', city: 'Los Angeles', abbreviation: 'LAC', conference: 'West', division: 'Pacific', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Los Angeles Lakers', city: 'Los Angeles', abbreviation: 'LAL', conference: 'West', division: 'Pacific', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Memphis Grizzlies', city: 'Memphis', abbreviation: 'MEM', conference: 'West', division: 'Southwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Miami Heat', city: 'Miami', abbreviation: 'MIA', conference: 'East', division: 'Southeast', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Milwaukee Bucks', city: 'Milwaukee', abbreviation: 'MIL', conference: 'East', division: 'Central', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Minnesota Timberwolves', city: 'Minneapolis', abbreviation: 'MIN', conference: 'West', division: 'Northwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'New Orleans Pelicans', city: 'New Orleans', abbreviation: 'NOP', conference: 'West', division: 'Southwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'New York Knicks', city: 'New York', abbreviation: 'NYK', conference: 'East', division: 'Atlantic', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oklahoma City Thunder', city: 'Oklahoma City', abbreviation: 'OKC', conference: 'West', division: 'Northwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Orlando Magic', city: 'Orlando', abbreviation: 'ORL', conference: 'East', division: 'Southeast', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Philadelphia 76ers', city: 'Philadelphia', abbreviation: 'PHI', conference: 'East', division: 'Atlantic', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phoenix Suns', city: 'Phoenix', abbreviation: 'PHX', conference: 'West', division: 'Pacific', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Portland Trail Blazers', city: 'Portland', abbreviation: 'POR', conference: 'West', division: 'Northwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sacramento Kings', city: 'Sacramento', abbreviation: 'SAC', conference: 'West', division: 'Pacific', createdAt: new Date(), updatedAt: new Date() },
      { name: 'San Antonio Spurs', city: 'San Antonio', abbreviation: 'SAS', conference: 'West', division: 'Southwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Toronto Raptors', city: 'Toronto', abbreviation: 'TOR', conference: 'East', division: 'Atlantic', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Utah Jazz', city: 'Salt Lake City', abbreviation: 'UTA', conference: 'West', division: 'Northwest', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Washington Wizards', city: 'Washington D.C.', abbreviation: 'WAS', conference: 'East', division: 'Southeast', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [
      // Golden State Warriors
      {
        first_name: 'Stephen',
        last_name: 'Curry',
        position: 'Point Guard',
        height: 6.2,
        weight: 185,
        team: 'Golden State Warriors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Andrew',
        last_name: 'Wiggins',
        position: 'Small Forward',
        height: 6.7,
        weight: 197,
        team: 'Golden State Warriors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Draymond',
        last_name: 'Green',
        position: 'Power Forward',
        height: 6.6,
        weight: 230,
        team: 'Golden State Warriors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jonathan',
        last_name: 'Kuminga',
        position: 'Small Forward',
        height: 6.8,
        weight: 210,
        team: 'Golden State Warriors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Kevon',
        last_name: 'Looney',
        position: 'Center',
        height: 6.9,
        weight: 222,
        team: 'Golden State Warriors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Los Angeles Lakers
      {
        first_name: 'LeBron',
        last_name: 'James',
        position: 'Small Forward',
        height: 6.9,
        weight: 250,
        team: 'Los Angeles Lakers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Anthony',
        last_name: 'Davis',
        position: 'Power Forward',
        height: 6.10,
        weight: 253,
        team: 'Los Angeles Lakers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Austin',
        last_name: 'Reaves',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 206,
        team: 'Los Angeles Lakers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'D\'Angelo',
        last_name: 'Russell',
        position: 'Point Guard',
        height: 6.4,
        weight: 193,
        team: 'Los Angeles Lakers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Rui',
        last_name: 'Hachimura',
        position: 'Small Forward',
        height: 6.8,
        weight: 230,
        team: 'Los Angeles Lakers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Boston Celtics
      {
        first_name: 'Jayson',
        last_name: 'Tatum',
        position: 'Small Forward',
        height: 6.8,
        weight: 210,
        team: 'Boston Celtics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jaylen',
        last_name: 'Brown',
        position: 'Shooting Guard',
        height: 6.6,
        weight: 219,
        team: 'Boston Celtics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jrue',
        last_name: 'Holiday',
        position: 'Point Guard',
        height: 6.4,
        weight: 221,
        team: 'Boston Celtics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Kristaps',
        last_name: 'Porzingis',
        position: 'Center',
        height: 7.3,
        weight: 240,
        team: 'Boston Celtics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Al',
        last_name: 'Horford',
        position: 'Power Forward',
        height: 6.9,
        weight: 250,
        team: 'Boston Celtics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Cleveland Cavaliers
      {
        first_name: 'Darius',
        last_name: 'Garland',
        position: 'Point Guard',
        height: 6.1,
        weight: 192,
        team: 'Cleveland Cavaliers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Donovan',
        last_name: 'Mitchell',
        position: 'Shooting Guard',
        height: 6.1,
        weight: 215,
        team: 'Cleveland Cavaliers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Evan',
        last_name: 'Mobley',
        position: 'Power Forward',
        height: 7.0,
        weight: 215,
        team: 'Cleveland Cavaliers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jared',
        last_name: 'Allen',
        position: 'Center',
        height: 6.9,
        weight: 243,
        team: 'Cleveland Cavaliers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Isaac',
        last_name: 'Okoro',
        position: 'Small Forward',
        height: 6.5,
        weight: 225,
        team: 'Cleveland Cavaliers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Orlando Magic
      {
        first_name: 'Markelle',
        last_name: 'Fultz',
        position: 'Point Guard',
        height: 6.4,
        weight: 210,
        team: 'Orlando Magic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jalen',
        last_name: 'Suggs',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 205,
        team: 'Orlando Magic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Franz',
        last_name: 'Wagner',
        position: 'Small Forward',
        height: 6.9,
        weight: 220,
        team: 'Orlando Magic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Paolo',
        last_name: 'Banchero',
        position: 'Power Forward',
        height: 6.10,
        weight: 250,
        team: 'Orlando Magic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Wendell',
        last_name: 'Carter Jr.',
        position: 'Center',
        height: 6.9,
        weight: 250,
        team: 'Orlando Magic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // New York Knicks
      {
        first_name: 'Jalen',
        last_name: 'Brunson',
        position: 'Point Guard',
        height: 6.1,
        weight: 190,
        team: 'New York Knicks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Josh',
        last_name: 'Hart',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 214,
        team: 'New York Knicks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Karl-Anthony',
        last_name: 'Towns',
        position: 'Center',
        height: 6.9,
        weight: 248,
        team: 'New York Knicks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Mikal',
        last_name: 'Bridges',
        position: 'Small Forward',
        height: 6.6,
        weight: 209,
        team: 'New York Knicks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'OG',
        last_name: 'Anunoby',
        position: 'Small Forward',
        height: 6.7,
        weight: 232,
        team: 'New York Knicks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Continue with other teams following the same pattern...
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  },
};

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

      //Bucks
      {
        first_name: 'Damian',
        last_name: 'Lillard',
        position: 'Point Guard',
        height: 6.2,
        weight: 195,
        team: 'Milwaukee Bucks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Khris',
        last_name: 'Middleton',
        position: 'Small Forward',
        height: 6.7,
        weight: 222,
        team: 'Milwaukee Bucks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Taurean',
        last_name: 'Prince',
        position: 'Power Forward',
        height: 6.7,
        weight: 218,
        team: 'Milwaukee Bucks',
        createdAt: new Date(),
        updatedAt: new Date(),
     
        first_name: 'Giannis',
        last_name: 'Antetokounmpo',
        position: 'Power Forward',
        height: 6.11,
        weight: 242,
        team: 'Milwaukee Bucks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Brook',
        last_name: 'Lopez',
        position: 'Center',
        height: 7.0,
        weight: 282,
        team: 'Milwaukee Bucks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Heat
      {
        first_name: 'Jimmy',
        last_name: 'Butler',
        position: 'Small Forward',
        height: 6.7,
        weight: 230,
        team: 'Miami Heat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Bam',
        last_name: 'Adebayo',
        position: 'Center',
        height: 6.9,
        weight: 255,
        team: 'Miami Heat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Tyler',
        last_name: 'Herro',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 195,
        team: 'Miami Heat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Terry',
        last_name: 'Rozier',
        position: 'Point Guard',
        height: 6.1,
        weight: 190,
        team: 'Miami Heat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Kevin',
        last_name: 'Love',
        position: 'Power Forward',
        height: 6.8,
        weight: 251,
        team: 'Miami Heat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //Pacers
      {
        first_name: 'Tyrese',
        last_name: 'Haliburton',
        position: 'Point Guard',
        height: 6.5,
        weight: 185,
        team: 'Indiana Pacers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Myles',
        last_name: 'Turner',
        position: 'Center',
        height: 6.11,
        weight: 250,
        team: 'Indiana Pacers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Pascal',
        last_name: 'Siakam',
        position: 'Power Forward',
        height: 6.9,
        weight: 230,
        team: 'Indiana Pacers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Bennedict',
        last_name: 'Mathurin',
        position: 'Shooting Guard',
        height: 6.6,
        weight: 210,
        team: 'Indiana Pacers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Andrew',
        last_name: 'Nembhard',
        position: 'Point Guard',
        height: 6.5,
        weight: 193,
        team: 'Indiana Pacers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      //Nets
      {
        first_name: 'Ben',
        last_name: 'Simmons',
        position: 'Point Guard',
        height: 6.10,
        weight: 240,
        team: 'Brooklyn Nets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Cam',
        last_name: 'Thomas',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 210,
        team: 'Brooklyn Nets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Dennis',
        last_name: 'Schroder',
        position: 'Point Guard',
        height: 6.1,
        weight: 172,
        team: 'Brooklyn Nets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Cam',
        last_name: 'Johnson',
        position: 'Small Forward',
        height: 6.8,
        weight: 210,
        team: 'Brooklyn Nets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Ziaire',
        last_name: 'Williams',
        position: 'Small Forward',
        height: 6.9,
        weight: 185,
        team: 'Brooklyn Nets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      //Hawks
      {
        first_name: 'Trae',
        last_name: 'Young',
        position: 'Point Guard',
        height: 6.1,
        weight: 164,
        team: 'Atlanta Hawks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jalen',
        last_name: 'Johnson',
        position: 'Small Forward',
        height: 6.8,
        weight: 219,
        team: 'Atlanta Hawks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'De\'Andre',
        last_name: 'Hunter',
        position: 'Small Forward',
        height: 6.8,
        weight: 225,
        team: 'Atlanta Hawks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Clint',
        last_name: 'Capela',
        position: 'Center',
        height: 6.10,
        weight: 256,
        team: 'Atlanta Hawks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Zaccharie',
        last_name: 'Risacher',
        position: 'Small Forward',
        height: 6.9,
        weight: 204,
        team: 'Atlanta Hawks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      //Bulls
      {
        first_name: 'Josh',
        last_name: 'Giddey',
        position: 'Point Guard',
        height: 6.8,
        weight: 210,
        team: 'Chicago Bulls',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Coby',
        last_name: 'White',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 195,
        team: 'Chicago Bulls',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Zach',
        last_name: 'LaVine',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 200,
        team: 'Chicago Bulls',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Patrick',
        last_name: 'Williams',
        position: 'Power Forward',
        height: 6.7,
        weight: 215,
        team: 'Chicago Bulls',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Nikola',
        last_name: 'Vucevic',
        position: 'Center',
        height: 6.10,
        weight: 260,
        team: 'Chicago Bulls',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Pistons
      {
        first_name: 'Cade',
        last_name: 'Cunningham',
        position: 'Point Guard',
        height: 6.6,
        weight: 220,
        team: 'Detroit Pistons',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jaden',
        last_name: 'Ivey',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 195,
        team: 'Detroit Pistons',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Tim',
        last_name: 'Hardaway Jr.',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 205,
        team: 'Detroit Pistons',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Tobias',
        last_name: 'Harris',
        position: 'Power Forward',
        height: 6.8,
        weight: 226,
        team: 'Detroit Pistons',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jalen',
        last_name: 'Duren',
        position: 'Center',
        height: 6.10,
        weight: 250,
        team: 'Detroit Pistons',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      //Hornets
      {
        first_name: 'LaMelo',
        last_name: 'Ball',
        position: 'Point Guard',
        height: 6.7,
        weight: 180,
        team: 'Charlotte Hornets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Tre',
        last_name: 'Mann',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 190,
        team: 'Charlotte Hornets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Brandon',
        last_name: 'Miller',
        position: 'Small Forward',
        height: 6.9,
        weight: 200,
        team: 'Charlotte Hornets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Josh',
        last_name: 'Green',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 200,
        team: 'Charlotte Hornets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Miles',
        last_name: 'Bridges',
        position: 'Power Forward',
        height: 6.7,
        weight: 225,
        team: 'Charlotte Hornets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      //Raptors
      {
        first_name: 'Scottie',
        last_name: 'Barnes',
        position: 'Small Forward',
        height: 6.7,
        weight: 225,
        team: 'Toronto Raptors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Gradey',
        last_name: 'Dick',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 205,
        team: 'Toronto Raptors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'RJ',
        last_name: 'Barrett',
        position: 'Shooting Guard',
        height: 6.6,
        weight: 214,
        team: 'Toronto Raptors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Ochai',
        last_name: 'Agbaji',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 214,
        team: 'Toronto Raptors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jakob',
        last_name: 'Poeltl',
        position: 'Center',
        height: 7.0,
        weight: 250,
        team: 'Toronto Raptors',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    
      //76ers
      {
        first_name: 'Tyrese',
        last_name: 'Maxey',
        position: 'Point Guard',
        height: 6.2,
        weight: 200,
        team: 'Philadelphia 76ers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jared',
        last_name: 'McCain',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 200,
        team: 'Philadelphia 76ers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Paul',
        last_name: 'George',
        position: 'Small Forward',
        height: 6.8,
        weight: 220,
        team: 'Philadelphia 76ers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Caleb',
        last_name: 'Martin',
        position: 'Small Forward',
        height: 6.5,
        weight: 210,
        team: 'Philadelphia 76ers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Joel',
        last_name: 'Embiid',
        position: 'Center',
        height: 7.0,
        weight: 280,
        team: 'Philadelphia 76ers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Wizards
      {
        first_name: 'Jordan',
        last_name: 'Poole',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 194,
        team: 'Washington Wizards',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Malcolm',
        last_name: 'Brogdon',
        position: 'Point Guard',
        height: 6.5,
        weight: 229,
        team: 'Washington Wizards',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Bilal',
        last_name: 'Coulibaly',
        position: 'Small Forward',
        height: 6.6,
        weight: 200,
        team: 'Washington Wizards',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Kyle',
        last_name: 'Kuzma',
        position: 'Power Forward',
        height: 6.9,
        weight: 221,
        team: 'Washington Wizards',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Alexandre',
        last_name: 'Sarr',
        position: 'Center',
        height: 7.0,
        weight: 223,
        team: 'Washington Wizards',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Thunder
      {
        first_name: 'Shai',
        last_name: 'Gilgeous-Alexander',
        position: 'Point Guard',
        height: 6.6,
        weight: 180,
        team: 'Oklahoma City Thunder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Luguentz',
        last_name: 'Dort',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 215,
        team: 'Oklahoma City Thunder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Aaron',
        last_name: 'Wiggins',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 204,
        team: 'Oklahoma City Thunder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jalen',
        last_name: 'Williams',
        position: 'Small Forward',
        height: 6.6,
        weight: 185,
        team: 'Oklahoma City Thunder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Chet',
        last_name: 'Holmgren',
        position: 'Center',
        height: 7.0,
        weight: 195,
        team: 'Oklahoma City Thunder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Rockets
      {
        first_name: 'Fred',
        last_name: 'VanVleet',
        position: 'Point Guard',
        height: 6.1,
        weight: 197,
        team: 'Houston Rockets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jalen',
        last_name: 'Green',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 186,
        team: 'Houston Rockets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Dillon',
        last_name: 'Brooks',
        position: 'Small Forward',
        height: 6.6,
        weight: 219,
        team: 'Houston Rockets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jabari',
        last_name: 'Smith Jr.',
        position: 'Power Forward',
        height: 6.10,
        weight: 221,
        team: 'Houston Rockets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Alperen',
        last_name: 'Sengun',
        position: 'Center',
        height: 6.9,
        weight: 243,
        team: 'Houston Rockets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Grizzlies
      {
        first_name: 'Ja',
        last_name: 'Morant',
        position: 'Point Guard',
        height: 6.3,
        weight: 174,
        team: 'Memphis Grizzlies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Desmond',
        last_name: 'Bane',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 214,
        team: 'Memphis Grizzlies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jaylen',
        last_name: 'Wells',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 214,
        team: 'Memphis Grizzlies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jaren',
        last_name: 'Jackson Jr.',
        position: 'Power Forward',
        height: 6.9,
        weight: 242,
        team: 'Memphis Grizzlies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Brandon',
        last_name: 'Clarke',
        position: 'Power Forward',
        height: 6.8,
        weight: 209,
        team: 'Memphis Grizzlies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Clippers
      {
        first_name: 'James',
        last_name: 'Harden',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 220,
        team: 'Los Angeles Clippers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Kris',
        last_name: 'Dunn',
        position: 'Point Guard',
        height: 6.3,
        weight: 209,
        team: 'Los Angeles Clippers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Norman',
        last_name: 'Powell',
        position: 'Shooting Guard',
        height: 6.3,
        weight: 215,
        team: 'Los Angeles Clippers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Derrick',
        last_name: 'Jones Jr.',
        position: 'Small Forward',
        height: 6.6,
        weight: 210,
        team: 'Los Angeles Clippers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Ivica',
        last_name: 'Zubac',
        position: 'Center',
        height: 7.0,
        weight: 240,
        team: 'Los Angeles Clippers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Nuggets
      {
        first_name: 'Jamal',
        last_name: 'Murray',
        position: 'Point Guard',
        height: 6.4,
        weight: 214,
        team: 'Denver Nuggets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Christian',
        last_name: 'Braun',
        position: 'Shooting Guard',
        height: 6.7,
        weight: 219,
        team: 'Denver Nuggets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Michael',
        last_name: 'Porter Jr.',
        position: 'Small Forward',
        height: 6.10,
        weight: 218,
        team: 'Denver Nuggets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Peyton',
        last_name: 'Watson',
        position: 'Small Forward',
        height: 6.8,
        weight: 205,
        team: 'Denver Nuggets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Nikola',
        last_name: 'Jokic',
        position: 'Center',
        height: 7.0,
        weight: 284,
        team: 'Denver Nuggets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Mavericks
      {
        first_name: 'Luka',
        last_name: 'Doncic',
        position: 'Point Guard',
        height: 6.7,
        weight: 230,
        team: 'Dallas Mavericks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Kyrie',
        last_name: 'Irving',
        position: 'Point Guard',
        height: 6.2,
        weight: 193,
        team: 'Dallas Mavericks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Klay',
        last_name: 'Thompson',
        position: 'Shooting Guard',
        height: 6.6,
        weight: 215,
        team: 'Dallas Mavericks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'PJ',
        last_name: 'Washington',
        position: 'Power Forward',
        height: 6.7,
        weight: 221,
        team: 'Dallas Mavericks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Dereck',
        last_name: 'Lively II',
        position: 'Center',
        height: 7.0,
        weight: 219,
        team: 'Dallas Mavericks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Suns
      {
        first_name: 'Tyus',
        last_name: 'Jones',
        position: 'Point Guard',
        height: 6.1,
        weight: 196,
        team: 'Phoenix Suns',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Devin',
        last_name: 'Booker',
        position: 'Shooting Guard',
        height: 6.5,
        weight: 206,
        team: 'Phoenix Suns',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Bradley',
        last_name: 'Beal',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 207,
        team: 'Phoenix Suns',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Kevin',
        last_name: 'Durant',
        position: 'Small Forward',
        height: 6.10,
        weight: 240,
        team: 'Phoenix Suns',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jusuf',
        last_name: 'Nurkic',
        position: 'Center',
        height: 6.11,
        weight: 290,
        team: 'Phoenix Suns',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Spurs
      {
        first_name: 'Chris',
        last_name: 'Paul',
        position: 'Point Guard',
        height: 6.0,
        weight: 175,
        team: 'San Antonio Spurs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Devin',
        last_name: 'Vassell',
        position: 'Shooting Guard',
        height: 6.7,
        weight: 200,
        team: 'San Antonio Spurs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Julian',
        last_name: 'Champagnie',
        position: 'Small Forward',
        height: 6.8,
        weight: 220,
        team: 'San Antonio Spurs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Harrison',
        last_name: 'Barnes',
        position: 'Power Forward',
        height: 6.8,
        weight: 225,
        team: 'San Antonio Spurs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Victor',
        last_name: 'Wembanyama',
        position: 'Center',
        height: 7.4,
        weight: 210,
        team: 'San Antonio Spurs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Kings
      {
        first_name: 'De\'Aaron',
        last_name: 'Fox',
        position: 'Point Guard',
        height: 6.3,
        weight: 185,
        team: 'Sacramento Kings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Keon',
        last_name: 'Ellis',
        position: 'Shooting Guard',
        height: 6.3,
        weight: 175,
        team: 'Sacramento Kings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'DeMar',
        last_name: 'DeRozan',
        position: 'Small Forward',
        height: 6.6,
        weight: 220,
        team: 'Sacramento Kings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Keegan',
        last_name: 'Murray',
        position: 'Power Forward',
        height: 6.8,
        weight: 215,
        team: 'Sacramento Kings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Domantas',
        last_name: 'Sabonis',
        position: 'Center',
        height: 6.11,
        weight: 240,
        team: 'Sacramento Kings',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Timberwolves
      {
        first_name: 'Mike',
        last_name: 'Conley',
        position: 'Point Guard',
        height: 6.1,
        weight: 175,
        team: 'Minnesota Timberwolves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Anthony',
        last_name: 'Edwards',
        position: 'Shooting Guard',
        height: 6.4,
        weight: 225,
        team: 'Minnesota Timberwolves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jaden',
        last_name: 'McDaniels',
        position: 'Small Forward',
        height: 6.9,
        weight: 185,
        team: 'Minnesota Timberwolves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Julius',
        last_name: 'Randle',
        position: 'Power Forward',
        height: 6.8,
        weight: 250,
        team: 'Minnesota Timberwolves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Rudy',
        last_name: 'Gobert',
        position: 'Center',
        height: 7.1,
        weight: 258,
        team: 'Minnesota Timberwolves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Trail Blazers
      {
        first_name: 'Anfernee',
        last_name: 'Simons',
        position: 'Shooting Guard',
        height: 6.3,
        weight: 181,
        team: 'Portland Trail Blazers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Shaedon',
        last_name: 'Sharpe',
        position: 'Shooting Guard',
        height: 6.6,
        weight: 200,
        team: 'Portland Trail Blazers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Toumani',
        last_name: 'Camara',
        position: 'Small Forward',
        height: 6.8,
        weight: 220,
        team: 'Portland Trail Blazers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Jerami',
        last_name: 'Grant',
        position: 'Power Forward',
        height: 6.8,
        weight: 210,
        team: 'Portland Trail Blazers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Deandre',
        last_name: 'Ayton',
        position: 'Center',
        height: 7.0,
        weight: 250,
        team: 'Portland Trail Blazers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Jazz
      {
        first_name: 'Keyonte',
        last_name: 'George',
        position: 'Point Guard',
        height: 6.4,
        weight: 185,
        team: 'Utah Jazz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Collin',
        last_name: 'Sexton',
        position: 'Shooting Guard',
        height: 6.1,
        weight: 190,
        team: 'Utah Jazz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Lauri',
        last_name: 'Markkanen',
        position: 'Power Forward',
        height: 7.0,
        weight: 240,
        team: 'Utah Jazz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'John',
        last_name: 'Collins',
        position: 'Power Forward',
        height: 6.9,
        weight: 235,
        team: 'Utah Jazz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Walker',
        last_name: 'Kessler',
        position: 'Center',
        height: 7.1,
        weight: 245,
        team: 'Utah Jazz',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      //Pelicans
      {
        first_name: 'Dejounte',
        last_name: 'Murray',
        position: 'Point Guard',
        height: 6.5,
        weight: 180,
        team: 'New Orleans Pelicans',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'CJ',
        last_name: 'McCollum',
        position: 'Shooting Guard',
        height: 6.3,
        weight: 190,
        team: 'New Orleans Pelicans',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Brandon',
        last_name: 'Ingram',
        position: 'Small Forward',
        height: 6.8,
        weight: 190,
        team: 'New Orleans Pelicans',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Trey',
        last_name: 'Murphy III',
        position: 'Small Forward',
        height: 6.9,
        weight: 206,
        team: 'New Orleans Pelicans',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Yves',
        last_name: 'Missi',
        position: 'Center',
        height: 7.0,
        weight: 240,
        team: 'New Orleans Pelicans',
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

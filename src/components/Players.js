import React from 'react';
import Navbar from '../Navbar';
import './Players.css';
import BackToTopButton from './BackToTopButton';

const Players = () => {
    // Sample data for teams and starting five players (replace with actual data)
    const teamsData = [
        {
            name: 'Boston Celtics',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/celtics/roster',
            players: [
              { position: 'PG', name: 'Jrue Holiday' },
              { position: 'SG', name: 'Derrick White' },
              { position: 'SF', name: 'Jaylen Brown' },
              { position: 'PF', name: 'Jayson Tatum' },
              { position: 'C', name: 'Kristaps Porzingis' },
            ],
          },
        {
            name: 'Brooklyn Nets',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/nets/roster',
            players: [
                { position: 'PG', name: 'Ben Simmons' },
                { position: 'SG', name: 'Mikal Bridges' },
                { position: 'SF', name: 'Cam Thomas' },
                { position: 'PF', name: 'Dorian Finney-Smith' },
                { position: 'C', name: 'Nicolas Claxton' }
            ]
        },
        {
            name: 'New York Knicks',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/knicks/roster',
            players: [
                { position: 'PG', name: 'Jalen Brunson' },
                { position: 'SG', name: 'Donte DiVincenzo' },
                { position: 'SF', name: 'Josh Hart' },
                { position: 'PF', name: 'Precious Achiuwa' },
                { position: 'C', name: 'Taj Gibson' }
            ]
        },
        {
            name: 'Philadelphia 76ers',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/sixers/roster',
            players: [
                { position: 'PG', name: 'Tyrese Maxey' },
                { position: 'SG', name: 'Kelly Oubre' },
                { position: 'SF', name: 'Tobias Harris' },
                { position: 'PF', name: 'Nicolas Batum' },
                { position: 'C', name: 'Joel Embiid' }
            ]
        },
        {
            name: 'Toronto Raptors',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/raptors/roster',
            players: [
                { position: 'PG', name: 'Immanuel Quickley' },
                { position: 'SG', name: 'RJ Barrett' },
                { position: 'SF', name: 'Gary Trent Jr.' },
                { position: 'PF', name: 'Scottie Barnes' },
                { position: 'C', name: 'Jakob Poeltl' }
            ]
        },
        {
            name: 'Chicago Bulls',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/bulls/roster',
            players: [
                { position: 'PG', name: 'Lonzo Ball' },
                { position: 'SG', name: 'Zach LaVine' },
                { position: 'SF', name: 'DeMar DeRozan' },
                { position: 'PF', name: 'Patrick Williams' },
                { position: 'C', name: 'Nikola Vučević' }
            ]
        },
        {
            name: 'Cleveland Cavaliers',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/cavaliers/roster',
            players: [
                { position: 'PG', name: 'Darius Garland' },
                { position: 'SG', name: 'Donovan Mitchell' },
                { position: 'SF', name: 'Isaac Okoro' },
                { position: 'PF', name: 'Evan Mobley' },
                { position: 'C', name: 'Jarrett Allen' }
            ]
        },
        {
            name: 'Detroit Pistons',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/pistons/roster',
            players: [
                { position: 'PG', name: 'Cade Cunningham' },
                { position: 'SG', name: 'Hamidou Diallo' },
                { position: 'SF', name: 'Jerami Grant' },
                { position: 'PF', name: 'Saddiq Bey' },
                { position: 'C', name: 'Isaiah Stewart' }
            ]
        },
        {
            name: 'Indiana Pacers',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/pacers/roster',
            players: [
                { position: 'PG', name: 'Tyrese Haliburton' },
                { position: 'SG', name: 'Bennedict Mathurin' },
                { position: 'SF', name: 'Aaron Nesmith' },
                { position: 'PF', name: 'Pascal Siakam' },
                { position: 'C', name: 'Myles Turner' }
            ]
        },
        {
            name: 'Milwaukee Bucks',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/bucks/roster',
            players: [
                { position: 'PG', name: 'Damian Lillard' },
                { position: 'SG', name: 'Malik Beasley' },
                { position: 'SF', name: 'Khris Middleton' },
                { position: 'PF', name: 'Giannis Antetokounmpo' },
                { position: 'C', name: 'Brook Lopez' }
            ]
        },
        {
          name: 'Atlanta Hawks',
          logoUrl: 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg',
          rosterUrl: 'https://www.nba.com/hawks/roster',
          players: [
              { position: 'PG', name: 'Trae Young' },
              { position: 'SG', name: 'Bogdan Bogdanović' },
              { position: 'SF', name: 'DeAndre Hunter' },
              { position: 'PF', name: 'John Collins' },
              { position: 'C', name: 'Clint Capela' }
          ]
        },
        {
            name: 'Charlotte Hornets',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/hornets/roster',
            players: [
                { position: 'PG', name: 'LaMelo Ball' },
                { position: 'SG', name: 'Terry Rozier' },
                { position: 'SF', name: 'Gordon Hayward' },
                { position: 'PF', name: 'Miles Bridges' },
                { position: 'C', name: 'Mason Plumlee' }
            ]
        },
        {
            name: 'Miami Heat',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/heat/roster',
            players: [
                { position: 'PG', name: 'Kyle Lowry' },
                { position: 'SG', name: 'Duncan Robinson' },
                { position: 'SF', name: 'Jimmy Butler' },
                { position: 'PF', name: 'P.J. Tucker' },
                { position: 'C', name: 'Bam Adebayo' }
            ]
        },
        {
            name: 'Orlando Magic',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/magic/roster',
            players: [
                { position: 'PG', name: 'Cole Anthony' },
                { position: 'SG', name: 'Terrence Ross' },
                { position: 'SF', name: 'Franz Wagner' },
                { position: 'PF', name: 'Chuma Okeke' },
                { position: 'C', name: 'Wendell Carter Jr.' }
            ]
        },
        {
            name: 'Washington Wizards',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/wizards/roster',
            players: [
                { position: 'PG', name: 'Tyus Jones' },
                { position: 'SG', name: 'Jordan Poole' },
                { position: 'SF', name: 'Deni Avdija' },
                { position: 'PF', name: 'Kyle Kuzma' },
                { position: 'C', name: 'Marvin Bagley III' }
            ]
        },
        {
          name: 'Denver Nuggets',
          logoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg',
          rosterUrl: 'https://www.nba.com/nuggets/roster',
          players: [
              { position: 'PG', name: 'Jamal Murray' },
              { position: 'SG', name: 'Kentavious Caldwell-Pope' },
              { position: 'SF', name: 'Michael Porter Jr.' },
              { position: 'PF', name: 'Aaron Gordon' },
              { position: 'C', name: 'Nikola Jokić' }
          ]
        },
        {
            name: 'Minnesota Timberwolves',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/timberwolves/roster',
            players: [
                { position: 'PG', name: 'Mike Conley' },
                { position: 'SG', name: 'Anthony Edwards' },
                { position: 'SF', name: 'Jaden McDaniels' },
                { position: 'PF', name: 'Karl-Anthony Towns' },
                { position: 'C', name: 'Rudy Gobert' }
            ]
        },
        {
            name: 'Oklahoma City Thunder',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/thunder/roster',
            players: [
                { position: 'PG', name: 'Shai Gilgeous-Alexander' },
                { position: 'SG', name: 'Luguentz Dort' },
                { position: 'SF', name: 'Josh Giddey' },
                { position: 'PF', name: 'Darius Bazley' },
                { position: 'C', name: 'Chet Holmgren' }
            ]
        },
        {
            name: 'Portland Trail Blazers',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/blazers/roster',
            players: [
                { position: 'PG', name: 'Scoot Henderson' },
                { position: 'SG', name: 'Anfernee Simons' },
                { position: 'SF', name: 'Toumani Camara' },
                { position: 'PF', name: 'Jerami Grant' },
                { position: 'C', name: 'Deandre Ayton' }
            ]
        },
        {
            name: 'Utah Jazz',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/jazz/roster',
            players: [
                { position: 'PG', name: 'Keyonte George' },
                { position: 'SG', name: 'Jordan Clarkson' },
                { position: 'SF', name: 'John Collins' },
                { position: 'PF', name: 'Lauri Markkanen' },
                { position: 'C', name: 'Walker Kessler' }
            ]
        },
        {
            name: 'Golden State Warriors',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/warriors/roster',
            players: [
                { position: 'PG', name: 'Stephen Curry' },
                { position: 'SG', name: 'Klay Thompson' },
                { position: 'SF', name: 'Andrew Wiggins' },
                { position: 'PF', name: 'Draymond Green' },
                { position: 'C', name: 'Kevon Looney' }
            ]
        },
        {
            name: 'LA Clippers',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/clippers/roster',
            players: [
                { position: 'PG', name: 'Russell Westbrook' },
                { position: 'SG', name: 'James Harden' },
                { position: 'SF', name: 'Paul George' },
                { position: 'PF', name: 'Kawhi Leonard' },
                { position: 'C', name: 'Ivica Zubac' }
            ]
        },
        {
            name: 'Los Angeles Lakers',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/lakers/roster',
            players: [
                { position: 'PG', name: 'DAngelo Russell' },
                { position: 'SG', name: 'Austin Reaves' },
                { position: 'SF', name: 'Rui Hachimura' },
                { position: 'PF', name: 'Lebron James' },
                { position: 'C', name: 'Anthony Davis' }
            ]
        },
        {
            name: 'Phoenix Suns',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/suns/roster',
            players: [
                { position: 'PG', name: 'Devin Booker' },
                { position: 'SG', name: 'Bradley Beal' },
                { position: 'SF', name: 'Kevin Durant' },
                { position: 'PF', name: 'Jusuf Nurkić' },
                { position: 'C', name: 'Drew Eubanks' }
            ]
        },
        {
            name: 'Sacramento Kings',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/kings/roster',
            players: [
                { position: 'PG', name: 'De Aaron Fox' },
                { position: 'SG', name: 'Kevin Huerter' },
                { position: 'SF', name: 'Harrison Barnes' },
                { position: 'PF', name: 'Keegan Murray' },
                { position: 'C', name: 'Domantas Sabonis' }
            ]
        },
        {
            name: 'Dallas Mavericks',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/mavericks/roster',
            players: [
                { position: 'PG', name: 'Kyrie Irving' },
                { position: 'SG', name: 'Luka Dončić' },
                { position: 'SF', name: 'Josh Green' },
                { position: 'PF', name: 'Maxi Kleber' },
                { position: 'C', name: 'Dereck Lively' }
            ]
        },
        {
            name: 'Houston Rockets',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/rockets/roster',
            players: [
                { position: 'PG', name: 'Kevin Porter Jr.' },
                { position: 'SG', name: 'Jalen Green' },
                { position: 'SF', name: 'Jae Sean Tate' },
                { position: 'PF', name: 'Alperen Şengün' },
                { position: 'C', name: 'Christian Wood' }
            ]
        },
        {
            name: 'Memphis Grizzlies',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/grizzlies/roster',
            players: [
                { position: 'PG', name: 'Ja Morant' },
                { position: 'SG', name: 'Dillon Brooks' },
                { position: 'SF', name: 'Kyle Anderson' },
                { position: 'PF', name: 'Jaren Jackson Jr.' },
                { position: 'C', name: 'Steven Adams' }
            ]
        },
        {
            name: 'New Orleans Pelicans',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/pelicans/roster',
            players: [
                { position: 'PG', name: 'CJ McCollum' },
                { position: 'SG', name: 'Herbert Jones' },
                { position: 'SF', name: 'Brandon Ingram' },
                { position: 'PF', name: 'Zion Williamson' },
                { position: 'C', name: 'Jonas Valančiūnas' }
            ]
        },
        {
            name: 'San Antonio Spurs',
            logoUrl: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg',
            rosterUrl: 'https://www.nba.com/spurs/roster',
            players: [
                { position: 'PG', name: 'Tre Jones' },
                { position: 'SG', name: 'Devin Vassell' },
                { position: 'SF', name: 'Julian Champagnie' },
                { position: 'PF', name: 'Jeremy Sochan' },
                { position: 'C', name: 'Victor Wembanyama' }
            ]
       },  
    ];

    return (
        <div>
          <Navbar />
          <div className="players-container">
            {teamsData.map((team, index) => (
              <div key={index} className="team-box">
                <a
                  href={team.rosterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-link"
                >
                  <div className="team-header">
                    <img src={team.logoUrl} alt="Team Logo" className="team-logo" />
                    <h3 className="team-name">{team.name}</h3>
                  </div>
                </a>
                <div className="players-list">
                  {team.players.map((player, idx) => (
                    <div key={idx} className="player">
                      <span className="player-position">{player.position}</span>
                      <span className="player-name">{player.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <BackToTopButton />
        </div>
    );
};

export default Players;

import React from 'react';
import Navbar from '../Navbar';
import './Standings.css';

const Standings = () => {
  // Dummy data for demonstration
  const easternTeams = [
    { rank: 1, name: 'Boston Celtics', wins: 10, losses: 5, home: '7-3', road: '3-2', streak: 'W3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg' },
    { rank: 2, name: 'Cleveland Cavaliers', wins: 9, losses: 6, home: '6-4', road: '3-2', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg' },
    { rank: 3, name: 'Milwaukee Bucks', wins: 8, losses: 7, home: '5-5', road: '3-2', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg' },
    { rank: 4, name: 'New York Knicks', wins: 7, losses: 8, home: '4-6', road: '3-2', streak: 'L3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg' },
    { rank: 5, name: 'Philadelphia 76ers', wins: 6, losses: 9, home: '3-7', road: '3-2', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg' },
    { rank: 6, name: 'Indiana Pacers', wins: 5, losses: 10, home: '2-8', road: '3-2', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg' },
    { rank: 7, name: 'Miami Heat', wins: 4, losses: 11, home: '1-9', road: '3-2', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg' },
    { rank: 8, name: 'Orlando Magic', wins: 3, losses: 12, home: '0-10', road: '3-2', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg' },
    { rank: 9, name: 'Chicago Bulls', wins: 2, losses: 13, home: '1-9', road: '1-4', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg' },
    { rank: 10, name: 'Atlanta Hawks', wins: 1, losses: 14, home: '2-8', road: '0-5', streak: 'L5', logoUrl: 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg' },
    { rank: 11, name: 'Brooklyn Nets', wins: 0, losses: 15, home: '0-10', road: '0-5', streak: 'L10', logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg' },
    { rank: 12, name: 'Toronto Raptors', wins: 9, losses: 6, home: '6-4', road: '3-2', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg' },
    { rank: 13, name: 'Charlotte Hornets', wins: 8, losses: 7, home: '5-5', road: '3-2', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg' },
    { rank: 14, name: 'Washington Wizards', wins: 7, losses: 8, home: '4-6', road: '3-2', streak: 'W3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg' },
    { rank: 15, name: 'Detroit Pistons', wins: 6, losses: 9, home: '3-7', road: '3-2', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg' },
  ];

  const westernTeams = [
    { rank: 1, name: 'Minnesota Timberwolves', wins: 12, losses: 3, home: '8-2', road: '4-1', streak: 'W5', logoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg' },
    { rank: 2, name: 'Oklahoma City Thunder', wins: 11, losses: 4, home: '7-3', road: '4-1', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg' },
    { rank: 3, name: 'LA Clippers', wins: 10, losses: 5, home: '6-4', road: '4-1', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg' },
    { rank: 4, name: 'Denver Nuggets', wins: 9, losses: 6, home: '5-5', road: '4-1', streak: 'L3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg' },
    { rank: 5, name: 'Phoenix Suns', wins: 8, losses: 7, home: '4-6', road: '4-1', streak: 'W4', logoUrl: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg' },
    { rank: 6, name: 'New Orleans Pelicans', wins: 7, losses: 8, home: '3-7', road: '4-1', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg' },
    { rank: 7, name: 'Dallas Mavericks', wins: 6, losses: 9, home: '2-8', road: '4-1', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg' },
    { rank: 8, name: 'Sacramento Kings', wins: 5, losses: 10, home: '1-9', road: '4-1', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg' },
    { rank: 9, name: 'Los Angeles Lakers', wins: 4, losses: 11, home: '0-10', road: '4-1', streak: 'W3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg' },
    { rank: 10, name: 'Golden State Warriors', wins: 3, losses: 12, home: '1-9', road: '2-3', streak: 'L4', logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg' },
    { rank: 11, name: 'Utah Jazz', wins: 2, losses: 13, home: '2-8', road: '1-4', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg' },
    { rank: 12, name: 'Houston Rockets', wins: 1, losses: 14, home: '0-10', road: '1-4', streak: 'L6', logoUrl: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg' },
    { rank: 13, name: 'Memphis Grizzlies', wins: 0, losses: 15, home: '0-10', road: '0-5', streak: 'L15', logoUrl: 'https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg' },
    { rank: 14, name: 'Portland Trail Blazers', wins: 10, losses: 5, home: '7-3', road: '3-2', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg' },
    { rank: 15, name: 'San Antonio Spurs', wins: 9, losses: 6, home: '6-4', road: '3-2', streak: 'L3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg' },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="standings-title">STANDINGS</h1>
      <hr className="standings-divider" />
      <div className="conference-container">
        <div className="conference">
          <h2 className="conference-title">Eastern Conference</h2>
          <table className="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Home</th>
                <th>Road</th>
                <th>Streak</th>
              </tr>
            </thead>
            <tbody>
              {easternTeams.map((team) => (
                <tr key={team.rank}>
                  <td>{team.rank}</td>
                  <td>
                    <img src={team.logoUrl} alt={team.name} className="team-logo" />
                    {team.name}
                  </td>
                  <td>{team.wins}</td>
                  <td>{team.losses}</td>
                  <td>{team.home}</td>
                  <td>{team.road}</td>
                  <td>{team.streak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="divider" /> {/* Divider line */}
        <div className="conference">
          <h2 className="conference-title">Western Conference</h2>
          <table className="standings-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Home</th>
                <th>Road</th>
                <th>Streak</th>
              </tr>
            </thead>
            <tbody>
              {westernTeams.map((team) => (
                <tr key={team.rank}>
                  <td>{team.rank}</td>
                  <td>
                    <img src={team.logoUrl} alt={team.name} className="team-logo" />
                    {team.name}
                  </td>
                  <td>{team.wins}</td>
                  <td>{team.losses}</td>
                  <td>{team.home}</td>
                  <td>{team.road}</td>
                  <td>{team.streak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Standings;

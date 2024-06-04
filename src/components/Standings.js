import React from 'react';
import Navbar from '../Navbar';
import './Standings.css';
import BackToTopButton from './BackToTopButton';


const Standings = () => {
  // Dummy data for demonstration
  const easternTeams = [
    { rank: 1, name: 'Boston Celtics', wins: 64, losses: 18, home: '37-4', road: '27-14', streak: 'W3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg' },
    { rank: 2, name: 'Cleveland Cavaliers', wins: 50, losses: 32, home: '27-14', road: '23-18', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg' },
    { rank: 3, name: 'Milwaukee Bucks', wins: 49, losses: 33, home: '31-11', road: '18-22', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg' },
    { rank: 4, name: 'New York Knicks', wins: 48, losses: 34, home: '26-15', road: '22-19', streak: 'L3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg' },
    { rank: 5, name: 'Philadelphia 76ers', wins: 47, losses: 35, home: '29-12', road: '18-23', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg' },
    { rank: 6, name: 'Indiana Pacers', wins: 47, losses: 35, home: '26-15', road: '21-20', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg' },
    { rank: 7, name: 'Miami Heat', wins: 47, losses: 35, home: '25-16', road: '22-19', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg' },
    { rank: 8, name: 'Orlando Magic', wins: 46, losses: 36, home: '22-19', road: '24-17', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg' },
    { rank: 9, name: 'Chicago Bulls', wins: 39, losses: 43, home: '20-21', road: '19-22', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg' },
    { rank: 10, name: 'Atlanta Hawks', wins: 36, losses: 46, home: '21-20', road: '15-26', streak: 'L5', logoUrl: 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg' },
    { rank: 11, name: 'Brooklyn Nets', wins: 32, losses: 50, home: '20-21', road: '12-29', streak: 'L10', logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg' },
    { rank: 12, name: 'Toronto Raptors', wins: 25, losses: 57, home: '14-27', road: '11-30', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg' },
    { rank: 13, name: 'Charlotte Hornets', wins: 21, losses: 61, home: '11-30', road: '10-31', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg' },
    { rank: 14, name: 'Washington Wizards', wins: 15, losses: 67, home: '7-34', road: '8-33', streak: 'W3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg' },
    { rank: 15, name: 'Detroit Pistons', wins: 14, losses: 68, home: '7-33', road: '7-35', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg' },
  ];

  const westernTeams = [
    { rank: 1, name: 'Minnesota Timberwolves', wins: 57, losses: 25, home: '33-8', road: '24-17', streak: 'W5', logoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg' },
    { rank: 2, name: 'Oklahoma City Thunder', wins: 57, losses: 25, home: '33-8', road: '24-17', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg' },
    { rank: 3, name: 'LA Clippers', wins: 56, losses: 26, home: '30-11', road: '26-15', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg' },
    { rank: 4, name: 'Denver Nuggets', wins: 51, losses: 31, home: '25-16', road: '26-15', streak: 'L3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg' },
    { rank: 5, name: 'Phoenix Suns', wins: 50, losses: 32, home: '25-16', road: '25-16', streak: 'W4', logoUrl: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg' },
    { rank: 6, name: 'New Orleans Pelicans', wins: 49, losses: 33, home: '25-16', road: '24-17', streak: 'L2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg' },
    { rank: 7, name: 'Dallas Mavericks', wins: 47, losses: 35, home: '28-14', road: '4-1', streak: 'W1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg' },
    { rank: 8, name: 'Sacramento Kings', wins: 49, losses: 33, home: '21-19', road: '4-1', streak: 'L1', logoUrl: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg' },
    { rank: 9, name: 'Los Angeles Lakers', wins: 46, losses: 36, home: '24-17', road: '4-1', streak: 'W3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg' },
    { rank: 10, name: 'Golden State Warriors', wins: 46, losses: 36, home: '25-16', road: '2-3', streak: 'L4', logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg' },
    { rank: 11, name: 'Utah Jazz', wins: 41, losses: 41, home: '27-14', road: '14-27', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg' },
    { rank: 12, name: 'Houston Rockets', wins: 31, losses: 51, home: '21-20', road: '10-31', streak: 'L6', logoUrl: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg' },
    { rank: 13, name: 'Memphis Grizzlies', wins: 27, losses: 55, home: '9-32', road: '18-23', streak: 'L15', logoUrl: 'https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg' },
    { rank: 14, name: 'Portland Trail Blazers', wins: 22, losses: 60, home: '12-29', road: '10-31', streak: 'W2', logoUrl: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg' },
    { rank: 15, name: 'San Antonio Spurs', wins: 21, losses: 61, home: '11-30', road: '10-31', streak: 'L3', logoUrl: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg' },
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
      <BackToTopButton />
    </div>
  );
};

export default Standings;

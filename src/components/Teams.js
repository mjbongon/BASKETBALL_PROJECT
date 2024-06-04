import React from 'react';
import Navbar from '../Navbar';
import './Teams.css';
import BackToTopButton from './BackToTopButton';

const Teams = () => {
  // Updated dummy data with website URLs
  const divisions = [
    { 
      name: 'Atlantic', 
      teams: [
        { name: 'Boston Celtics', logoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg', websiteUrl: 'https://www.nba.com/celtics/' },
        { name: 'Brooklyn Nets', logoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg', websiteUrl: 'https://www.nba.com/nets/' },
        { name: 'New York Knicks', logoUrl: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg', websiteUrl: 'https://www.nba.com/knicks/' },
        { name: 'Philadelphia 76ers', logoUrl: 'https://cdn.nba.com/logos/nba/1610612755/global/L/logo.svg', websiteUrl: 'https://www.nba.com/sixers/' },
        { name: 'Toronto Raptors', logoUrl: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg', websiteUrl: 'https://www.nba.com/raptors/' }
      ] 
    },
    { 
      name: 'Central', 
      teams: [
        { name: 'Chicago Bulls', logoUrl: 'https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg', websiteUrl: 'https://www.nba.com/bulls/' },
        { name: 'Cleveland Cavaliers', logoUrl: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg', websiteUrl: 'https://www.nba.com/cavaliers/' },
        { name: 'Detroit Pistons', logoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg', websiteUrl: 'https://www.nba.com/pistons/' },
        { name: 'Indiana Pacers', logoUrl: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg', websiteUrl: 'https://www.nba.com/pacers/' },
        { name: 'Milwaukee Bucks', logoUrl: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg', websiteUrl: 'https://www.nba.com/bucks/' }
      ]
    },
    { 
      name: 'Southeast', 
      teams: [
        { name: 'Atlanta Hawks', logoUrl: 'https://cdn.nba.com/logos/nba/1610612737/global/L/logo.svg', websiteUrl: 'https://www.nba.com/hawks/' },
        { name: 'Charlotte Hornets', logoUrl: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg', websiteUrl: 'https://www.nba.com/hornets/' },
        { name: 'Miami Heat', logoUrl: 'https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg', websiteUrl: 'https://www.nba.com/heat/' },
        { name: 'Orlando Magic', logoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg', websiteUrl: 'https://www.nba.com/magic/' },
        { name: 'Washington Wizards', logoUrl: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg', websiteUrl: 'https://www.nba.com/wizards/' }
      ]
    },
    { 
      name: 'Northwest', 
      teams: [
        { name: 'Denver Nuggets', logoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg', websiteUrl: 'https://www.nba.com/nuggets/' },
        { name: 'Minnesota Timberwolves', logoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg', websiteUrl: 'https://www.nba.com/timberwolves/' },
        { name: 'Oklahoma City Thunder', logoUrl: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg', websiteUrl: 'https://www.nba.com/thunder/' },
        { name: 'Portland Trail Blazers', logoUrl: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg', websiteUrl: 'https://www.nba.com/blazers/' },
        { name: 'Utah Jazz', logoUrl: 'https://cdn.nba.com/logos/nba/1610612762/global/L/logo.svg', websiteUrl: 'https://www.nba.com/jazz/' }
      ]
    },
    { 
      name: 'Pacific', 
      teams: [
        { name: 'Golden State Warriors', logoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg', websiteUrl: 'https://www.nba.com/warriors/' },
        { name: 'LA Clippers', logoUrl: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg', websiteUrl: 'https://www.nba.com/clippers/' },
        { name: 'Los Angeles Lakers', logoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg', websiteUrl: 'https://www.nba.com/lakers/' },
        { name: 'Phoenix Suns', logoUrl: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg', websiteUrl: 'https://www.nba.com/suns/' },
        { name: 'Sacramento Kings', logoUrl: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg', websiteUrl: 'https://www.nba.com/kings/' }
      ]
    },
    { 
      name: 'Southwest', 
      teams: [
        { name: 'Dallas Mavericks', logoUrl: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg', websiteUrl: 'https://www.nba.com/mavericks/' },
        { name: 'Houston Rockets', logoUrl: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg', websiteUrl: 'https://www.nba.com/rockets/' },
        { name: 'Memphis Grizzlies', logoUrl: 'https://cdn.nba.com/logos/nba/1610612763/global/L/logo.svg', websiteUrl: 'https://www.nba.com/grizzlies/' },
        { name: 'New Orleans Pelicans', logoUrl: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg', websiteUrl: 'https://www.nba.com/pelicans/' },
        { name: 'San Antonio Spurs', logoUrl: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg', websiteUrl: 'https://www.nba.com/spurs/' }
      ]
    }
  ];
  
  const firstRowDivisions = divisions.slice(0, 3);
  const secondRowDivisions = divisions.slice(3);

  return (
    <div>
      <Navbar />
      <h1 className="all-teams">ALL TEAMS</h1>
      <hr className="divider" /> {/* Divider line */}
      <div className="divisions-container">
        <div className="row">
          {firstRowDivisions.map((division) => (
            <div key={division.name} className="division">
              <h2 className="division-title">{division.name}</h2>
              <div className="teams">
                {division.teams.map((team) => (
                  <a key={team.name} href={team.websiteUrl} className="team" target="_blank" rel="noopener noreferrer">
                    <img src={team.logoUrl} alt={team.name} className="team-logo" />
                    <span className="team-name">{team.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="divider" /> {/* Divider line */}
        <div className="row">
          {secondRowDivisions.map((division) => (
            <div key={division.name} className="division">
              <h2 className="division-title">{division.name}</h2>
              <div className="teams">
                {division.teams.map((team) => (
                  <a key={team.name} href={team.websiteUrl} className="team" target="_blank" rel="noopener noreferrer">
                    <img src={team.logoUrl} alt={team.name} className="team-logo" />
                    <span className="team-name">{team.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div> 
      <BackToTopButton />
    </div>
  );
};

export default Teams;

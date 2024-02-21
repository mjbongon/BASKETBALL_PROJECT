import React from 'react';
import Navbar from '../Navbar';
import './Home.css';

const Home = () => {

    const upcomingGames = [
        { homeTeam: 'BOS', awayTeam: 'LAL', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg' },
        { homeTeam: 'SAC', awayTeam: 'GSW', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg' },
        { homeTeam: 'ORL', awayTeam: 'CLE', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg' },
        { homeTeam: 'DET', awayTeam: 'IND', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg' },
        { homeTeam: 'BKN', awayTeam: 'TOR', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg' },
        { homeTeam: 'PHX', awayTeam: 'DAL', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg' },
        { homeTeam: 'HOU', awayTeam: 'NOP', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg' },
        { homeTeam: 'OKC', awayTeam: 'LAC', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612760/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612746/global/L/logo.svg' },
        { homeTeam: 'WAS', awayTeam: 'DEN', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612764/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg' },
        { homeTeam: 'MIN', awayTeam: 'MIL', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg' },
        { homeTeam: 'CHA', awayTeam: 'GSW', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg' },
        { homeTeam: 'DEN', awayTeam: 'POR', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg' },
        { homeTeam: 'SAS', awayTeam: 'LAL', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg' },
        { homeTeam: 'ORL', awayTeam: 'DET', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg' },
        { homeTeam: 'BOS', awayTeam: 'NYK', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612752/global/L/logo.svg' },
        { homeTeam: 'BKN', awayTeam: 'MIN', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg' },        
    ];

    return (
      <div>
          <Navbar />
          <div className="upcoming-games-container">
              {upcomingGames.map((game, index) => (
                  <div key={index} className="game">
                      <div className="game-column">
                          <img src={game.homeLogoUrl} alt="Home Team Logo" className="team-logo" />
                          <span className="team-abbr">{game.homeTeam}</span>
                      </div>
                      <div className="game-column">
                          <span className="vs">vs</span>
                      </div>
                      <div className="game-column">
                          <span className="team-abbr">{game.awayTeam}</span>
                          <img src={game.awayLogoUrl} alt="Away Team Logo" className="team-logo" />
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Home;

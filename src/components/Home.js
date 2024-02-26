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
        /*{ homeTeam: 'BKN', awayTeam: 'MIN', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612750/global/L/logo.svg' },*/        
    ];

    const newsData = [

    ];

    return (
        <div>
            <Navbar />
            <div className="home-container">
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
                <div className="news-container">

                <div className="big-news">
                    <h1 className="big-news-header">NBA NEWS</h1>
                    <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2024-02/NBA-All-Star-Weekend-Guide.jpg.webp" />
                    <h2 className="big-news-description">All Star Weekend is Over, East took down the West 211 - 186. </h2>
                </div>
                
                <div className="latest-news">
                    <div className="news-column">
                        <div className="small-news">
                            <img src="https://cdn.nba.com/manage/2024/02/jokic-dribbling.jpg?w=735&h=413" alt="Small News 1" className="small-news-image" />
                            <h4 className="small-news-description">Nikola Jokic posts triple-double against every NBA team</h4>
                        </div>
                        <div className="small-news">
                            <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-10/Klay%20Thompson%20%20Golden%20State%20Warriors.jpg.webp" alt="Small News 2" className="small-news-image" />
                            <h4 className="small-news-description">How Klay can use Manu as an example in his new role with the Warriors</h4>
                        </div>
                    </div>
                    <div className="news-column">
                        <div className="small-news">
                            <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2024-02/Damian%20Lillard%20021724.jpeg.webp" alt="Small News 3" className="small-news-image" />
                            <h4 className="small-news-description">Damian Lillard is the winner of the 2024 NBA All-Star Three-Point Contest</h4>
                        </div>
                        <div className="small-news">
                            <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2024-02/Mac%20McClung%20%282%29%20021724.jpeg.webp" alt="Small News 4" className="small-news-image" />
                            <h4 className="small-news-description">Mac McClung won the 2024 NBA All-Star Dunk Contest</h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );    
};

export default Home;

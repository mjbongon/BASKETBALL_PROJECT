import React, { useState } from 'react';
import Navbar from '../Navbar';
import './Home.css';
import BackToTopButton from './BackToTopButton';

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
        { homeTeam: 'CHA', awayTeam: 'GSW', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg' },
        { homeTeam: 'DEN', awayTeam: 'POR', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612743/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612757/global/L/logo.svg' },
        { homeTeam: 'SAS', awayTeam: 'LAL', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612759/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg' },
        { homeTeam: 'ORL', awayTeam: 'DET', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg' },
        { homeTeam: 'BOS', awayTeam: 'LAL', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612738/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg' },
        { homeTeam: 'SAC', awayTeam: 'GSW', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612758/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg' },
        { homeTeam: 'ORL', awayTeam: 'CLE', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612753/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612739/global/L/logo.svg' },
        { homeTeam: 'DET', awayTeam: 'IND', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612765/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg' },
        { homeTeam: 'BKN', awayTeam: 'TOR', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612761/global/L/logo.svg' },
        { homeTeam: 'PHX', awayTeam: 'DAL', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612756/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612742/global/L/logo.svg' },
        { homeTeam: 'HOU', awayTeam: 'NOP', homeLogoUrl: 'https://cdn.nba.com/logos/nba/1610612745/global/L/logo.svg', awayLogoUrl: 'https://cdn.nba.com/logos/nba/1610612740/global/L/logo.svg' },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const gamesPerPage = 11;

    const indexOfLastGame = (currentPage + 1) * gamesPerPage;
    const indexOfFirstGame = currentPage * gamesPerPage;
    const currentGames = upcomingGames.slice(indexOfFirstGame, indexOfLastGame);

    const handleNextPage = () => {
        if (indexOfLastGame < upcomingGames.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <div className="home-container">
                <div className="upcoming-games-container">
                    <div className="nav-button left" onClick={handlePrevPage}>{"<"}</div>
                    {currentGames.map((game, index) => (
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
                    <div className="nav-button right" onClick={handleNextPage}>{">"}</div>
                </div>
                <br />
                <br />

                <div className="news-container">
                    <div className="big-news">
                        <h1 className="big-news-header">NBA NEWS</h1>
                        <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2024-02/NBA-All-Star-Weekend-Guide.jpg.webp" alt="Big News" />
                        <h2 className="big-news-description">All Star Weekend is Over, East took down the West 211 - 186.</h2>
                        <div className="small-news-container">
                            <div className="small-news">
                                <img src="https://cdn.nba.com/manage/2024/02/jokic-dribbling.jpg?w=735&h=413" alt="Small News 1" className="small-news-image" />
                                <h4 className="small-news-description">Nikola Jokic posts triple-double against every NBA team</h4>
                            </div>
                            <div className="small-news">
                                <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2023-10/Klay%20Thompson%20%20Golden%20State%20Warriors.jpg.webp" alt="Small News 2" className="small-news-image" />
                                <h4 className="small-news-description">How Klay can use Manu as an example in his new role with the Warriors</h4>
                            </div>
                            <div className="small-news">
                                <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2024-02/Damian%20Lillard%20021724.jpeg.webp" alt="Small News 3" className="small-news-image" />
                                <h4 className="small-news-description">Damian Lillard is the winner of the 2024 NBA All-Star Three-Point Contest</h4>
                            </div>
                            <div className="small-news">
                                <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2024-02/Mac%20McClung%20%282%29%20021724.jpeg.webp" alt="Small News 4" className="small-news-image" />
                                <h4 className="small-news-description">Mac McClung won the 2024 NBA All-Star Dunk Contest</h4>
                            </div>
                            <div className="small-news">
                                <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2023-11/Bradley%20Beal%20111723.jpeg?h=920929c4&itok=cnnEIXBH" alt="Small News 3" className="small-news-image" />
                                <h4 className="small-news-description">Phoenix finds possible landing spot for Bradley Beal, paving way for Jimmy Butler trade</h4>
                            </div>
                            <div className="small-news">
                                <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-05/Anthony%20Edwards%20Denver%20Nuggets%20vs.%20Minnesota%20Timberwolves%20051924.png?h=920929c4&itok=xvcW1WME" alt="Small News 4" className="small-news-image" />
                                <h4 className="small-news-description">Minnesota dethrones the champion and is a finalist in the West: The enormous comeback of the Timberwolves in Denver</h4>
                            </div>
                        </div>

                        
                        <h1 className="big-news-header">NBA Latest Videos</h1>
                        <div className="video-container">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/KiTs0sZ6WeE" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>

                    <div className="latest-news">
                        <h2 className="latest-news-header">LATEST NBA NEWS</h2>
                        <ul className="latest-news-list">
                            <li>What NBA games are there today? This is how the 2024 Playoffs continue</li>
                            <li>The risky predictions of the 2024 NBA Finals between Boston and Dallas</li>
                            <li>Three ideal players for the Los Angeles Lakers in the 2024 NBA Draft</li>
                            <li>Jason Kidd seeks to make history with Dallas: champion as a player and coach</li>
                            <li>The defensive strategy that LeBron James recommends to stop Luka Dončić</li>
                            <li>The reason why Luka Dončić uses number 77 with Dallas Mavericks</li>
                            <li>The order of the 2024 NBA Draft: All the picks and selections from the two rounds</li>
                        </ul>
                        
                        <br />
                        <a href="https://www.sportingnews.com/es/nba" target="_blank" rel="noopener noreferrer" className="more-news-button">More NBA News</a>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="small-news">
                            <img src="https://ng-sportingnews.com/s3/files/styles/crop_style_16_9_desktop/s3/2025-01/Victor%20Wembanyama%20Devin%20Vassell%20San%20Antonio%20Spurs.png?h=920929c4&itok=xJHGgfcD" alt="Small News 1" className="small-news-image" />
                            <h4 className="small-news-description">San Antonio shows in Paris that he has already found a sidekick for Wembanyama</h4>
                        </div>
                        <div className="small-news">
                            <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2025-01/Stephen%20Curry%20and%20Nikola%20Vucevic%20012325.jpeg?h=920929c4&itok=IHUk6cbB" alt="Small News 2" className="small-news-image" />
                            <h4 className="small-news-description">Stephen Curry and Steve Kerr hint at how Nikola Vucevic could fit into the Warriors
                            </h4>
                        </div>
                        <br />
                        <div className="small-news">
                            <img src="https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2025-01/Untitled%20design%20-%202025-01-23T084448.687.png?h=99362da5&itok=rveaJpXN" alt="Small News 3" className="small-news-image" />
                            <h4 className="small-news-description">History repeats itself again: NBA bans Air Jordan's 'banned logo'
                            </h4>
                        </div>
                    </div>
                </div>

            </div>

            <BackToTopButton />
        </div>
    );
};

export default Home;

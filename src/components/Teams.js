import React, { useState, useEffect } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch teams data from your API or use mock data
    // Replace the fetchTeams function with your actual data fetching logic
    fetchTeams("https://v2.nba.api-sports.io/teams?id=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v2.nba.api-sports.io",
            "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

  }, []);

  const fetchTeams = () => {
    // Replace this with your actual API endpoint or mock data
    // For example, you might use the NBA API or a mock API
    const apiUrl = 'https://v2.nba.api-sports.io/teams';
    
    // Fetch teams data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error('Error fetching teams:', error));
  };

  return (
    <div>
      <h2>Eastern Conference</h2>
      <div className="conference">
        {teams
          .filter((team) => team.conference === 'Eastern')
          .map((team) => (
            <div key={team.id} className="team">
              <span>{team.name}</span>
              <span>Wins: {team.wins}</span>
              <span>Losses: {team.losses}</span>
              {/* Add more information as needed */}
            </div>
          ))}
      </div>

      <h2>Western Conference</h2>
      <div className="conference">
        {teams
          .filter((team) => team.conference === 'Western')
          .map((team) => (
            <div key={team.id} className="team">
              <span>{team.name}</span>
              <span>Wins: {team.wins}</span>
              <span>Losses: {team.losses}</span>
              {/* Add more information as needed */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Teams;

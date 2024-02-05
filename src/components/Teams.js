import React, { useState, useEffect } from 'react';
import './Teams.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://v2.nba.api-sports.io/teams';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'v2.nba.api-sports.io',
        'x-rapidapi-key': 'XxXxXxXxXxXxXxXxXxXxXxXx',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTeams(data.teams || []); // Ensure data.teams is defined
      })
      .catch((error) => {
        console.error('Error fetching teams:', error);
      });
  }, []);

  const groupedTeams = teams.reduce((grouped, team) => {
    const { division } = team;
    if (!grouped[division]) {
      grouped[division] = [];
    }
    grouped[division].push(team);
    return grouped;
  }, {});

  return (
    <div>
      {Object.entries(groupedTeams).map(([division, teamsInDivision]) => (
        <div key={division} className="division">
          <h2>{division}</h2>
          <div className="teams">
            {teamsInDivision.map((team) => (
              <div key={team.id} className="team">
                <img src={team.logo} alt={`${team.name} Logo`} />
                <span>{team.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;

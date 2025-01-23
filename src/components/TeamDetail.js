import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';


const teamMap = new Map();

// Normalizing function to convert team names to URL-friendly format
const normalizeTeamName = (name) => {
  return name.toLowerCase().replace(/ /g, '-');
};

teamMap.set(normalizeTeamName("Atlanta Hawks"), 1);
teamMap.set(normalizeTeamName("Boston Celtics"), 2);
teamMap.set(normalizeTeamName("Brooklyn Nets"), 3);
teamMap.set(normalizeTeamName("Charlotte Hornets"), 4);
teamMap.set(normalizeTeamName("Chicago Bulls"), 5);
teamMap.set(normalizeTeamName("Cleveland Cavaliers"), 6);
teamMap.set(normalizeTeamName("Dallas Mavericks"), 7);
teamMap.set(normalizeTeamName("Denver Nuggets"), 8);
teamMap.set(normalizeTeamName("Detroit Pistons"), 9);
teamMap.set(normalizeTeamName("Golden State Warriors"), 10);
teamMap.set(normalizeTeamName("Houston Rockets"), 11);
teamMap.set(normalizeTeamName("Indiana Pacers"), 12);
teamMap.set(normalizeTeamName("Los Angeles Clippers"), 13);
teamMap.set(normalizeTeamName("Los Angeles Lakers"), 14);
teamMap.set(normalizeTeamName("Memphis Grizzlies"), 15);
teamMap.set(normalizeTeamName("Miami Heat"), 16);
teamMap.set(normalizeTeamName("Milwaukee Bucks"), 17);
teamMap.set(normalizeTeamName("Minnesota Timberwolves"), 18);
teamMap.set(normalizeTeamName("New Orleans Pelicans"), 19);
teamMap.set(normalizeTeamName("New York Knicks"), 20);
teamMap.set(normalizeTeamName("Oklahoma City Thunder"), 21);
teamMap.set(normalizeTeamName("Orlando Magic"), 22);
teamMap.set(normalizeTeamName("Philadelphia 76ers"), 23);
teamMap.set(normalizeTeamName("Phoenix Suns"), 24);
teamMap.set(normalizeTeamName("Portland Trail Blazers"), 25);
teamMap.set(normalizeTeamName("Sacramento Kings"), 26);
teamMap.set(normalizeTeamName("San Antonio Spurs"), 27);
teamMap.set(normalizeTeamName("Toronto Raptors"), 28);
teamMap.set(normalizeTeamName("Utah Jazz"), 29);
teamMap.set(normalizeTeamName("Washington Wizards"), 30);

const getTeamIdByName = (teamName) => {
  const normalizedTeamName = normalizeTeamName(teamName);
  return teamMap.get(normalizedTeamName) || null; // Returns null if the team doesn't exist
};

const TeamDetail = () => {
  const { id } = useParams(); // 'id' is the normalized team name from the URL
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const teamId = getTeamIdByName(id); // Get the ID based on the normalized name from the URL

    if (teamId === null) {
      setError('Team not found');
      setLoading(false);
      return;
    }

    console.log(`Fetching team details for team ID: ${teamId}`);

    // Here you could fetch the data for the team based on `teamId`, like so:
    fetch(`http://localhost:3001/api/teams/${teamId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTeam(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching team details:', err);
        setError('Error fetching team details');
        setLoading(false);
      });
  }, [id]); // Re-run the effect when the URL `id` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="team-detail">
      <Navbar />
      <h1>{team.name}</h1>
      <p><strong>City:</strong> {team.city}</p>
      <p><strong>Abbreviation:</strong> {team.abbreviation}</p>
      <p><strong>Conference:</strong> {team.conference}</p>
      <p><strong>Division:</strong> {team.division}</p>
    </div>
  );
};

export default TeamDetail;

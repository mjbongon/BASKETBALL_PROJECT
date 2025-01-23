import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

// Create the player map to map player names to ids
const playerMap = new Map();

// Normalizing function to convert player names to URL-friendly format
const normalizePlayerName = (name) => {
  return name.toLowerCase().replace(/ /g, '-');
};

// Mapping player names to their IDs using the normalizePlayerName function
playerMap.set(normalizePlayerName("Stephen Curry"), 1);
playerMap.set(normalizePlayerName("Andrew Wiggins"), 2);
playerMap.set(normalizePlayerName("Draymond Green"), 3);
playerMap.set(normalizePlayerName("Jonathan Kuminga"), 4);
playerMap.set(normalizePlayerName("Kevon Looney"), 5);
playerMap.set(normalizePlayerName("LeBron James"), 6);
playerMap.set(normalizePlayerName("Anthony Davis"), 7);
playerMap.set(normalizePlayerName("Austin Reaves"), 8);
playerMap.set(normalizePlayerName("D'Angelo Russell"), 9);
playerMap.set(normalizePlayerName("Rui Hachimura"), 10);
playerMap.set(normalizePlayerName("Jayson Tatum"), 11);
playerMap.set(normalizePlayerName("Jaylen Brown"), 12);
playerMap.set(normalizePlayerName("Jrue Holiday"), 13);
playerMap.set(normalizePlayerName("Kristaps Porzingis"), 14);
playerMap.set(normalizePlayerName("Al Horford"), 15);
playerMap.set(normalizePlayerName("Darius Garland"), 16);
playerMap.set(normalizePlayerName("Donovan Mitchell"), 17);
playerMap.set(normalizePlayerName("Evan Mobley"), 18);
playerMap.set(normalizePlayerName("Jared Allen"), 19);
playerMap.set(normalizePlayerName("Isaac Okoro"), 20);
playerMap.set(normalizePlayerName("Markelle Fultz"), 21);
playerMap.set(normalizePlayerName("Jalen Suggs"), 22);
playerMap.set(normalizePlayerName("Franz Wagner"), 23);
playerMap.set(normalizePlayerName("Paolo Banchero"), 24);
playerMap.set(normalizePlayerName("Wendell Carter Jr."), 25);
playerMap.set(normalizePlayerName("Jalen Brunson"), 26);
playerMap.set(normalizePlayerName("Josh Hart"), 27);
playerMap.set(normalizePlayerName("Karl-Anthony Towns"), 28);
playerMap.set(normalizePlayerName("Mikal Bridges"), 29);
playerMap.set(normalizePlayerName("OG Anunoby"), 30);
playerMap.set(normalizePlayerName("Damian Lillard"), 31);
playerMap.set(normalizePlayerName("Khris Middleton"), 32);
playerMap.set(normalizePlayerName("Taurean Prince"), 33);
playerMap.set(normalizePlayerName("Giannis Antetokounmpo"), 34);
playerMap.set(normalizePlayerName("Brook Lopez"), 35);
playerMap.set(normalizePlayerName("Jimmy Butler"), 36);
playerMap.set(normalizePlayerName("Bam Adebayo"), 37);
playerMap.set(normalizePlayerName("Tyler Herro"), 38);
playerMap.set(normalizePlayerName("Terry Rozier"), 39);
playerMap.set(normalizePlayerName("Kevin Love"), 40);
playerMap.set(normalizePlayerName("Tyrese Haliburton"), 41);
playerMap.set(normalizePlayerName("Myles Turner"), 42);
playerMap.set(normalizePlayerName("Pascal Siakam"), 43);
playerMap.set(normalizePlayerName("Bennedict Mathurin"), 44);
playerMap.set(normalizePlayerName("Andrew Nembhard"), 45);
playerMap.set(normalizePlayerName("Ben Simmons"), 46);
playerMap.set(normalizePlayerName("Cam Thomas"), 47);
playerMap.set(normalizePlayerName("Dennis Schroder"), 48);
playerMap.set(normalizePlayerName("Cam Johnson"), 49);
playerMap.set(normalizePlayerName("Ziaire Williams"), 50);
playerMap.set(normalizePlayerName("Trae Young"), 51);
playerMap.set(normalizePlayerName("Jalen Johnson"), 52);
playerMap.set(normalizePlayerName("De'Andre Hunter"), 53);
playerMap.set(normalizePlayerName("Clint Capela"), 54);
playerMap.set(normalizePlayerName("Zaccharie Risacher"), 55);
playerMap.set(normalizePlayerName("Josh Giddey"), 56);
playerMap.set(normalizePlayerName("Coby White"), 57);
playerMap.set(normalizePlayerName("Zach LaVine"), 58);
playerMap.set(normalizePlayerName("Patrick Williams"), 59);
playerMap.set(normalizePlayerName("Nikola Vucevic"), 60);
playerMap.set(normalizePlayerName("Cade Cunningham"), 61);
playerMap.set(normalizePlayerName("Jaden Ivey"), 62);
playerMap.set(normalizePlayerName("Tim Hardaway Jr."), 63);
playerMap.set(normalizePlayerName("Tobias Harris"), 64);
playerMap.set(normalizePlayerName("Jalen Duren"), 65);
playerMap.set(normalizePlayerName("LaMelo Ball"), 66);
playerMap.set(normalizePlayerName("Tre Mann"), 67);
playerMap.set(normalizePlayerName("Brandon Miller"), 68);
playerMap.set(normalizePlayerName("Josh Green"), 69);
playerMap.set(normalizePlayerName("Miles Bridges"), 70);
playerMap.set(normalizePlayerName("Scottie Barnes"), 71);
playerMap.set(normalizePlayerName("Gradey Dick"), 72);
playerMap.set(normalizePlayerName("RJ Barrett"), 73);
playerMap.set(normalizePlayerName("Ochai Agbaji"), 74);
playerMap.set(normalizePlayerName("Jakob Poeltl"), 75);
playerMap.set(normalizePlayerName("Tyrese Maxey"), 76);
playerMap.set(normalizePlayerName("Jared McCain"), 77);
playerMap.set(normalizePlayerName("Paul George"), 78);
playerMap.set(normalizePlayerName("Caleb Martin"), 79);
playerMap.set(normalizePlayerName("Joel Embiid"), 80);
playerMap.set(normalizePlayerName("Jordan Poole"), 81);
playerMap.set(normalizePlayerName("Malcolm Brogdon"), 82);
playerMap.set(normalizePlayerName("Bilal Coulibaly"), 83);
playerMap.set(normalizePlayerName("Kyle Kuzma"), 84);
playerMap.set(normalizePlayerName("Alexandre Sarr"), 85);
playerMap.set(normalizePlayerName("Shai Gilgeous-Alexander"), 86);
playerMap.set(normalizePlayerName("Luguentz Dort"), 87);
playerMap.set(normalizePlayerName("Aaron Wiggins"), 88);
playerMap.set(normalizePlayerName("Jalen Williams"), 89);
playerMap.set(normalizePlayerName("Chet Holmgren"), 90);
playerMap.set(normalizePlayerName("Fred VanVleet"), 91);
playerMap.set(normalizePlayerName("Jalen Green"), 92);
playerMap.set(normalizePlayerName("Dillon Brooks"), 93);
playerMap.set(normalizePlayerName("Jabari Smith Jr."), 94);
playerMap.set(normalizePlayerName("Alperen Sengun"), 95);
playerMap.set(normalizePlayerName("Ja Morant"), 96);
playerMap.set(normalizePlayerName("Desmond Bane"), 97);
playerMap.set(normalizePlayerName("Jaylen Wells"), 98);
playerMap.set(normalizePlayerName("Jaren Jackson Jr."), 99);
playerMap.set(normalizePlayerName("Brandon Clarke"), 100);
playerMap.set(normalizePlayerName("James Harden"), 101);
playerMap.set(normalizePlayerName("Kris Dunn"), 102);
playerMap.set(normalizePlayerName("Norman Powell"), 103);
playerMap.set(normalizePlayerName("Derrick Jones Jr."), 104);
playerMap.set(normalizePlayerName("Ivica Zubac"), 105);
playerMap.set(normalizePlayerName("Jamal Murray"), 106);
playerMap.set(normalizePlayerName("Christian Braun"), 107);
playerMap.set(normalizePlayerName("Michael Porter Jr."), 108);
playerMap.set(normalizePlayerName("Peyton Watson"), 109);
playerMap.set(normalizePlayerName("Nikola Jokic"), 110);
playerMap.set(normalizePlayerName("Luka Doncic"), 111);
playerMap.set(normalizePlayerName("Kyrie Irving"), 112);
playerMap.set(normalizePlayerName("Klay Thompson"), 113);
playerMap.set(normalizePlayerName("PJ Washington"), 114);
playerMap.set(normalizePlayerName("Dereck Lively II"), 115);
playerMap.set(normalizePlayerName("Tyus Jones"), 116);
playerMap.set(normalizePlayerName("Devin Booker"), 117);
playerMap.set(normalizePlayerName("Bradley Beal"), 118);
playerMap.set(normalizePlayerName("Kevin Durant"), 119);
playerMap.set(normalizePlayerName("Jusuf Nurkic"), 120);
playerMap.set(normalizePlayerName("Chris Paul"), 121);
playerMap.set(normalizePlayerName("Devin Vassell"), 122);
playerMap.set(normalizePlayerName("Julian Champagnie"), 123);
playerMap.set(normalizePlayerName("Harrison Barnes"), 124);
playerMap.set(normalizePlayerName("Victor Wembanyama"), 125);
playerMap.set(normalizePlayerName("De'Aaron Fox"), 126);
playerMap.set(normalizePlayerName("Keon Ellis"), 127);
playerMap.set(normalizePlayerName("DeMar DeRozan"), 128);
playerMap.set(normalizePlayerName("Keegan Murray"), 129);
playerMap.set(normalizePlayerName("Domantas Sabonis"), 130);
playerMap.set(normalizePlayerName("Mike Conley"), 131);
playerMap.set(normalizePlayerName("Anthony Edwards"), 132);
playerMap.set(normalizePlayerName("Jaden McDaniels"), 133);
playerMap.set(normalizePlayerName("Julius Randle"), 134);
playerMap.set(normalizePlayerName("Rudy Gobert"), 135);
playerMap.set(normalizePlayerName("Anfernee Simons"), 136);
playerMap.set(normalizePlayerName("Shaedon Sharpe"), 137);
playerMap.set(normalizePlayerName("Toumani Camara"), 138);
playerMap.set(normalizePlayerName("Jerami Grant"), 139);
playerMap.set(normalizePlayerName("Deandre Ayton"), 140);
playerMap.set(normalizePlayerName("Keyonte George"), 141);
playerMap.set(normalizePlayerName("Collin Sexton"), 142);
playerMap.set(normalizePlayerName("Lauri Markkanen"), 143);
playerMap.set(normalizePlayerName("John Collins"), 144);
playerMap.set(normalizePlayerName("Walker Kessler"), 145);
playerMap.set(normalizePlayerName("Dejounte Murray"), 146);
playerMap.set(normalizePlayerName("CJ McCollum"), 147);
playerMap.set(normalizePlayerName("Brandon Ingram"), 148);
playerMap.set(normalizePlayerName("Trey Murphy III"), 149);
playerMap.set(normalizePlayerName("Yves Missi"), 150);

const getPlayerIdByName = (playerName) => {
  const normalizedPlayerName = normalizePlayerName(playerName);
  return playerMap.get(normalizedPlayerName) || null; // Returns null if the player doesn't exist
};

const PlayerDetail = () => {
  const { id } = useParams();  // 'id' is the normalized player name from the URL
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const playerId = getPlayerIdByName(id);  // Get the player ID based on the normalized name from the URL

    if (playerId === null) {
      setError('Player not found');
      setLoading(false);
      return;
    }

    console.log(`Fetching player details for player ID: ${playerId}`);

    // Fetch player data based on the player ID (adjust API endpoint as needed)
    fetch(`http://localhost:3001/api/players/${playerId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPlayer(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching player details:', err);
        setError('Error fetching player details');
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
    <div className="player-detail">
      <Navbar />
      <h1>{player.first_name} {player.last_name}</h1>
      <p><strong>Team:</strong> {player.team}</p>
      <p><strong>Position:</strong> {player.position}</p>
      <p><strong>Height:</strong> {player.height}</p>
      <p><strong>Weight:</strong> {player.weight}</p>
    </div>
  );
};

export default PlayerDetail;

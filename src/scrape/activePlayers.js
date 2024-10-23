// This code uses Node.js with the 'axios' and 'cheerio' libraries for HTTP requests and HTML parsing.
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArray = Array.from(alphabetString);

let playerNames = [];

// Function to convert an array to a string
function arrayToString(array) {  
    let resultString = "";  
    for (let element of array) {  
        resultString += String(element);   
    }
    return resultString;
}

const url = "https://en.hispanosnba.com/players/nba-active/";
const fileName = 'playerNames.json';

async function fetchPlayerNames() {
    for (let letter of alphabetArray) {
        const response = await axios.get(url + letter);
        const data = response.data;
        const $ = cheerio.load(data);
        const playerTags = $('th.tdl');
        const players = [];

        playerTags.each((index, tag) => {
            const player = $(tag).children().first().text();
            players.push(player);
        });

        playerNames = playerNames.concat(players);
    }

    fs.writeFileSync(fileName, JSON.stringify(playerNames, null, 6));
}

fetchPlayerNames();
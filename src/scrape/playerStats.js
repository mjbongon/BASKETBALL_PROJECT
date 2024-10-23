const fs = require('fs');
const axios = require('axios');

function plusForSpaceList(l) {
    return l.map(name => name.replace(/ /g, '+'));
}

const FILE = 'playerNames.json';
const names = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const url = 'https://www.balldontlie.io/api/v1/players?search=';
const apiNames = plusForSpaceList(names);
const players = [];
let count = 0;
const test = [];

async function fetchPlayers() {
    for (const name of apiNames) {
        let r = await axios.get(url + name).catch(err => {
            console.error(err);
            return { status: err.response ? err.response.status : 500 };
        });
        
        console.log(r);
        if (r.status === 429) {
            await new Promise(resolve => setTimeout(resolve, 60000));
            r = await axios.get(url + name).catch(err => {
                console.error(err);
                return { status: err.response ? err.response.status : 500 };
            });
            console.log(r);
        } else {
            if (r.status !== 200) {
                console.log(r.status);
            }
        }
        test.push(r);
    }

    for (const i of test) {
        if (i.status === 200) {
            players.push(i.data);
            console.log(count);
            count++;
        } else {
            console.log(i.status);
            count++;
        }
    }

    fs.writeFileSync('playerStats.json', JSON.stringify(players, null, 6));
}

fetchPlayers();


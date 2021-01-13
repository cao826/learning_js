'use strict';

                      /* Section 10 Coding Challenge 1 */
// DATA FOR CODING CHALLENGE
const game = {
team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
[
'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
], [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
], ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
}, };

// Starting solutions:
// 1.
// const players1 = game.players[0];
// const players2 = game.players[1];

// this was wrong. the right way:
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldplayers] = players1; //this is the REST syntax
//3. 
const allPlayers = [...players1, ...players2];
//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5.
const {team1, x: draw, team2} = game.odds;
// 6.
function  printGoals(...players) {
    let numGoalsinplayers = 0;
    for (playername of players){
        console.log(playername);
        if (new Set(game.scored).contains(playername)) {
            numGoalsinplayers++;
        }

    }
    console.log(`There were ${numGoalsinplayers} goals scored amongst these players`);
}
//console.log(team1, draw, team2);

// 7.
//team1 < team2 && console.log('Team 1 is more likely to win');

                            /* Coding Challenge 2 */
// 1.

for(const [index, player] of game.scored.entries()) {
   console.log(`Goal ${index +1}: ${player}`);
}

// 2.
let avg = 0;
for(const key of Object.keys(game.odds)) {
    avg += game.odds[key];
}
avg /= 3;
console.log(avg);

// 3.

for (const key of Object.keys(game.odds)) {
    let outcome = game[key] ?? 'draw';
    if (outcome != 'draw')
    { outcome = 'victory ' + outcome;}
    console.log(`Odd of ${outcome}: ${game.odds[key]}`);
}

const gameEvents = new Map([ 
[17, '⚽ GOAL'],
[36, '🔁 Substitution'],
[47, '⚽ GOAL'],
[61, '🔁 Substitution'],
[64, '🔶 Yellow card'], 
[69, '🔴 Red card'],
[70, '🔁 Substitution'], 
[72, '🔁 Substitution'],
[76, '⚽ GOAL'], 
[80, '⚽ GOAL'],
[92, '🔶 Yellow card']
]);

// 1.

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.

gameEvents.delete(64);

// 3.

let newKeys = [...gameEvents.keys()];
let sumDiff = 17;
for (let i = 0; i < (newKeys.length - 1); i++) {
    sumDiff += (newKeys[i+1] - newKeys[i]);
}
const eventAvg = Math.trunc(sumDiff/10)
console.log(eventAvg);

// 4.

for(let [key, value] of gameEvents.entries()) {
    let outStr = `${key}: ${value}`;
    (key > 45) ? outStr = '[SECOND HALF] ]' + outStr : outStr = '[FIRST HALF] ' + outStr;
    console.log(outStr);
}


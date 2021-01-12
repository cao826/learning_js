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
console.log(team1, draw, team2);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');

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

                            /* Coding Challenge 4 */

// Starter code
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
/*
const stripSpaces = function () {
    const trimmedInput = document.querySelector('textarea').value.trim();
    document.querySelector('textarea').value = trimmedInput;
}

const fixLastWord = function (word) {
    console.log('we enter the fix last word fn');
    const correctFirstChar = word[0].toUpperCase();
    const correctRestOfWord = word.slice(1).toLowerCase();
    const correctLastWord = correctFirstChar + correctRestOfWord;
    return correctLastWord;
}


const snakeCaseToCamelCaseTwoWords = function (word) {
    console.log('We enter the word fixing function');
    console.log(word);
    let wordsArray = word.trim().split('_');
    console.log(`after splitting by _: ${wordsArray}`);
    let lastWord = wordsArray[1];
    console.log(`The last word: ${lastWord}`);
    const camelLastWord = fixLastWord(lastWord);
    console.log(`The fixed last word: ${camelLastWord}`);
    wordsArray[1] = camelLastWord;
    const camelWord = wordsArray.join('');
    console.log(`the fixed word: ${camelWord}`);
    return camelWord;

}

const addChecks = function (word, num) {
    let checkedWord = word;
    for (let i = 0; i < num; i++) {
        checkedWord += '✅'
    }
    return checkedWord;
}


const cleanInput = function () {
    console.log('We enter the cleanInput function');
    let trimmedInputText = document.querySelector('textarea').value.trim();
    console.log(`after first trim: ${trimmedInputText}`);
    let trimmedTextArray = trimmedInputText.split('\n');
    console.log(`trimmedTextArray: ${trimmedTextArray}`);
    console.log('We enter the for loop:');
for(let i = 0; i <= (trimmedTextArray.length - 1); i++) {
    const camelCaseWord = snakeCaseToCamelCaseTwoWords(trimmedTextArray[i]);
    const fixedWord = addChecks(camelCaseWord, (i+1));
    trimmedTextArray[i] = fixedWord;
    }
    const fixedInputText = trimmedTextArray.join('\n');
    console.log(fixedInputText);
    document.querySelector('textarea').value = fixedInputText;
    return fixedInputText;
}



document.querySelector('button').addEventListener('click', cleanInput);
*/

const readInput = function () {
    let textInput = document.querySelector('textarea').value;
    console.log(textInput);
    return textInput;
}


const splitByCarriageReturn = function () {
    let unsplitInput = readInput();
    console.log(unsplitInput.split('\n'));
    return unsplitInput.split('\n');
}

/* Everyting from here on out should take in the split array */

const  trimByLine = function (txtArray){
    for (let i = 0; i < txtArray.length; i++) {
        txtArray[i] = txtArray[i].trim();
    }
    console.log(txtArray);
    return txtArray;
}

const fixLastWord = function (word) {
    console.log('we enter the fix last word fn');
    const correctFirstChar = word[0].toUpperCase();
    const correctRestOfWord = word.slice(1).toLowerCase();
    const correctLastWord = correctFirstChar + correctRestOfWord;
    return correctLastWord;
}


const snakeCaseToCamelCaseTwoWords = function (word) {
    console.log('We enter the word fixing function');
    console.log(word);
    let wordsArray = word.trim().split('_');
    console.log(`after splitting by _: ${wordsArray}`);
    let lastWord = wordsArray[1];
    console.log(`The last word: ${lastWord}`);
    const camelLastWord = fixLastWord(lastWord);
    console.log(`The fixed last word: ${camelLastWord}`);
    wordsArray[1] = camelLastWord;
    wordsArray[0] = wordsArray[0].toLowerCase();
    const camelWord = wordsArray.join('');
    console.log(`the fixed word: ${camelWord}`);
    return camelWord;

}

const camelCaseAllWords = function (txtArray){
    for (let i = 0; i < txtArray.length; i++) {
        txtArray[i] = snakeCaseToCamelCaseTwoWords(txtArray[i]);
    }
    console.log(`Array with all words camelCase: ${txtArray}`);
    return txtArray;
}

const getTotalPadNumber = function (txtArray){
    let maxLength = 0;
    for(let word of txtArray) {
        console.log(`length of word ${word} is ${word.length}`);
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    console.log(`the total pad length is ${(maxLength + 2)}`);
    return (maxLength + 2);
}

const padWord = function (totalPadNumber, word){
    let paddedWord = word.padEnd(totalPadNumber);
    console.log(`padded word: ${paddedWord}`);
    return paddedWord;
}

const padAllLines = function (totalPadNumber, txtArray){
    for (let i = 0; i < txtArray.length; i++){
        txtArray[i] = padWord(totalPadNumber,txtArray[i]);
    }
    console.log(`array after padding all words: ${txtArray}`);
    return txtArray;
}

const addChecks = function (word, num) {
    let checkedWord = word;
    for (let i = 0; i < num; i++) {
        checkedWord += '✅'
    }
    return checkedWord;
}

const checkOffArray = function (txtArray){
    for(let i = 0; i < txtArray.length; i++) {
        txtArray[i] = addChecks(txtArray[i], (i+1));
    }
}

const doThing = function () {
    let txtInput = readInput();
    let txtArray = splitByCarriageReturn();
    trimByLine(txtArray);
    camelCaseAllWords(txtArray);
    const totalPadNumber = getTotalPadNumber(txtArray);
    padAllLines(totalPadNumber, txtArray);
    checkOffArray(txtArray);
    const cleanedInput = txtArray.join('\n');
    document.querySelector('textarea').value = cleanedInput;

}



document.querySelector('button').addEventListener('click', doThing);



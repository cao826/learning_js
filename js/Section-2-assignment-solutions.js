// SOLUTION FOR LECTURE 2 ASSIG

const isIsland = false;
let language;
let country = 'United States of America';
let population = 300900000;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// Start lecture 3 assignment

language = 'english';

// start of Basic operators lecture assignment

// 1

let eachHalfHas = (population / 2);

// 2 

console.log((population + 1));

// 3, 4
//
let moreThanFinland = true;
let moreThanAverage = true;

//5
//
let description = `${country} is in North America, and its ${population} people speak ${language}`;


// 5 above solves the assignment from strings and template literals assignment

// if / else statements lecture assignment

//1 

if (population > (33 * (10**6))) console.log(`${country} has an above average population`);
else console.log(`${country} has a lower than average popoulation`);

//

if ( (population < (50 * (10**6))) && (isIsland === false)) {
    console.log(`${country} is for you!`);
} else {
    console.log(`${country} does not meet your criteria`);
}

// switch statement asssignment 
//
switch(language){
    case 'chinese':
        console.log('Most number of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}


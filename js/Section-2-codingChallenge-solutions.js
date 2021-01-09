// Javascript fundamentals - Part 1 coding challenge solutions

/*
// Coding challenge 1

const markHeight = 1.69;
const markMass = 78;

const johnHeight = 1.95;
const johnMass = 92;

function calculateBmi(height, mass) {
    return ( mass / ( height * height ) );
    }

const markHigherBMI = ( calculateBmi(markHeight, markMass) > calculateBmi(johnHeight, johnMass));

console.log(markHigherBMI);
*/

// Coding Challenge 2

// too boring. skip to 3.


//                             coding challenge 3

// data first:

const data1 = {
    dolphinsScores:  [96, 108, 89],
    koalasScores: [88, 91, 110]
}

const data2 = {
    dolphinsScores:  [97, 112, 101],
    koalasScores: [109, 95, 123]
}

const data3 = {
    dolphinsScores:  [97, 112, 101],
    koalasScores: [109, 95, 106]
}

function getAvg(lst){
    let sum = 0;
    for (const val of lst){
        sum += val;
    }
    return ( sum / (lst.length));
}

function getAvgScores(data){
    data['dolphinsAvg'] = getAvg(data.dolphinsScores);
    data['koalasAvg'] = getAvg(data.koalasScores);

}

function checkMins(data){
    if ((data.dolphinsAvg < 100) && (data.koalasAvg < 100)) console.log('No one wins!');
}

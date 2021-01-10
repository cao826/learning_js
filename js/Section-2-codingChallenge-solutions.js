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

/*

function getAvg(lst){
    let sum = 0;
    for (const val of lst){
        sum += val;
    }
    return ( sum / (lst.length));
}

class GymMeet {
    constructor(data) {
        this.dolphinsScores = data.dolphinsScores;
        this.koalasScores = data.koalasScores;

        this.dolphinsAvg = getAvg(this.dolphinsScores);
        this.koalasAvg = getAvg(this.koalasScores);

    }
    checkNoneQualify() {
        if ((this.koalasAvg) < 100 && (this.dolphinsAvg < 100)) {
            return true;
        }
    }
    checkIsDraw() {
        if (this.koalasAvg == this.dolphinsAvg) {
            return true;
        } else {
            return false;
        }
    }
    findWinningTeam() {
        (this.koalasAvg > this.dolphinsAvg) ? console.log('the koalas win the meet!') : console.log('the dolphins win the meet!');
    }
    adjudicate(){
        if (this.checkNoneQualify()) {
            console.log('Neither team qualified');
            return;
            }
        if (this.checkIsDraw()) {
            console.log('The teams have tied!');
            return;
        }
        this.findWinningTeam();
    }
}

const meet1 = new GymMeet(data1);
meet1.adjudicate();

const meet2 = new GymMeet(data2);
meet2.adjudicate();

const meet3 = new GymMeet(data3);
meet3.adjudicate();
*/


        /* Section 10: A Closer Look at Functions: Default Parameters */ 

function print(str = 'You forgot your string!') { // this is the new, ES6 way to do it, just like python.
    str = str || 'You forgot your string!'; // the old way, before es6
    console.log(str);
}

print('But this time, I did not forget my string.');

// Here is a fn to use prev defined params to create default values

function billStatement(
    bill,
    tip = (0.15 * bill),
    total = (bill + tip),
) {
    const statement = `The bill is ${bill}, the tip is ${tip}, and the total is ${total}`;
    print(statement);
}
billStatement(400);

// if you want to skip a parameter with a default value, put undefined.
// As a best practice, put the parameters with default options last...

/* Section 10: A Closer Look at Functions: How Passing Parameters Works: Value vs. Reference  */

const passenger = {
    name: 'Drew Barrymore',
    age: 200780
};

const flight = 'LH234';

function boardingStatement(passenger, flight) {
    passenger.name = 'Ms. ' + passenger.name;
    print(`${name} is boarding flight ${flight}`);
}

boardingStatement(passenger, flight);
print(flight); // this value does not change. It was passed by value
print(passenger.name); //this value does change. It was passed by reference.

/* Section 10: A Closer Look at Functions: First-Class and Higher-Order Functions */

// We can call methods on functions when they are first class functions.
//
// higher order functions can accept a fn as a param, OR return a function.
// higher order function require first class functions

/* Section 10: A Closer Look at Functions: Functions Accepting Callback Functions */

const mult = function (a, b) {
    return a * b;
}

const add = function (a, b) {

}

function performOperation(a, b, operation) {
    return operation(a, b);
}

print(performOperation(5, 3, mult));

// functions also have properties. There is a name property.
//
// forEach method looks hella cool

  /* Section 10: A Closer Look at Functions: Functions Returning Functions */

const custMult = (num) =>  (a) => (a * num);

const twice = custMult(2);
print(twice(4));

    /* Section 10: A Closer Look at Functions: The call and apply Methods */

// hard. will do later

         /* Section 10: A Closer Look at Functions: The bind Method */

const additionInstance1 = {
    a: 7,
    b: 5,
    add() {
        return (this.a + this.b);
    }
};


//print(additionInstance1.add());

const additionInstance2 = {
    a:37,
    b:55,
}

const adder2 = additionInstance1.add.bind(additionInstance2);
print(adder2());

// bind method is used a lot with event handlers. 
// also used for "partial application" (preset a param)


// here is an example of binding the addition function to be general function and to always add three

const divide = (a, b) => b/a;

const divideByThree = divide.bind(null, 3);
console.log(divideByThree(15));

/* Section 10: A Closer Look at Functions: Immediately Invoked Function Expressions */

// done by wrapping everything aroudn parenthesis

(function once() {
    print('this function cannot be called again!')
})();

// everything inside of the IIFE cannot be accessed in the gloabal scope

             /* Section 10: A Closer Look at Functions: Closures */

// closures allow functions to 'remember' ther variables'
//
// A function has access to the variable environment of the execution context in which it was created, EVEN AFTER THAT CONTEXT IS POPPED OFF THE STACK

// the closure is exactly this connection that allows this to happen


                          /* Section 9, lecture 120 */

const airline = 'EVIL Airlines';
const plane = 'EVIL331';
console.log('ABC'[0]);
console.log('a very long string. Like, it is very very long. SO long. like, long ebough to reallly bore you. In reality, I should have used lorem ipsum.'.length);

// some array-string methods
console.log(airline.indexOf('L')); // returns the first occurence.
console.log(airline.lastIndexOf('nes'));

// why are indexes useful? -- extracting with slice. But, we need indecies for this

console.log(airline.slice(4, 7)); // stoops right before the end index.

// cool way to get a word
console.log(airline.slice(0, airline.indexOf(' ')));
print(airline.slice(-1));

const checkMiddleSeat = function (seat) {
    // suppose 'B' and 'E' are middle seats 
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        print('You got unlucky!');
    } else {
        print('You got lucky!');
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Javascript automatically turns a string literal into a string object with the same value.

print(airline.toLowerCase());
print(airline.toUpperCase());

const properUser = 'cao826';
const userInput = 'Cao826 \n';

const cleanedUserInput = userInput.toLowerCase().trim();

const priceUk = "288,07£";
const priceUs = priceUk.replace('£', '$').replace(',', '.');

print(priceUs);

const doorStatement = 'door door door door door door door door door door lmao';

const gateStatement = doorStatement.replace(/door/g, 'gate');
print(gateStatement);

const aBigPath = '/Library/ColorSync/Profiles/';
const newPath = aBigPath.split('/');
print(aBigPath);
print(newPath);

const strFromArray = ['I', 'am', 'inevitable'].join(' ');
print(strFromArray);

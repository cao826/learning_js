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

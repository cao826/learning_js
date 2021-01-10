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

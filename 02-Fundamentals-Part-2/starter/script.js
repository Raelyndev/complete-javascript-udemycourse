/*
// activating strict mode

'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

const interface = 'Audio';

// Functions

function functionName() {
     console.log('My name is Jonas');
}

// calling / running / invoking the function 
functionName();
functionName();
functionName();

function fruitProcessor(apples, oranges) {
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
     return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// Function Declaration

function calcAge1(birthYear) {
     return 2021 - birthYear;
}
const age1 = calcAge1(2000);


// Function Expression
const calcAge2 = function (birthYear) {
     return 2020 - birthYear;
}
const age2 = calcAge1(1987);


console.log(age1, age2);
*/



// Arrow Function 
/*
const calcAge3 = birthYear => - 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetire = (birthYear, firstName) => {
     const age = 2037 - birthYear;
     const retirement = 65 - age;
     //return retirement;
     return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetire(1991, 'Jonas'));
console.log(yearsUntilRetire(1980, 'bob')); 
*/


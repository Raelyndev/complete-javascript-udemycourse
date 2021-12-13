/* 
let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);



// Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

 // Let, const and Var

 /* 
let age = 30;
age = 31;

const birthYear = 1991; 
birthYear = 1990;

const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Brown';
console.log(lastName);
*/
//math operators

/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2  to the power of 3 (3 = 2 * 2 * 2)

const firstName = 'Raelyn';
const lastName = 'Brown';
console.log(firstName + ' ' + lastName)

//assignment operators

let x = 10 + 5; // 15 
x += 10; // x = x * 10 (25)
x += 4; // x = x * 4 = 100
x++; // x = x + 1 = 
x--;
x--;
console.log(x);

//comparison operator

console.log(ageJonas > ageSarah); // jonas age 46 sarah 18 // booleans
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operation Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

////////////////////////////////////
// Coding Challenge #1


/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀


//TEST DATA 1

let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);


//TEST DATA 2

markMass = 95;
markHeight = 1.88;
markBMI = markMass / markHeight ** 2;


johnMass = 85;
johnHeight = 1.76;
johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job +'!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with multiple
lines`);


const age = 15;

if(age >= 18) {
     console.log(`Sarah can start driving license`);
} else {
     const yearsLeft = 18 - age;
     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);

}

const birthYear = 2012; 

let century;
if(birthYear <= 2000) {
      century = 20;
} else {
      century = 21;
}
console.log(century);
*/


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀

let markMass = 78;
let markHeight = 1.69;
let markBMI = markMass / markHeight ** 2;

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = johnMass / johnHeight ** 2;


if(markBMI > johnBMI){
     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}) `);
} else {
     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}


// type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));

console.log(String(23), 23);

// type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' -'10' - 3);
console.log('23' * '2'); 

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
     console.log(`Don't spend it all`);
} else {
     console.log(`You should get a job`);
}

let height;
if(height) {
     console.log(`YAY! Height is defined`)
} else {
     console.log(`Height is UNDEFINED`);
}
*/

const age = '18';
if(age === 18) console.log(`You just became an adult (strict)`);
if (age == 18) console.log(`You just became an adult (loose)`);


const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23) { //23 === 23
     console.log(`Cool! 23 is an amazing number`);
} else if(favorite === 7) {
     console.log(`7 is also a cool number`);
}  else if(favorite === 9) {
     console.log(`9 is also a cool number`);
} else {
     console.log(`Number is not 23, 7 or 9`);
}

if(favorite !== 23) console.log(`Why not 23`);
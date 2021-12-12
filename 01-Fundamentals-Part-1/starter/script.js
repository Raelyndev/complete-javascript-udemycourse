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

*/

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
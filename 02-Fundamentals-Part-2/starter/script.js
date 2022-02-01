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



// Functions Calling Other Functions

function cutFruitPieces(fruit) {
     return fruit * 4;
}

function fruitProcessor(apples, oranges) {
     const applePieces = cutFruitPieces(apples);
     const orangePieces = cutFruitPieces(oranges);
     
     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} Pieces of oranges.`
     return juice;
}

console.log(fruitProcessor(2,3));


// Function Review

const calcAge = function(birthYear) {
     return 2037-birthYear;
}

const yearsUntilRetire = function (birthYear, firstName)  {
     const age = calcAge(birthYear);
     const retirement = 65 - age;

     if(retirement > 0) {
          console.log(`${firstName} retires in ${retirement} years`);
          return retirement;
     } else {
          console.log(`${firstName} has already retired`);
          return -1;
     }

}
console.log(yearsUntilRetire(1991, 'Jonas'));
console.log(yearsUntilRetire(1970, 'Mike'));


////////////// Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 

§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test 1
let scoredolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoredolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
     if (avgDolphins >= 2 * avgKoalas) {
          console.log(`Dolphins will win the trophy(${avgDolphins} vs. ${avgKoalas})`);
     } else if (avgKoalas >= 2 * avgDolphins) {
          console.log(`Koalas will win the trophy(${avgKoalas} vs. ${avgDolphins})`);
     } else {
          console.log('No team wins...');
     }
}
checkWinner(scoredolphins, scoreKoalas);

checkWinner(500, 200);

// Test 2

scoredolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoredolphins, scoreKoalas);
 checkWinner(scoreKoalas, scoredolphins);




// Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020) // specify values

console.log(friends[0])
console.log(friends[2])

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmidt', 2037 - 1991, 'teacher', friends];
console.log(jonas);


//Exercise
const calcAge = function(birthYear) {
     return 2037-birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);



// Basic Array Operations (methods)

//// Add elments 

// push method
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// unshift method
friends.unshift('John');
console.log(friends);


//// Remove elements

friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);


console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
     console.log('You have a friend called Steven');
};


*/

////////////// Challenge #2

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 

GOOD LUCK 


const calcTip = function (bill) {
     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

*/


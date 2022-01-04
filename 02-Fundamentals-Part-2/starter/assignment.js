/*


// Values and Variables

const country = 'United States';
const continent = "North America";
let population = 200;
//console.log(country, continent, population);


// Data Types

const isIsland = false;
const language = 'English';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// let, const, var
 
console.log(isIsland, population, country, continent, language);

// Basic Operations

const halfPopulation = population / 2;
console.log(halfPopulation);

population++;

console.log(population);

const averagePopulation = 33;
console.log(halfPopulation > averagePopulation);

// Strings and Template Literals

const description = `${country} is in ${continent} and it's ${population} million people speak ${language}`;

console.log(description);

if(population >= 33) {
     console.log(`${country}'s population is above average`);
} else {
     console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

// Type Conversion and Coercion 
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // boolean false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


// Equality Operators: == vs. ===

const numNeighbors = prompt(`How many neighbor countries does your country have?`);



if(numNeighbors === 1) {
     console.log(`Only 1 border!`);
} else if(numNeighbors > 1) {
     console.log(`More than 1 border`);
} else {
     console.log(`No borders`);
}

// Logical Operators

if(language === 'English' && population < 50 && !isIsland) {
     console.log(`You should live in the ${country}`);
} else {
     console.log(`This country does not fit your criteria...`);
}


// Conditional/Ternary Operators 

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);


// Functions

function describeCountry(country, population, capitalCity) {
     return `${country} has ${population} million people and it's capital city is ${capitalCity}.`
}

const describeUnitedStates = describeCountry('United States', 200, 'Dallas');
const describeFinland = describeCountry('Finland', 1, 'Who knows');
const describeCanada = describeCountry('Canada', 5, 'Toronto');

console.log(describeUnitedStates, describeFinland, describeCanada);



// Function Delcaration and Expression

// Function Declaration

function percentageOfWorld(population) {
     return (population / 7900) * 100;
}

const unitedPop = percentageOfWorld(200);
const finlandPop = percentageOfWorld(2);
const canadaPop = percentageOfWorld(20);

console.log(unitedPop, finlandPop, canadaPop);

// Function expression

const percentageOfWorld2 = function (population) {
     return (population / 7900) * 100;
}

const unitedPop2 = percentageOfWorld(10);
const finlandPop2 = percentageOfWorld(500);
const canadaPop2 = percentageOfWorld(5);

console.log(unitedPop2, finlandPop2, canadaPop2);


// Arrow Function

const percentageOfWorld3 = population => (population/7900) * 100;

const unitedPop2 = percentageOfWorld3(10);
const finlandPop2 = percentageOfWorld3(500);
const canadaPop2 = percentageOfWorld3(5);

console.log(unitedPop2, finlandPop2, canadaPop2);
*/

console.clear();

/* -------- Destructuring Assignment - Objects --------- */

const tree = {
  name: "oak",
  age: 1200,
  scientificName: "quercus",
};

/*
const name = tree.name;
const age = tree.age;
const scientificName = tree.scientificName;
*/

// Destructuring an object
// const {name, age, scientificName} = tree;

// Renaming
const { name: colloquialName } = tree;
// console.log(colloquialName);

// Default value
const { keepsLeavesInWinter = false } = tree;
// console.log(keepsLeavesInWinter);
// console.log(tree);

// Rest syntax in object destructuring
const { name, ...information } = tree;

// console.log(name);
// console.log(information);

/* -------- Destructuring Assignment - Arrays --------- */

const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale"];

// Destructuring an array
// const [lion, tiger, penguin, bear, whale] = animals;

// console.log(tiger);

// Ignoring values
// const [lion, , penguin, bear, whale] = animals;

// console.log(penguin);
// console.log(tiger); // not defined

// Rest syntax in array destructuring
const [lion, tiger, penguin, ...rest] = animals;
console.log("lion: ", lion);
console.log("tiger: ", tiger);
console.log("rest[1]: ", rest[1]);

/* ---------------- Rest Syntax ----------------- */

function showZooAnimals(...allAnimals) {
  console.log("allAnimals: ", allAnimals);
  return `My zoo consists of the following animals: ${allAnimals.join(", ")}.`;
}

console.log("showZooAnimals: ", showZooAnimals("Monkey", "Crocodil", "Pig"));

/* ---------------- Spread Syntax ----------------- */

console.log("showZooAnimals: ", showZooAnimals(lion, tiger, ...rest));

const newAnimals = ["Whale", "Dolphin", "Wolf"];

console.log("showZooAnimals: ", showZooAnimals(...newAnimals));

// Add another value

const animalFood = ["Meat", "Apple", "Banana", "Carrot"];

const newAnimalFood = "Fish";

const allAnimalFood = [...animalFood, newAnimalFood];

console.log("allAnimalFood: ", allAnimalFood);

// Spread for concatenating two arrays

const allMyAnimals = [...newAnimals, ...animals];

console.log("allMyAnimals: ", allMyAnimals);

console.log("showZooAnimals: ", showZooAnimals(...allMyAnimals));

// PART 1

let bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];

console.log(bucketList);

// PART 2

let newYearsResolutions = ['one', 'two', 'three'];

console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]); // undefined

// PART 3

let newYearsResolutions = ['one', 'two', 'three'];

console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]); // undefined

newYearsResolutions[1]= "Learn a new language";
console.log(newYearsResolutions.length);

// PART 4 push method

let newYearsResolutions = ['one', 'two', 'three'];

console.log(newYearsResolutions);

let listItem = newYearsResolutions[0];
console.log(listItem);

console.log(newYearsResolutions[2]);
console.log(newYearsResolutions[3]); // undefined

newYearsResolutions[1]= "Learn a new language";
console.log(newYearsResolutions.length);

newYearsResolutions.push('four', 'five');
console.log(newYearsResolutions);

newYearsResolutions.pop();

// PART 5 more array methods

let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4)); // output [ 'bananas', 'coffee beans', 'brown rice' ]

// PART 6

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Mayo');
console.log(condiments);

condiments = ['a string'];

utensils.pop();
console.log(utensils);

utensils = ['spear']; //error bc const cannot be reasigned


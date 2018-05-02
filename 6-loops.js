// Part 1

let cookies = ['chocolate chip', 'raisin', 'macadamia nut', 'sugar'];

for (let i = 0; i<cookies.length; i++) {
  console.log('I would love to eat a ' + cookies[i] + ' cookie right now!');
}

// I would love to eat a chocolate chip cookie right now!
// I would love to eat a raisin cookie right now!
// I would love to eat a macadamia nut cookie right now!
// I would love to eat a sugar cookie right now!

// Part 2

let vacationSpots = ['Canada', 'USA', 'Mountains'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// Part 3

let vacationSpots = ['Canada', 'USA', 'Mountains'];
for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

// I would love to visit Canada
// I would love to visit USA
// I would love to visit Mountains

// Part 4 loop backwards

let vacationSpots = ['Canada', 'USA', 'Mountains'];
for (let vacationSpotIndex = vacationSpots.length; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

// I would love to visit undefined
// I would love to visit Mountains
// I would love to visit USA
// I would love to visit Canada

// Nice work Except we printed I would love to visit undefined.
// This happened because the length of vacationSpots is 3 so the loop attempted to print vacationSpots[3] which does not exist
// Because arrays start counting at 0, the start condition needs to be the length of the vacationSpots array minus 1.

let vacationSpots = ['Canada', 'USA', 'Mountains'];
for (let vacationSpotIndex = vacationSpots.length-1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
}

// I would love to visit Mountains
// I would love to visit USA
// I would love to visit Canada

// Part 5 nested for loops

let myPlaces = ['Canada', 'USA', 'Grand Canyon'];
let friendPlaces = ['Paris', 'Canada', 'Chicago'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
       console.log(myPlaces[myPlacesIndex]);
    }
  }
}

// Part 6 while loop

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log('Found a spade');

// Part 7 infinite loops

let flag = true;
let counter = 0;
while(flag === true){
  console.log(counter);
  counter+=1;
  if (counter === 37){
    break;
  }
}

//runs until 37, makes sure loop is not infinite. if we removed condition to break at 37 and leave it infinite, then we would have an infinite loop

// for loops allow us to repeat a block of code a known amount of times.
// We can use a for loop inside another for loop to compare two lists.
// while loops are for looping over a code block an unknown amount of times.
// Infinite loops occur when stop conditions are never met

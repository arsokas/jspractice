// // PART 1

let isSoccerFan = true;
if(isSoccerFan === true){
  console.log('Goal!');
}
else {
  console.log('No Goal!');
}


let fan = 1;
if(fan == '1'){ // 2 = don;t care about the type, 3 = checks for type
  console.log('It is string')
}else{
  console.log('it is not a tring')
}

// // PART 2 and 3

// /* All false conditions below

//     false
//     0 and -0
//     "" and '' (empty strings)
//     null
//     undefined
//     NaN (Not a Number)
//     document.all (something you will rarely encounter)
// */

let wordCount = 1;
console.log(typeof wordCount.toString())

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'Hello';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// PART 3

let hungerLevel = 7;

if(hungerLevel >= 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

// // PART 4

let moonPhase = 'full';

if(moonPhase === 'full'){
  console.log('Howl!');
} else {
  console.log('I swear I am not a werewolf.');
}

// // PART 5

let moonPhase = 'mostly full';

if (moonPhase === 'full') {
  console.log('Howl!');

} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
  
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
  
} else {
  console.log('Invalid moon phase');
}

// // PART 6 

let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' || isFoggyNight === true) {
  console.log('Howl!');
}

else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
  
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
  
} else {
  console.log('Invalid moon phase');
}

// // PART 7 

let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
  	console.log('Howl!');
  	break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier.');
  	break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}

// // PART 8

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

let val;

val = document.querySelector('#greeting')

console.log(val)
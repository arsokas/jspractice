// PART 1 - Global Scope

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());

// PART 2 

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);

// PART 3 - Block Scope

const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    console.log(lightWaves);
  };
  
  visibleLightWaves();
  console.log(lightWaves);

// PART 4

const visibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if(region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  visibleLightWaves();

// PART 5 includes for loop

const starCount = () => {
    let i = 5;
    console.log(i);
    for (let i = 0; i < 12; i++) {
      console.log(i);
    };
  };
  
  starCount();
  console.log(i);

  
//   Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
//   Global Scope refers to variables that are accessible to every part of the program.
//   Block Scope refers to variables that are accessible only within the block they are defined.

// Part 1

// Modules are reusable pieces of code that can be exported from one program and imported for use in another

// find, fix, and debug code more easily;
// reuse and recycle defined logic in different parts of our application;
// keep information private and protected from other modules;
// and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

// Part 2 - module.exports

// The pattern we use to export modules is thus:

// 1.Define an object to represent the module.
// 2.Add data or behavior to the module.
// 3.Export the module.

let Airplane = {};
Airplane.myAirplane = "StarJet";
module.exports = Airplane;

// Part 3 - require() (we use it to import the module we exported)

// require() is a JavaScript function that enables a module to load by passing in the module's filepath as a parameter.

const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

// Part 4 module.exports II

// 2-airplane.js

let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// 2-missionControl.js

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());

// Part 5 export default

let Airplane = {
    availableAirplanes: [
      {
        name: 'AeroJet',
        fuelCapacity: 800
      },
      {
        name: 'SkyJet',
        fuelCapacity: 500
      }
    ]
  };
  
  export default Airplane;

// Part 6 - import

import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

// Part 7 - named exports

let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   }, 
   {name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
   }];
   
   let flightRequirements = {
     requiredStaff: 4
   };
   
   function meetsStaffRequirements(availableStaff, requiredStaff) {
     if (availableStaff.length >= requiredStaff) {
       return true;
     } else {
       return false;
     }
   };
   
   export {availableAirplanes, flightRequirements, meetsStaffRequirements};

// Part 8 - named imports

import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
};

displayStaffStatus();

// Part 9 - export named exports

export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
 }];
 
 export let flightRequirements = {
   requiredStaff: 4,
   requiredSpeedRange: 700
 };
 
 export function meetsStaffRequirements(availableStaff, requiredStaff) {
   if (availableStaff.length >= requiredStaff) {
     return true;
   } else {
     return false;
   }
 };
 
 export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   const range = maxSpeed - minSpeed;
   if(range > requiredSpeedRange) {
     return true;
   } else {
     return false;
   }
   };
 
// Part 10 - import names imports

import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
};

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

// Part 11 - export as

let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
 }];
 
 let flightRequirements = {
   requiredStaff: 4,
   requiredSpeedRange: 700
 };
 
 function meetsStaffRequirements(availableStaff, requiredStaff) {
   if (availableStaff.length >= requiredStaff) {
     return true;
   } else {
     return false;
   }
 };
 
 function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   const range = maxSpeed - minSpeed;
   if(range > requiredSpeedRange) {
     return true;
   } else {
     return false;
   }
   };
 
 export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
 
// Part 12 import as

import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
};

displayStaffStatus();

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

// Part 13

export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
 }];
 
 export let flightRequirements = {
   requiredStaff: 4,
   requiredSpeedRange: 700
 };
 
 export function meetsStaffRequirements(availableStaff, requiredStaff) {
   if (availableStaff.length >= requiredStaff) {
     return true;
   } else {
     return false;
   }
 };
 
 export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   const range = maxSpeed - minSpeed;
   if(range > requiredSpeedRange) {
     return true;
   } else {
     return false;
   }
   };
 
 export default meetsSpeedRangeRequirements;

// Part 14 Combining Import Statements

import {availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';
import meetsSpeedRangeRequirements from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
};

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displaySpeedRangeStatus();

// Review

// Modules in JavaScript are reusable pieces of code that can be exported from one program and imported for use in another program.

// module.exports_exports the module for use in another program.
// require() imports the module for use in the current program.
// ES6 introduced a more flexible, easier syntax to export modules:

// default exports use export default to export JavaScript objects, functions, and primitive data types.
// named exports use the export keyword to export data in variables.
// named exports can be aliased with the as keyword.
// import is a keyword that imports any object, function, or data type.
// Part 1 - creating simple object

let person = {
    name: 'Arnas',
    age: 24
  };

// Part 2 - dot notation and accessing values in object

console.log(person.name);
console.log(person.age);

// Part 3 - bracket notation

console.log(person['name']);
console.log(person['age']);

// Part 4 - makes no sence, outputs as undefined, accesses alarm in person when it doesnt exist? what the point?

let person = {
    name: 'Arnas',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Sunday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person['alarm']);

// Part 5 - adding a property

let person = {
    name: 'Arnas',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM'
  };
  
  person.hobbies = ['Gaming', 'Dancing in the rain'];
  console.log(person.hobbies);

// Part 6 - editing the proprty(array)

person.hobbies = ['Gaming', 'Dancing in the rain'];
person.hobbies = ['Gaming'];
console.log(person.hobbies);

// Part 7 - adding and calling function 

let person = {
    name: 'Arnas',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => {
      return 'Hello, there!'
    }
  };
  
  console.log(person.sayHello());

// Part 8 - Using ES6 for same as above

let person = {
    name: 'Arnas',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: () => {
      return 'Hello, there!'
    },
    sayGoodbye() {
      return 'Goodbye!'
    }
  };
  
  console.log(person.sayHello());

  // Part 9 - this keyword

  let person = {
    name: 'Arnas',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: function() {
      return `Hello, my name is ${this.name}`;
    }
  };
  
  console.log(person.sayHello());

// Part 10

let person = {
    name: 'Arnas',
    age: 24,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    sayHello: function() {
      return `Hello, my name is ${this.name}`;
    }
  };
  
  let friend = {
    name: 'Jay'
  };
  
  friend.sayHello = person.sayHello;
  
  console.log(friend.sayHello());

// Part 11 - setters

let person = {
    _name: 'Arnas',
    _age: 24,

    set age(newAge) {
      if (typeof newAge === 'number') {
        this._age = newAge;
      } 
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    }
  };	

// Part 12

let person = {
    _name: 'Arnas',
    _age: 24,

    set age(newAge) {
      if (typeof newAge === 'number') {
        this._age = newAge;
      } 
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    }
  };	

person.age = 'Thirty-nine';
person.age = 39;

// Part 13 - getters

let person = {
    _name: 'Arnas',
    _age: 24,

    set age(newAge) {
      if (typeof newAge === 'number') {
        this._age = newAge;
      } 
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    },
  
  	get age() {
  		console.log(`${this.name} is ${this.age} years old`);
      return this._age;
}
  };	

person.age = 'Thirty-nine';
person.age = 39;

console.log(person._age);

// Objects store key-value pairs and let us represent real-world things in JavaScript.
// Properties in objects are separated by commas. Key-value pairs are always separated by a colon.
// You can add or edit a property within an object with dot notation.
// A method is a function in an object.
// this helps us with scope inside of object methods. this is a dynamic variable that can change depending on the object that is calling the method.
// Getter and setter methods allow you to process data before accessing or setting property values.



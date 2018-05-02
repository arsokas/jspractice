// PART 1

let calculatorIsOn = false;

const pressPowerButton = () => { // arrow function
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.
// we can execute the function few times like seen above.

// PART 2

const takeOrder = () => {
    console.log('Order: pizza');
  };
  
  takeOrder();
  
// functions can accept data which is called parameters

// PART 3

const takeOrder = (topping) => {
    console.log(`Order: pizza topped with ${topping}`);
  };
  
  takeOrder('olives');

// PART 4

const takeOrder = (topping, crustType) => {
    console.log(`Order: ${crustType} pizza topped with ${topping}`);
  };
  
  takeOrder('olives', 'extra crust');
  takeOrder('mushrooms', 'thin crust');
  takeOrder('kebab', 'medium crust');

  
// PART 5

const orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount + 1;
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}

takeOrder('olives', 'extra crust');
takeOrder('mushrooms', 'thin crust');
takeOrder('kebab', 'medium crust');

console.log(getSubTotal(orderCount)); // ERROR DISPLAYS 0

// PART 6

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount + 1;
  console.log(`Order: ${crustType} pizza topped with ${topping}`);
};

takeOrder('olives', 'extra crust');
takeOrder('mushrooms', 'thin crust');
takeOrder('kebab', 'medium crust');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = () => {
 return getSubTotal(orderCount) * 0.06; 
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(); 
}; 

console.log(getSubTotal(orderCount));
console.log(getTotal());

// PART 7 

function isGreaterThan(numberOne, numberTwo) {
    if(numberOne > numberTwo){
      return true;
    } else {
      return false;
    }
  };
  
  isGreaterThan(1,2);

// PART 8

const isGreaterThan = (numberOne, numberTwo) => {
    if(numberOne > numberTwo){
      return true;
    } else {
      return false;
    }
  };
  
  isGreaterThan(1,2);

// PART 9

const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');


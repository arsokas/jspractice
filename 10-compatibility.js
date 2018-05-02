// Part 1 - introduction

var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

// Part 2 canuise.com

// Set the variable below to a number
let esFivePercentageSupport = 97.88;

// Set the variable below to a number
let esSixTemplateLiterals = 89.23;

// Part 3 ES6 tp ES5

// 3 Reasons for the ES5 to ES6 updates:
// A similarity to other programming languages — JavaScript ES6 is syntactically more similar to other object-oriented programming languages. This leads to less friction when experienced, non-JavaScript developers want to learn JavaScript.
// Readability and economy of code — The new syntax is often easier to understand (more readable) and requires fewer characters to create the same functionality (economy of code).
// Addresses sources of ES5 bugs — Some ES5 syntax led to common bugs. With ES6, Ecma introduced syntax that mitigates some of the most common pitfalls.

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
// var carbonara = 'You can make carbonara with' + pasta ',' + meat ', and a sauce made with' + sauce'.';

// Part 4 - transpilation with babel - babel is the library that transpiles es6 to es5

// Part 5 - npm init

// Part 6 - node packages

// Part 7 - babelrc, javascript version

// Part 8 - package.json, adding build script for babel src -d lib

// Part 9 - build

// Review

// ES5 — The old JavaScript version that is supported by all modern web browsers.
// ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
// caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
// Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
// npm init — A terminal command that creates a package.json file.
// package.json — A file that contains information about a JavaScript project.
// npm install — A command that installs Node packages.
// babel-cli — A Node package that contains command line tools for Babel.
// babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
// .babelrc — A file that specifies the version of the JavaScript source code.
// "build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
// npm run build — A command that runs the build script and transpiles ES6+ code to ES5.


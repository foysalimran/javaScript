/**************************************
 * Basic javascript
 */

 /********************************************
  * 01. Start coding
  */

console.log('Hello world!!!');

/********************************************
* 02. Variables and data types
*/

var firstName = 'John';
console.log(firstName);

lastName = 'Smith'; // String: Sequence of characters, used for text
var age = 28;  // Number: Floating point numbers, for decimals and integers

var fullAge = true; // Boolean: Logical data type that can only be true or false
console.log(fullAge);

var job; // Undefined: Data type of a variable that does not have a value yet
console.log(job);

job = 'Teacher';
console.log(job);

// Null: Also mean 'non-existent'

/********************************************
* 03. Basic operators
*/
var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);


// Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now -yearJohn;
var ageMark = 35;
var avarage = (ageJohn + ageMark) / 2;
console.log(avarage);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

/****************************
* Coding challenge 1
*/
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


var markHeigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than john\'s? ' + markHeigherBMI);

// If else statement

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher than John\'s BMI');
} else {
  console.log('John\'s BMI is higher than Mark\'s BMI');
}

/********************************************
 * Boolean Logic
 */

 var firstName = 'John';
 var age = 20;

 if (age < 16) {
   console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20 ) {
  console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
 } else {
   console.log(firstName + ' is a man.');
 }

/********************************************
 * The Ternary Operator and Switch Statements
 */


 var firstName = 'John';
 var age = 16;
// Ternary operatior
 age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');
 
 var drink = age >= 18 ? console.log('beer') : 'juice';
 console.log(drink);
 
//  if (age => 18) {
//    var drink = 'beer';
//  } else {
//    var drink = 'juice';
//  }


 // Switch Statement
 var job = 'instractor';
 switch (job) {
   case 'teacher':
    case 'instractor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon');
    break;
  case 'designer':
    console.log(firstName + ' designs website beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
 }

 switch (true) {
   case age < 16:
      console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
    break;
    default:
    console.log(firstName + ' is a man.');
 }

 /********************************************
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;
height = 23;
 if (height || height === 0) {
   console.log('Variable is defined');
 } else {
   console.log('Variable has not been defined.');
 }


 // Equality Operators
 if (height === '23') {
   console.log('The == operator does type coerction');
 }


 // Coding challenge

 scoreJohn = (89 + 120 + 103) / 3;
 scoreMike = (116 + 94 + 123) / 3;
 scoreMary = (97 + 134 + 105) / 3;

 console.log(scoreJohn, scoreMike, scoreMary);

 if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log('John\'s team win with ' + scoreJohn + ' points.');
} else if (scoreMike > scoreJohn && scoreJohn > scoreMary) {
  console.log('Mike\'s team win with ' + scoreMike + ' points.');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike){
  console.log('Mary\'s team win with ' + scoreMary + ' points.');
} else {
  console.log('There is a draw!');
}

 /*
 if (scoreJohn > scoreMike) {
  console.log('John\'s team win with ' + scoreJohn + ' points.');
 } else if (scoreMike > scoreJohn) {
  console.log('Mike\'s team win with ' + scoreMike + ' points.');
 } else {
   console.log('There is a draw!');
 }
*/
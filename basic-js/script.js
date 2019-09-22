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


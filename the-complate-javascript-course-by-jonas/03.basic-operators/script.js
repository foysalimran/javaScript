/**************************
 * Basic Operators
 */
var now, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 23;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// Typeof operator
console.log(typeof(johnOlder));
console.log(typeof ageJohn);
console.log( typeof('Mark is older than John'));
var x;
console.log(typeof(x));
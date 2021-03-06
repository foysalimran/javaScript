/********************************
 * Variables and data types
 */
/*
var firstName = 'Foysal';
console.log(firstName);

var lastName = 'Imran';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3year = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/**
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(
  firstName +
    ' is a ' +
    age +
    ' year old ' +
    job +
    '. Is he married? ' +
    isMarried
);

console.log(
  firstName +
    ' is a ' +
    age +
    ' years old ' +
    job +
    '. is he married? ' +
    isMarried
);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(
  firstName +
    ' is a ' +
    age +
    ' years old ' +
    job +
    '. is he married? ' +
    isMarried
);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/
/*
// NEXT LECTURE: 07 Basic Operators
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
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
var y = null;
var a = NaN;
console.log(typeof x);
console.log(typeof y);
console.log(a);
*/
// 08 Operators Precedence
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
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

x = x + 1;
x += 1;
x++; // increment
console.log(x);
x--;
console.log(x); // Decrement

// Premitive data type

// Number
// 1, 1.0, 335.444

// String
// 'This is an string type data type' + "This is also an string type data type", "3"

// Boolean
// True, False

// Undefined

// Null

// Object data type
// Array
// Object
// Function

/**
 * NUMBERS
 */
var intNumber = 2334; // Integer number
var floNumber = 12.344; // Floating number
console.log(intNumber);
console.log(floNumber);

console.log(Number(34)); // Construct integer number with number function
console.log(Number('233')); // Construct float
console.log(Number('This is a number')); // Construct string with number function // NaN

// number parseFloat
console.log(parseFloat(intNumber));
console.log(parseFloat(floNumber));

console.log(parseFloat('10'));
console.log(parseFloat('10.22'));
console.log(parseFloat('23 44 55'));
console.log(parseFloat('23 years'));

// Number parseFloat with variable
var nn = 'my age is 44 years';
var nn2 = '33 years';
console.log(parseFloat(nn));
console.log(parseFloat(nn2));

// Max value and min safe vaiue
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

// String multiply with number
console.log(1 / 0); // Infinite

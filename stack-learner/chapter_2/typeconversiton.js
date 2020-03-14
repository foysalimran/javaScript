var str = '1000';
var str1 = 10;

console.log(str + str1); // Concat
console.log(Number(str) + str1); // Convert string with Number costract and addition with another value
console.log(Number.parseInt(str) + 10); // Convert string with Number.parseInt add addition with another value

var str2 = true;
var str3 = 10100;
console.log(str2.toString()); // Convert Boolean to String
console.log(str3.toString()); // Convert Number to String

// Falsy values in Javascript

console.log(Boolean('')); // Empty string is falsy
console.log(Boolean('This text is for check is this string truethy or falsty')); // String is truthy

console.log(Boolean(0)); // 0 is falsy value
console.log(Boolean(-1)); // Any number is truthy without 0

console.log(Boolean(1)); // Any number is truthy without 0
console.log(Boolean(null)); // null is falsy

console.log(Boolean(undefined)); // undefined is falsy
console.log(Boolean(NaN)); // NaN is falsy

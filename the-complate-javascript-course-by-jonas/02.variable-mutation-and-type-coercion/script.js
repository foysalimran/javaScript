/***********************************
* Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;

// Type coercion

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName  + '  is 24 years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';


alert(firstName  + '  is 24 years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
/**********************************
 * Arrays
 */

 // Initialize new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1998, 1969, 1948);

 console.log(names);
 console.log(names.length);
 console.log(years);
 
 // Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John  IS a designer';
console.log(isDesigner);


 


















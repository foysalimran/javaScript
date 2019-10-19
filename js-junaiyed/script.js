console.log('Hello world from inside!');
















console.log('Wrong!');

// Variables

var myName = 'Foysal Imran';
console.log(myName);


// Data type

/**
 * * There are 2 types of data types in javaScript.
 * 1. primitive Data Types
 *  - Number
 *  - String
 *  - Booliean
 *  - Undefined
 *  - Null
 * 2. Non-primitive Data Types
 *  - Array
 *  - Object
 *  - Function
*/

// Number primitive data type

var aNumber = 10;
var anotherNumber = 10.10;

// String primitive data type

var text = 'I want to say something';
var text2 = "This exactly the same way, but use either one";
var isString = '10'; // Is also a string not a number.


// Booliean primitive data type

isTrue = true;
isFalse = false;


// Undefined

var something;
console.log(something);

// Null

var some_thing = null;
console.log(something);


// CONCATENATION

var text = 'hello' + ' there';
console.log(text);


var welcomeMsg = 'Hi! ' + text;
console.log(welcomeMsg);

console.log(typeof(welcomeMsg));


/**********************************
 * OPERATORS - There have several types of operators in javascript.
 * 
 * - Arithmetic Operator 
 * - Comparison Operator
 *      = Equal
 *      = Not Equal
 *      = Greater than
 *      = Less than
 * - Logical or Relational Operator
 *      = And
 *      = Or
 *      = Not
 * - Assignment Operator
 * - Conditional / Ternary Operator
 */



 // CONDITIONAL STATEMENTS
 /**
  * There area 3 types of conditional statement in javaScript.
  * 1. If statement
  * 2. if............else statement
  * 3. if.........else if statment
  * There has another conditional statement called switch statement.
 */

 if (3 < 5) {
     console.log('Yeah! I will be executed');
 }


 var myName = 'Zonayed';

 if (myName == 'Zonayed') {
    console.log('You are allowed!');
 }

 if (myName == 'Karim') {
     console.log('You area allowed');
 }

var myAge = 21;
if(myAge > 20 && myAge < 60) {
    console.log('You are a young person!')
}

if(myAge > 18) {
    console.log('Now you are adult');
}

else {
    console.log('No You are not aged enough to be a adult.')
}

var whatDate = 'Sunday';

if (whatDate === 'Friday') {
    console.log('It is closed today.');
} else if (whatDate === 'Thursday') {
    console.log('It is partially closed');
} else if (whatDate === 'Saturday') {
    console.log('Some offices are closed');
} else {
    console.log('It is normal work day!')
}

// Nesting conditional statement

var num = 10;

if (num > 1) {
    if (num > 10) {
        console.log('Greater than 10');
    } else {
        console.log('Somewhere between 2-10');
    }
}


var age = 32;

if (age > 18) {
    if(age > 30) {
        console.log('You are a complete man!');
    } else if (age > 60) {
        console.log('You are a old man');
    } else {
        console.log('You are Young man!')
    }
} else {
    console.log('You are a child')
}



if (3 > 9 && 3 > 12) {
    console.log('3 is grater than 9 and 12')
} else if (9 > 3 && 9 > 12) {
    console.log('9 is grater than 3 and 12');
} else if (12 > 3 && 12 > 9) {
    console.log('12 is grater than 3 and 9')
} else {
    console.log('No grater number has been find!');
}

// Switch statement
var weekDay = 'Wednesday';

switch(weekDay) {
    case 'Saturday':
        console.log('Saturday!, Today is closed');
    break;
    case 'Sunday':
        console.log('It is Sunday, normal working day');
    break;
    case 'Monday':
        console.log('It is Monday, Normal working day');
    break;
    case 'Tuesday':
        console.log('It is Tuesday, Normal working day');
    break;
    case 'Wednesday':
        console.log('It is Wednesday, Normal working day');
    break;
    case 'Thursday':
        console.log('It is Thursday, normal working day');
    break;
    case 'Friday':
        console.log('Its Friday, It is closed day');
    break;
    default: 
    console.log('Not a day');
}


var rollNo = 7;

switch(rollNo) {
    case 1:
        console.log('Akbar');
    break;
    case 1:
        console.log('Delwar');
    break;
    case 3:
        console.log('Romana bashar');
    case 4:
        console.log('Revina akther');
    break;
    case 5: 
    console.log('Tahamina pushpo');
    break;
    case 6: 
    console.log('Foysal hossain');
    break;
    case 7:
        console.log('Meemiya Meem');
    break;
    case 8:
        console.log('Suraj');
    break;
    default:
        console.log('Others');
}


/********************************
 * Loops
 *  - For statement
 *  - do ... while statemnt
 *  - while statement
 *  - break statement
 *  - Continue statement
 */

 // For loop

//  for (var i = 0; i < 10; i++) {
//     console.log('Go ' + i + ' step')
//  }


 // Do while loop
// var num;
//  do {
//     console.log('Inside the Loop');
//     num = prompt('Enter the number: ');

//  } while (num < 10)

// While statement
// var num = 0;

// while (num < 10) {
//     console.log('Inside the loop');
//     num = prompt('Enter the number:');
// }


var num = 20;
while(num < 10) {
    console.log('Inside the loop');
    num = prompt('Enter the number: ');
}

// Break statement

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log('i is now at ' + i);
}

// Continue statement

for (var i = 0; i < 10; i++) {
    if(i === 5){
        console.log('5 is skipped');
        continue;
    }
    console.log('i is now at ' + i);
}


// ARRAYS

var newArray = new Array ('Rafiq', 'Salam', 'Karim', 'Shaifq');

console.log(newArray);



var newArr = ['rafiq', 'Shafiq', 'Karim', 'Jabbar'];
console.log(newArr);

console.log(newArr[3]);
console.log(newArr.length);
console.log(newArr['length']);


for (var i = 0; i < newArr.length; i++) {
    console.log('Name: ' + newArr[i]);
}

// Arrays functions

// -- Push a new array end of existing array
newArray.push('Foysal');
console.log(newArray);

// -- Remove a new array end of existing array

newArray.pop();
console.log(newArray);

// -- Remove a new array starting of an existing array
newArr.shift();
console.log(newArr);

// -- Adding new array starting of an existing array

newArray.unshift(['Imran']);
console.log(newArray);

// -- Know index number for a specific array item
console.log(newArray.indexOf('Karim'));

// -- Remove array item using index number
newArray.splice(1, 2);
console.log(newArray);

// Add splice data to another variable

var aNewArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var spliceArr = aNewArray.splice(3);

console.log(aNewArray);
console.log(spliceArr);

// Copy array

var arrName = aNewArray;
console.log(aNewArray, arrName)



/***********************
* OBJECT
 */

 var rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: "Job Holder",
    welcomeMsg: function() {
        console.log('Hello There. How are you?');
    }  
 }

 console.log(rahim);

 console.log(rahim.fullName);

console.log(rahim['fullName']);


rahim.zipCode = 1206,

console.log(rahim.zipCode);


rahim.job= 'Student',

console.log(rahim.job);

// rahim.welcomeMsg = function() {
//     console.log('Hello There');
// }

rahim.welcomeMsg();


/// Object in Array

var objArr = {
    normal: 'Normal Item',
    name: ['rahim', 'karim', 'rafiq', 'shafiq'],
    age:    [10, 20, 30, 40]
}

console.log(objArr.name[2]);


var arrObj = [
    'Zonaiyed',
    {
        name: 'Rafiq',
        age: 21,
        job: 'Student',
    },
    'Bangladesh'
]
console.log(arrObj[1].name);


/*********************************
 * Functions
 * 
 */

function funcName(){
    console.log('Hello, I am from the function.');
}
funcName();



var funcName2 = function() {
    console.log('This is from another function');
}
funcName2();


function sumMatchine(a, b) {
    var sum = a + b;
    return sum;
}
console.log(sumMatchine(2, 2));
console.log(sumMatchine(4, 4));

function printMyName(name, age) {
    console.log('My name is: ' + name + ' and I am ' + age + ' years old!');
}
printMyName('Foysal Imran', 28);

function callMyName(name, callback) {
    var myAge = 28;
    console.log('Is it interesting? Yes it is Mr.' + name);
    callback(myAge);
}

function hello(age){
    console.log('I am passed through arguement and my age is: ' + age);
}
callMyName('Foysal', hello);



// function welcomeMsg(name) {
//     console.log('Welcome Mr. ' + name);
//     return function options(menu) {
//         console.log('Do you like ' + menu + ' Mr. ' + name);
//     }
// }
// welcomeMsg('Zonayed Ahmed')('Coffee');


function changeValue (a) {
    console.log('Value of a inside function before changeing: ' + a);
    a = 10;
    console.log('Value of a inside function after changeing: ' + a);
    return a;
}

var a = 100;
console.log('Value of a before changeing function is applied ' + a);
changeValue(a);
console.log('Value of a after changeing function is applied: ' + a);
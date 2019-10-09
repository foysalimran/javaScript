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
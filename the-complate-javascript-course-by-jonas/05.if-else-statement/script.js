/*****************************
 * If else statement
 */

 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried  = true;

 if ( isMarried ) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}



var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMImark = massMark / (heightMark * heightMark);
var BMIjohn = massJohn / (heightJohn * heightJohn);

if (BMImark > BMIjohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

// console.log('Is Mark\'s BMI heigher than John\'s?' + ' ' + markHigherBMI);
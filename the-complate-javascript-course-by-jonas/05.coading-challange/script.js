/**********************************
 * Coading Challange
 */

var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.95;

var BMImark = massMark / (heightMark * heightMark);
var BMIjohn = massJohn / (heightJohn * heightJohn);

console.log(BMImark, BMIjohn);

var markHigherBMI = BMImark > BMIjohn;

console.log('Is Mark\'s BMI heigher than John\'s?' + ' ' + markHigherBMI);
/**************************************
 * Coading Challange 02
 */

 var scoreJohn = (89 + 120 + 103) / 3;
 var scoreMark = (119 + 94 + 123) / 3;
 var scoreMary = (97 + 134 + 105) / 3;

 console.log(scoreJohn, scoreMark, scoreMary);
/*
 if (scoreJohn > scoreMark) {
     console.log('John\'s team wins with ' + scoreJohn + ' points.');
 } else if (scoreMark > scoreJohn) {
    console.log('Mark\'s team wins with ' + scoreMark + ' points.');
 } else {
     console.log('There is a draw.');
 }
*/

 if (scoreJohn > scoreMark && scoreJohn > scoreMary) {
    console.log('John\'s team win with ' + scoreJohn + ' points');
 } else if (scoreMark > scoreJohn && scoreMark > scoreMary) {
    console.log('Mark\'s team win with ' + scoreMark + ' points');
 } else if ( scoreMary > scoreJohn && scoreMary > scoreMark) {
    console.log('Mary\'s team win with ' + scoreMary + ' points');
 } else {
    console.log('There is a draw.');
 }




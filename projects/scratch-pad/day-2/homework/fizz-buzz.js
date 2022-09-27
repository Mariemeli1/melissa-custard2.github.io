// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // creating a for loop to get the numbers 1 - 100
    for (let i = 1; i <= 100; i++) {
        //determining if there are multiples of 3 and 5 if so, print "FizzBuzz"
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        //determining if there are multiples of 3, if so, print "Fizz"
        }else if (i % 3 == 0){
            console.log("Fizz");
        //determining if there are multiples of 5, if so, print "Buzz"
        }else if (i % 5 == 0){
            console.log("Buzz");
        } else {
            //printing numbers 1 - 100 to the console
            console.log(i);
        }
       
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
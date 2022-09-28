// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning a function that takes a value of a string or number as its parameter
    return function child(value){
        //determining if value is greater than base
        if(value > base){
            //if true return true
            return true;
        } else {//else return false
            return false;
        }
        
    }
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //returning a function that takes in a parameter of a string or number
    return function baby(val){
        if(val < base){
            return true;
        } else {
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function littleOne(str){
        //determining if the first character in string 
        //is the same as startsWith character and using toLowercase for the case insensitive 
        if(str[0].toLowerCase() === startsWith.toLowerCase()){
            //returning true if true
            return true;
        } else{ //else returning false
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //returning s function with a string passed it
    return function tinyOne(string){
        //determining if the last character in string 
        //is the same as endsWith character and using toUpperCase for the case insensitive 
        if(string[string.length - 1].toUpperCase() === endsWith.toUpperCase()){
            //returning true if true
            return true;
        } else{ //else returning false
            return false;
        }
    } 
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create a variable and set it to an array that will later be returned
   var output = [];
   //loop through the input string array
   for(let i = 0; i < strings.length; i++){
    //push the modify function into the output array with each string passed in it
    output.push(modify(strings[i]))
   } 
   //returnthe new output array
    return output;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //created a count variable and set it to 0
    var count = 0;
    // created a vairable truth and set it to false
    var truth = false;
      //iterate through the input strings array
    for(let i = 0; i < strings.length; i++){
        //passsed in each string to the test function to get a truthy value
        if(test(strings[i])){
            // if the if statement is true count will increase to 1
            count++
        }
    }
    //determining of count is equal to strings length
    if(count === strings.length){
        //reassigning truth to true
        truth = true;
    }//return truth
    return truth;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}

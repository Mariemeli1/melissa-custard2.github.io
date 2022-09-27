// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //iterating through my array
  for(let i = 0; i < array.length; i++){
    //printing the arrays values to the console
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //iterating to=rough my array in reverse order
  for(let i = array.length - 1; i >= 0; i--){
    //printing arrays values to the console
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {

  // YOUR CODE BELOW HERE //
  //looping through my object
  for(var key in object){
    //returning an array containing its objects keys 
    return Object.keys(object);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //looping through my object
  for(var key in object){
    //printing my objects keys
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //looping through input object
  for(var key in object){
    //returning an array containing the objects values
   return Object.values(object);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object){
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //created a variable and set it to 0 
  var count = 0;
  //using a for in loop to access the object
  for(var key in object){
    // incrementing count
    count++;
  }
  //return count
return count;

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //created a variable and set it to empty array
  var arr = [];
  //looping through object
  for(var key in object){
    //pushing the objects values into my array
    arr.push(object[key]);
  }
  //checking my array
  console.log(arr);
  //iterating through my array in reverse
  for(let i = arr.length - 1; i >= 0; i--){
    //logging values of my array
    console.log(arr[i]);
  }
  //talk to Alex about this code


  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

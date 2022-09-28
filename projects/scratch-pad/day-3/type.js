// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)){
        return true;
    } else { 
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

    if(typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date)){
        return true;
      }else {
        return false;
      }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(typeof value === 'object' &&  value !== null && !(value instanceof Date)){
      return true
    }else if(Array.isArray(value)) {
      return true;
    } else {
      return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if type of value is string return a string of string
    if (typeof(value) === "string") {
      return "string";
      //else if type of value is number return the value as a string
  } else if (typeof(value) === "number") {
      return "number";
      //else if type of value is boolean return the value as a string
  } else if (typeof(value) === "boolean") {
      return "boolean";
      //else if type of value is instanceof date return the value as a string
  } else if (value instanceof Date) {
      return "date";
      //else if type of value is an array return the value as a string
  } else if (isArray(value) === true) {
      return "array";
      //else if type of value is an object return the value as a string
  } else if (isObject(value) === true) {
      return "object";
      //else if type of value is undefined return the value as a string
  } else if (typeof(value) === "undefined") {
      return "undefined";
      //else if type of value is a function return the value as a string
  } else if (typeof(value) === "function") {
      return "function";
  } else { //else return null
      return "null";
  }

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

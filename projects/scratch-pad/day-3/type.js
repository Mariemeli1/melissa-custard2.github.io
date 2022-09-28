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

    if(typeof value === Object || value !== null || !Array.isArray(value) || !value instanceof Date){
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
    if(Array.isArray(value))
    return true;
    
    
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
    
    if(Array.isArray(value)) {
        return 'array';
      } //if value is null return its value as a string ('null')
      if(value === null) {
        return 'null';
      }//if type of value is object return its value as a string ('object')
      if(typeof value === 'object' ) {
        return 'object';
      }//if type of value is a function return its value as a string(' function')
       if(typeof value === 'function') {
        return 'function';
       }//if type of value is a string return its value as a ('string')
       if(typeof value === 'string') {
         return 'string';
       } //if value is true or value is false return the type of value as a string('boolean')
       if(value === true || value === false) {
         return 'boolean';
       }//if value is undefined return its value as a string('undefined')
       if(value === undefined) {
         return 'undefined';
       }//if type of value is a number return the type of value as a string
       if(typeof value === 'number') {
         return 'number';    
       }
       if(value instanceof Date){
        return 'date';
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

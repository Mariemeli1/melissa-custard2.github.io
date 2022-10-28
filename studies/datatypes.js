/**
 * DATA TYPES:
 * 
 * 0. Data types describe the different types or kinds of data that we’re going to be working with 
 * and storing in variables. 
 * 1. Simple data types: strings, booleans, undefined, null, numbers : NaN, infinity and -infinity.
 * 2. Complex data types: arrays, objects, and functions.
 * 3. Complex data types are containers that can contain bot simple and complex datatypes.
 * 4. Primitive values are copied by there value and complex values are copied by their reference.
 * Primitive types are immutable, complex types only have an immutable reference, but their value can 
 * change over time.
 * Copied by value is when you have no access to the memory address only to the actual value.
 * Copy by reference is when you assign a variable, it is a reference to an object not the object itself.
 * when you copy an object both variables will point to the same address.
 */

//String//
var horse = 'Stallion'; //Stallion is a string.

//Boolean//
var imAwake = true; 
var imAsleep = false;
 //Boolean Expression
  (10 > 9) //true
  (9 > 10) //false
// Both true and false are booleans.

//Undefined//
var basic; //basic is undefined
console.log(basic)// ---> Prints undefined to the console.

//Null//
var nothing = null;// ---> Prints null to the console.

//Number//
var num = 10;// ---> 10 is a number.

//NaN//
let z = Number.NaN; //z is not a number
console.log(z);// ---> Prints NaN (not a number) to the console.

//Infinity//
let s = 1.797693134862315E+308;
let h = s * 1.001;
console.log(h);// ---> Prints infinity to the console

//-infinity//
var b = Number.NEGATIVE_INFINITY;
console.log(b);// ---> Prints -infinity to the console

//Array//
var array = []; // This is an array literal
var simpleArr = ['hi', true, 1];// This is an array with simple data types in it.

//Object//
var object = {}; // This is an object literal
var obj = {
    color: 'blue',
    bool: false,
    num: 3
}; //This is an object with key/value pairs

//Function//
function subtract(a, b){ 
 return a - b;
}
subtract(100, 90); // Prints 10 to the console.
//This is a function with a function call.

//Copy by value//
let c = 10; 
let b = c; //copies the value of c to b so c becomes 10
c = 50; // c is now assigned to 50;
console.log(c)// ---> Prints 50 to the console.
console.log(b)// ---> Prints 10 the console.

//Copy by reference//
let d = {favNum: 10}
let v = d; //copying the reference to v which becomes {favNum: 10}
d.favNum = 5;
console.log(d) //---> Prints {favNum: 5} to the console
console.log(d.favNum) //---> Prints 5 to the console
console.log(v) //---> Prints {favNum: 5} to the console;
console.log(v.favNum); //---> Prints 5 to the console.

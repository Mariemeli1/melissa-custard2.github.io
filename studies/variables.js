/**
 * VARIABLES:
 * 
 * 0.Variables are containers for storing data values that can be changed later on.
 * Variables are how programmers give a name to a value so that we can reuse it, update it or simply keep track of it.
 * 1. To create a variable we can use the keywords var, let or const.
 * 2. You need to give a variable a name, names are case sensitive and can contain a letter or these 2 symbols $ or _
 * they can also contain numbers but they cannot start with a number.
 * 3. There are 2 things that need to take place in order to use a variable: Declaration and assignment/initialization.
 */


// 1. Declaration //
// To declare a variable you need the var keyword and the name of the variable
var favAnimal;
console.log(favAnimal); //-----> Prints out undefined because the var hasn't been assigned to any value.

// 2. Assignment/Initialization //
// Assigning a variable means giving the variable a value using an equal sign.
var favAnimal = 'White Tiger';
console.log(favAnimal); //-----> Prints White Tiger because that is the value assigned to the variable favAnimal.

//3. var
//var can be reassigned and redeclared
var hair = "black";
hair = 'brown'; 
console.log(hair); // -----> Prints brown to the console because its been reassigned.

var hair = 'pink';
console.log(hair); // ----> Prints pink to the console because its been redeclared.

//4. let
//let can be reassigned but not redeclared;
 let size = 'medium';
size = 'large';
console.log(size);// ---> Prints large to the console.
let sizey  = 'Extra Large'; // ----> Prints SyntaxError: Identifier 'size' has already been declared to the console

//5. const
//const can't be reassigned neither redeclared;
 const string = 'Hello'; 
string = 'Hi';
console.log(string); // ----> Prints TypeError: Assignment to constant variable to the console.
const stringy = 'Hey';
console.log(string); // ----> Prints TypeError: Assignment to constant variable to the console.

//6. Hoisting
//var/let/const
//var declarations get hoisted to the top
//if you try to reference var before its declared you will get a value of undefined.
console.log(c); // ----> Prints undefined to the console.
 var c = 5;
console.log(c); // ---> Prints 5 to the console.

//let and const are not hoisted so if you reference before declaring you will get a reference error.
console.log(pumpkin); // ----> Prints ReferenceError: Cannot access 'pumpkin' before initialization to the console.
console.log(brocolli); // Prints ReferenceError: Cannot access 'brocolli' before initialization to the console.
let pumpkin = 'orange';
const brocolli = 'green';

//7. Scope 
// values can't be accessed outside the if statement when they are declared with let or const.
if (m === 3){
    let h = 55; // Let/const keywords are blockscoped
}
console.log(h); //Prints ReferenceError: h is not defined
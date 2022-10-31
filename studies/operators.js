/**
 * OPERATORS:
 * 
 * 0. An operator is a special symbol used to perform operations on operands (values and variables).
 * 1. There are different type of operators: Assignment, arithmetic, comparison, logical, unary and ternary.
 */

1. //Ternary Operators//
//Used to replace multiple lines of code with a single line, and is most often used to replace simple 
//if else statements.
variable = (condition) ? expressionTrue :  expressionFalse; //Syntax 

let num = 20;

// Ternary form 
var result = (num < 15) ? "True" : "False";// Returns "False"

//How it looks like as an if else statement
if (num < 15) {
  return ("Truth");
} else {
  return ("Lies");
}


2. //Unary Operator//
//Unary operators consider a single operand and perform all the types of operations on that single operand.

//Typeof
//The typeof operator returns the type of a variable, object, function or expression
typeof "person" // Returns a string
typeof 3 // Returns a number
typeof false // Returns a boolean


3. //Logical Operators//
//Logical operators are used to determine the logic between variables or values.


//And operator
var x = 2;
var y = 3; 
if(x < 10  &&  y > 1) {
    return true; //Returns true
}

//Or operator
var x = 2;
var y = 3;
if(x == 5 || y == 5){
    return false; //Returns false
}

//Not operator/ Bang operator
var x = 8;
var y = 3; 
if (!(x > y)){
return false; //Returns false
}


4. //Comparison Operators//
//Comparison operators are used to test for true or false.


//Loosely Equal
//Equal to
var x = '1';
var y = 1;
if(x == y){
 return true; //Returns true   
}

//Strictly Equal
//Equal value and equal type
var x = '1';
var y = 1;
if(x === y){
 return false; //Returns false   
}

//Not Equal
var x = 3;
var y = 1;
if(x != y){
 return true; //Returns true   
}

//Strictly not Equal
//Not equal value and  not equal type
var x = '1';
var y = 1;
if(x !== y){
 return true; //Returns true
}

//Greater than
var a = 10;
var b = 7;
if(a > b){
 return true; //Returns true
}

 //Less than
var a = 5;
var b = 10;
if(a < b){
 return true; //Returns true
}

//Greater than or Equal to
var a = 10;
var b = 10;
if(a >= b){
 return true; //Returns true
}

//Less than or Equal to
var a = 7;
var b = 7;
if(a <= b){
 return true; //Returns true
}


5. //Arithmetic Operators//


//Arithmetic operators accept numerical values as operands and returns a single numerical value
//Addition - Adds numbers
var b = 10;
var a = 5;
b + a;
console.log(b)// Prints 15

//Subtraction - Subtracts numbers
var e = 10;
var k = 5;
e - k;
console.log(e)//Prints 5

//Multiplication - Multiplies numbers
var b = 10;
var a = 5;
b * a;
console.log(b)// Prints 50

//Exponentiation - Raises the first operand to the power of the second operand
var x = 5;
var z = x ** 2; //Prints 25

//Division - Divides numbers
var b = 10;
var a = 5;
b / a;
console.log(b)// Prints 2

//Remainder(Modulus) - Returns the division remainder
var b = 10;
var a = 5;
b % a;
console.log(b)// Prints 0

//Increment - Increments numbers
var a = 0;
a++
console.log(a)// Prints 1

//Decrement = Decrements numbers
var b = 2;
b--
console.log(b)// Prints 1


6. //Assignment Operators//   


//Assignment operator
//Assigns value to a variable.
 var e = 2;  
 console.log(e)// Prints 2

 //Addition Assignment
 //Adds and assigns value to a variable at the same time.
 var x = 'whats';
 var y = 'up';
  x += y; 
  console.log(x)// ---> Prints 'whatsup'

//Subtraction Assignment
//Subtracts and assigns value from a variable at the same time.
var b = 10;
var a = 5;
b -= a;
console.log(b)//---> Prints 5

//Multiplication Assignment
//Multiplies and assigns value to a variable at the same time.
var r = 2;
var f = 6;
r *= f;
console.log(r)//---> Prints 12


//Division Assignment
//Divides and assigns value to a variable at the same time.
var x = 12;
var h = 4;
x /= h;
console.log(x)// Prints 3

//Remainder Assignment
//Divides and assigns the remainder to the value.
var v = 8;
var q = 2;
v %= q;
console.log(v)// Prints 0

//Increment
//Adds one to its operand and returns a value
var a = 0;
a++
console.log(a)// Prints 1

//Decrement
//Subtracts one to its operand and returns a value
var b = 2;
b--
console.log(b)// Prints 1

/**
 * FUNCTIONS:
 * 
 * 0. A function is a block of code that you can use over and over again so that you can avoid having
 *  to write code multiple times.
 * 1. You first need a function declaration and after the declaration you need to execute/call/invoke the
 * function by referring it by name followed by parenthesis. 
 * 2. Functions have parameters and arguments, parameters are placeholders for arguments that will later
 *  be given to the function at call time.
 * 3. Functions can take as many parameters as needed or none at all. The amount of arguments in the
 * function call must be the same amount as parameters.
 */

//1. Function Declaration//
// 4 parts
// Function name
// Parameters
// Function body
// Return statement
function printParam(parameter){ //parameter is a placeholder for an input
    console.log(parameter) //function body
return statement; // return statement
}

//2. Function call/invocation/execution//
// You need the name of the function, parenthesis and its argument(s) within the parenthesis.
functionName(argument);

//3. Named Function//
//Function keyword followed by function name followed by parenthesis with its parameters passed in.
function subtract(x, y){
    return x - y;
}

//4. Function Expression//
// The main difference between a function expression and a function declaration is the function name
// which can be omitted in function expressions to create anonymous functions.
//Function expressions in JavaScript are not hoisted, unlike function declarations. You can't use function
// expressions before you create them:
var functionName = function() {
};

//5. Function Scope//
// Functions can access variables in the parent scope but not the other way around.
var num = 5; //variable declared in global scope/parent scope

function myFunc(){
 return num + num//--> Accessing the variable in the parent scope.
}
console.log(myFunc())//--> Prints 10 to the console.

//6. Function Closure//
 //A closure is a function having access to the parent scope, even after the parent function has closed.
function myFunction(){
    var num = 'a';
    function NumToLetter(){
     console.log(num); // --> Prints a to the console.
                            //This makes a closure because variable was declared in parent scope and it was
                            // accessed from parent scope to the child scope.
    }
    NumToLetter();
}
myFunction(); //Invoking function
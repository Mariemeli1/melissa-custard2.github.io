/**
 * LOOPS:
 * 
 * 0. Loops are used in JavaScript to perform repeated tasks based on a condition. 
 * Conditions typically return true or false.
 * 1. A loop will continue running until the defined condition returns false.
 * For loops loop through a block of code a number of times
 * 2. A while loop executes a statement as long as the test condition evaluates to true.
 * 3. For in loops iterate through an object in order to get its key/value pairs.
 * 4. For loops are comprised of 3 statements:
 * start: initializes counting variable
 * stop: defines a condition that when false stops the loop
 * update: defines how to increment or decrement the counting variable
 */


 //1. For loop//
 // Iterating over an array forward using a for in loop.
 var strNums = ['7', '5', '3', '1'];
    for(let i = 0; i <= strNums.length; i++){
        console.log(strNums[i]); //---> Prints 7, 5, 3, 1 to the console.
 }
 
 // Iterating over an array backwards using a for in loop. 
 var sizes = ['large', 'medium', 'small']
    for(let i = sizes.length - 1; i >= 0; i--){
            console.log(sizes[i]);//---> Prints small, medium ,large to the console.
    }

// Using a for loop to iterate starting at one and incrementing till we get to number 5 and stop. 
// Expression one is used to initialize a counter variable
// Expression two is the condition for running the code block and tells it when to stop
// Expression three is used to increment the counter variable

 for(let m = 1; m <= 5; m++){
    console.log(m); //----> Prints 1, 2, 3, 4, 5 to the console.
 }
 //2. While loop//
 // First initialize a counter variable
 // The code within the loop will run, over and over again as long as its true and then it'll stop.
 // Using a while loop to iterate starting at 5 and decrementing till we get to 1
 // Decrement the counter variable in order to count down/backwards.

  let count = 5;
  while(count >= 1){
  console.log(count); //---> Prints 5, 4, 3, 2, 1 to the console.
  count--;
}

//3. For in loop//
// The syntax for a for in loop is >> for (let key in object){}
// You need to put the name of the object you are trying to iterate through
// To print its keys you need to console.log(key);
// In order to get its values you need the name of the object and key in brackets console.log(object[key]);
// If you dont know the keys you will need quotes around the key name when using bracket notation

var cat = {name: 'Ava', chubby: true, fur: 'gray'}

for (let key in cat){
    console.log(key) //---> Prints name chubby fur to the console.
    console.log(cat[key]) //---> Prints Ava true gray to the console.
}
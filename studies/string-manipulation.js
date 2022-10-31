/**
 * STRING-MANIPULATION
 * 
 *0. To change or manipulate a string some functions or methods are required.
 *1. There are different methods you can use on a string to manipulate/change it.
 */

 1.//String Manipulation With Template Literals//
 var favColor = 'Green';
 var favAnimal = 'White Tiger!';
 var favThings = `${'My favorite color is '}${favColor}${' and my favorite animal is a '}${favAnimal}` // Using template literals
 console.log(favThings); // My favorite color is Green and my favorite animal is a White Tiger!

 2.//slice() Method//
 //The slice() method  returns a shallow copy of a portion of an array into a new array object selected from start to end
 // (end not included) where start and end represent the index of items in that array.
 // The original array will not be modified.
 let array = ['pink', 'orange', 'green', 'yellow', 'blue'];

 console.log(array.slice(1)); //Prints ['orange', 'green', 'yellow', 'blue']
 console.log(array.slice(2, 4)); //Prints ['green', 'yellow']
 console.log(array.slice(-1)); //Prints last elemnt in array ['blue']

 3.//.toLowerCase() Method//
 //Converts a string to upper case with toLowerCase() method
 let text1 = "HELLO PEOPLE!";
 let text2 = text1.toLowerCase();
 console.log(text2); //Prints hello people!

 4. //Replace() Method//
 //The replace() method replaces a specified value with another value in a string.
 let text = "I was born in 1805!";
 let newText = text.replace("1805", "1995");
 console.log(newText); //Prints I was born in 1995!
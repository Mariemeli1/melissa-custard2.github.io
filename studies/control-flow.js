/**
 * CONTROL-FLOW
 * 
 * 0. Conditional statements are used to perform different actions based on different conditions.
 * The 4 conditional statements we can use are: if, else, else if, and switch statements.
 * 1. If statements are used to perform different actions based on different conditions.
 * 2. Use else statements to specify a block of code to be executed, if the same condition is false.
 * 3. Use else if to specify a new condition to test, if the first condition is false.
 * 4. Use switch to specify many alternative blocks of code to be executed.
 */

 1.//if statements//
 var age = 27;
 if (age < 28) {
    console.log("Great Age"); //Logs Great Age to the console
  }

  2.//else statements//
  var age = 29; 
  if (age < 28) { //This will hit false
    console.log("Youngin")
  } else {
    console.log("Dusty"); // logs Dusty to the console
  }

  3.//else if statements//
  var myWeight = 140;
  if (myWeight < 140) { 
    console.log("Eat a Burger") 
  } else if (myWeight > 150) {
    console.log("Stop eating burgers") 
  } else {
    console.log("Pay attention to health not weight"); //Prints Pay attention to health not weight to the console
  }
  
  4.//switch statement//
  //The switch expression is evaluated once.
  //The value of the expression is compared with the values of each case.
  //If there is a match, the associated block of code is executed.
  //If there is no match, the default code block is executed.

  switch ("Mcdonalds") {
    case "Burger King":
      console.log("I love burgers");
      break;
    case "Captain Sals":
      console.log("I love crawfish");
      break;
    case "Wendys":
      console.log("I love fake meat"); 
      break;
    case "Mcdonalds":
        console.log("I love chicken mcnuggets"); //Prints "I love chicken mcnuggets" to the console
    default:
      console.log("Im a vegan");
      break;
  }

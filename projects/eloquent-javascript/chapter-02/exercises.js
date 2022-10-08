
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //create and assign a variable called hashbrown to a empty string
 let hashbrown = '';
  //create a for loop starting at one and stopping when i is less than or equal to input num and incrementing each time 
    for(let i = 1; i <= num; i++){
   // adding and assigning '' to #
   hashbrown += "#";
   //checking my triangle
   console.log(hashbrown);
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //create a for loop starting at one and stopping when i is less than or equal to 15 and incrementing each time 
  for(let i = 1; i <= 15; i++){
    //if i is divisible by 3 print 'Fizz' and if i is divisible by 5 print 'Buzz' to the console
      if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz');
      //else if i is divisible by 3 print 'Fizz' to the console
      } else if (i % 3 === 0){
      console.log('fizz');
      //else if is divisible by 5 print 'Buzz' to the console
      } else if (i % 5 === 0){
      console.log('buzz');
      } else { // logging numbers 1 to 15 to console
        console.log(i);
      }
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //create a variable and assign it to a hashtag
  let hashy = "#";
  //create a variable and assign it to a empty string
  let str = "";
  //created a for loop to add a newline character to my str variable at each iteration
  for (let i = 0; i < num; i++) {
    //created a inner for loop to add either a hashtag or a space to my str variable at each iteration
    for (let m = 0; m < num; m++) {
      //determining ing if the remainder of m + i is strictly equal to 2
      if ((m + i) % 2 === 0) { 
        //if it is, add and assign a space to str
        str += " ";
      } else { //else if it isn't, add and assign a hashtag to str
        str += hashy;
      }
    }// adding and assigning a new line character to str at each iteration
    str += "\n";
  }
  //checking my checkboard
  console.log(str);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

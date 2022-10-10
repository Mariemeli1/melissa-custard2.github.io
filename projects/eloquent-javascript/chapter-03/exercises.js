////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//added two parameters in place of any 2 numbers
function min(num1, num2) {
  //returning the minumun number between my 2 parameters using Math.min
return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//added a parameter of num in place of any number
function isEven(num) {
  //determining if input num is even by checking it it has a remainder of  0
 if(num % 2 === 0){
  //return true if true
  return true;
  //else if input num is odd by and it doesn't have a remainder of  0
  } else if (num % 2 !== 0){
    //return false
   return false;
    }else{ //else hard return
     return;
  }
}


////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//added a parameter of string and char
function countChars(str, char) {
//set a count variable that increments at each iteration of the input char
let count = 0;
//iterating through the input string
for(let i = 0; i < str.length; i++){
  //if current index of str is strictly equal to the input char
  if(str[i] === char){
    //increment count variable at each iteration
    count++
 }
}//return count 
return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//added a parameter of string
function countBs(str) {
  //set a variable to the uppercase letter B
  let char = 'B';
  //set a count variable to 0 to later increment at each iteration of B
  let count = 0;
  //iteratr through my string
  for(let i = 0; i < str.length; i++){
    //determining if current index in string is 'B'
    if(str[i] === char){
      //if it is b increment at each iteration
      count++
   }
  }
  //return count of B's
  return count;
}


  //Tried using filter here but just realized i needed to return a number not a letter
// var strings = countBs.filter(function(letter){
//   return letter === 'B';
// })
// }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};

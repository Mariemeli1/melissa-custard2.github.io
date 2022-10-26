// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  //using the reduce method to return a new array
  let array = arr.reduce(function(acc, curr){
    //concatenate the current element in arr into a empty array
    return acc.concat((curr), []);
  });//return the array
  return array;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  //iterating through the test function on the current loop value and stops if that returns false
  //and calls the update function to create a new value and starts from the beginning
  for(let i = value; test(i); i = update(i)){
    //calls the body function and giving it the current value.
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
    //determine if test was not passed in
    if(test === undefined ){
      //determine if array is an array
      if(Array.isArray(array)){
          //iterate through array
          for(let i = 0; i < array.length; i++){
              //determine if array[i] is truthy
              if(!array[i]){
                  //return false;
                  return false;
              }
          }
      } else { //else
          //iterate through object
          for(let key in array){
              //determine if array[key] is truthy
              if(!array[key]){
                  //return false;
                  return false;
              }
          }
      }

  } else{ //else
      //determine if array is an array
      if(Array.isArray(array)){
          //iterate through array
          for(let i = 0; i < array.length; i++){
              //determine if invoking test on the params is not true
              if(test(array[i], i, array) == false){
                  //return false
                  return false;
              }
          }
      } else{ //else its an object
          //iterate through object
          for(let key in array){
              //determine if invoking test on the params is not true
              if(test(array[key], key, array) === false)
              {   //return false;
                  return false;
              }
          }

      }
  }//return true
  return true;
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  //create an array that will go from left to right
  let ltr = [];
   //create an array that will go from right to left
let rtl = [];
//iterate through input string
  for(let i = 0; i < string.length; i++){
    //create a variable and set it to the strings character code and iterate through array of script
    let scriptName = characterScript(string.charCodeAt(i));
    //if scriptName does not equal null
    if(scriptName !== null){
      //if script name direction is left to right
      if(scriptName.direction === 'ltr'){
        ///push the scriptName into the left to right array
          ltr.push(scriptName);
      } else{//else
        //oush scriptName into rtl
        rtl.push(scriptName);
      }
    }
  }
//compare the lengths of the ltr/rtl arrays
if(ltr.length > rtl.length){
  //return left to right
  return 'ltr'
}else {///else
  //return right to left
  return 'rtl';
}
}



// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};

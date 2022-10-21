////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //create a new array to push all the values from start to end in
  var newArray = [];
  //if start is equal to end
  if(start === end){
    //return empty array
    return newArray;
  }//if step is not undefined 
  if(step !== undefined){
    //if step is less than 0
    if(step < 0){
      //return new array
      return newArray;
    }//iterate through start to end and add step to current index
    for(let i = start; i <= end; i += step){
      //pushing all the values from start to end into my newArray
    newArray.push(i);
    }//else
  } else {//iterate through start to end and increment
    for(let i = start; i <= end; i++){
      //pushing all the values from start to end into my newArray
    newArray.push(i);
    }
  }

//return new array
return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  //using the reduce method to return a single value
  let sumNum = array.reduce(function(accumulator, value){
    //returning the acc plus the current value to get the sum
    return accumulator + value;
  }, 0);
  //return sumNum
  return sumNum;
};

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //create a new array
var newArray = [];
for(let i = array.length -1; i >= 0; i--){
//push in array values in reverse to new array
newArray.push(array[i]);
}
//return new Array
return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  //return array in reverse using the reverse method;
return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //created a variable and set it to null
    let rest = null;
    //iterating through my array in reverse
  for(let i = array.length - 1; i >= 0; i--){
    //assigning rest to the object with value arrays index and rest:rest passed in
    rest = {value: array[i], rest: rest}
    
  }//return rest
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) {
  //if list.rest is null
if(list.rest === null){
  //push list.value into output array
output.push(list.value)
//return default param
return output;
}
//pushing list.value into output array
output.push(list.value)
//returning the function call with list.rest and default param passed in
return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  //create a new variable and assign it to function call with list inside
  var newArray = listToArray(list);
  //push value to front of array
  newArray.unshift(value);
//return arrayToList invokation with new Array passed in
  return arrayToList(newArray);
 }
 




////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  //create a new variable and assign it to list to array function call passing in list
  var newArray = listToArray(list);
  //if num is negative
if(num <  0){
  //return undefined
return undefined;
//else if num has a value of 0
}else if (newArray[num] !== undefined){
  //return first endex of array
  return newArray[num];
}//return new array
return newArray;
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //determine if x and y are both not objects
  if (typeof x !== "object" && typeof y !== "object"){
    return x === y
  }//determinf if either x or y are both not objects
  if (typeof x !== "object" || typeof y !== "object"){
    return false;
  }
  //create array of objects keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(x);
  //determine if both xKeys and yKeys dont have the same lengths
  if(xKeys.length !== yKeys.length){
    return false;
  }
   // iterate through xKeys to see if properties match
   for (let i = 0; i < xKeys.length; i++){
    //
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])){
      return false;
    }
  }//return true
  return true;
};
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};

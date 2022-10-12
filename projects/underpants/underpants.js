// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';





var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    //return input unchanged
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    //determining if value is an array , if it is return array in a string
   if(Array.isArray(value)){
    return "array";
    //determining if value is null , if it is return null in a string
   } else if (value === null){
    return "null";
    //determining if value is undefined , if it is return undefined in a string
   } else if (value === undefined){
    return "undefined";
   } else { //else return typeof value
    return typeof value;
   }
}
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(arr, num){
    //if array is not an array
   if(Array.isArray(arr) === false){
    //return empty array
    return [];
   } //if num is undefined
    if(num === undefined){
    //return the first element in array
    return arr[0];
   } //if num is negative
    if(num < 0){
        return [];
   }//if num is greater than array.length
    if (num > arr.length){
        return arr;
   }//return arr sliced starting at 0 and ending at num
   return arr.slice(0, num);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, num){
    //if array is not an array
    if(Array.isArray(arr) === false){
        //return an empty array
        return [];
    } //if num is undefined
    if(num === undefined){
        //return last element of array
        return arr[arr.length - 1];
    }//if num is less than 0
    if(num < 0){
        //return empty array
        return [];
    }//if num is greater than arr.length
    if(num > arr.length){
        //return arr
        return arr;
    }//returning array sliced from last element in array usisng negative
    return arr.slice(-2);
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, value){
    //iterated through array
    for(let i = 0; i < arr.length; i++){
        //if array includes value
        if(arr[i] === value){
            //return index
              return i;
        } 
    } //return -1 if value is not an array
    return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(arr, value){
    //iterate through my arr
    for(let i = 0; i < arr.length; i++){
        //ternary operator in a if statment checking if  array contains value if it does return true if not return false
        if(arr[i] === value ? true : false){
            //return true
        return true
        }
    }//return false;
    return false;
}



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = (function(collection, func){
    //determine if collection is an array
    if(Array.isArray(collection)){
        //iterate through input array
        for(let i = 0; i < collection.length; i++){
        //invoke input func, passing in current element, index and array
        func(collection[i], i, collection);
        }
    }else{ //else its an object
        //iterate through collection using a for in loop
        for(var key in collection){
            //invoke input func, passing in current key, value, and object
           func(collection[key], key, collection);
        }
    }
})

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(arr){
    //creating a new variable and used spread operator and remove duplicate items and set it back to an array
    let unique = [...new Set(arr)];
     //return new array with duplicates removed
    return unique;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, func){
    //create a empty array 
    var newArr = [];
    //iterate through array
    for(let i = 0; i < arr.length; i++){
        //checking if func for each element in array is passing in the element, index and array
       if(func(arr[i], i, arr)){
        //push element in newArr
        newArr.push(arr[i]);
        }
    }//return newArr
    return newArr;
}
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(arr, func){
    var newArr = [];
    //iterate through array
    for(let i = 0; i < arr.length; i++){
    //checking if func for each element in array is not passing in the element, index and array
        if(func(arr[i], i, arr) === false){
    //push element in newArr
        newArr.push(arr[i]);
        }
    }//return newArr
    return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr, func){
    //create a new aray set to an array with a sub array
    let newArr = [[],[]];
    //iterate through arr
    for(let i = 0; i < arr.length; i++){
        //checking if func for each element in array is passing in the element, index and array
        if(func(arr[i], i, arr)){
            //pushing in the array element to the first array in my newArr
           newArr[0].push(arr[i]);
          //checking if func for each element in array is not passing in the element, index and array
        }else if(func(arr[i], i, arr) === false){
            //pushing in the array element to my second array in my newArr
            newArr[1].push(arr[i]);
        }
    }//return newArr
    return newArr;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    //create a new array set to a empty array
    var newArr = [];
    //determining if collection is an array
    if(Array.isArray(collection)){
    //iterate through collection array
        for(let i = 0; i < collection.length; i++){
        //invoke input func, passing in current element, index and array
         func(collection[i], i, collection)
         //pushing in current element, index and array into my new array
        newArr.push(func(collection[i], i , collection));
        }
    } else {//else
        //iterating through collection object
        for(let key in collection){
            //invoke input func, passing in the value, key and object
            func(collection[key], key, collection)
            //pushing in the value,key and object into my newARR
            newArr.push(func(collection[key], key, collection));
        }
    }//returning new array
    return newArr;
}  


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function(arr, prop){
    //using map to return an array   containg the value of propert for every element in array
    return _.map(arr, function(elm, ind, col){
        //returning the property for every element in array
        return elm[prop];
    })
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
   
    //determine if func was not passed in
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(!collection[i]){
                    //return false;
                    return false;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(!collection[key]){
                    //return false;
                    return false;
                }
            }
        }

    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is not true
                if(func(collection[i], i, collection) == false){
                    //return false
                    return false;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is not true
                if(func(collection[key], key, collection) === false)
                {   //return false;
                    return false;
                }
            }

        }
    }//return true
    return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
   
    //determine if func was not passed in
    if(func === undefined ){
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if collection[i] is truthy
                if(collection[i]){
                    //return true;
                    return true;
                }
            }
        } else { //else
            //iterate through object
            for(let key in collection){
                //determine if collection[key] is truthy
                if(collection[key]){
                    //return true;
                    return true;
                }
            }
        }

    } else{ //else
        //determine if collection is an array
        if(Array.isArray(collection)){
            //iterate through collections array
            for(let i = 0; i < collection.length; i++){
                //determine if invoking func on the params is true
                if(func(collection[i], i, collection) === true){
                    //return true
                    return true;
                }
            }
        } else{ //else its an object
            //iterate through object
            for(let key in collection){
                //determine if invoking func on the params is true
                if(func(collection[key], key, collection) === true)
                {   //return true;
                    return true;
                }
            }

        }
    }//return false
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(arr, func, seed){
    //create result variable
    let result;
    //determine if seed was not given a value
    if(seed === undefined){
    //assign result value to first value in array
    result = arr[0];
    //iterate through input array starting at the 1 index
        for(let i = 1; i < arr.length; i++){
        //assign result to function call passing in previous result, element index, and the whole array
       result = func(result, arr[i], i, arr);
        }
    } else {
        //assign result to the seed value
        result = seed;
        //iterate through array
        for(let i = 0; i < arr.length; i++){
            //assign result to function call passing in previous result, element index, and the whole array
            result = func(result, arr[i], i, arr);
        }
    }//return result
    return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(obj1, obj2, obj3){
    //using Object.assign to pass in propteries from obj2 and obj3 into obj1
    Object.assign(obj1, obj2, obj3);
    //return obj1 with all the properties passed in
    return obj1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

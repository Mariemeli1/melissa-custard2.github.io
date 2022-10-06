//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function objectValues(object) {
//using object.values method to return an array with the objects values in it
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // return the objects keys in a string seperated by a space
   return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create an empty array
     var arr = [];
        //using a for in loop to loop through my object and grab its values
        for(let key in object){
            //if typeof value is a string
            if(typeof object[key] === 'string'){
                //push it into the array
               arr.push(object[key]);
            } 
        }
        //return the array in a string sepreated by spaces
       return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //checking if collection is an array
    if(Array.isArray(collection)){
        //if it is return 'array'
        return 'array';
    }//checking if collection is an object
    if(typeof collection === 'object'){
        //return 'object'
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

//created a variable newstr and set it to the input string capitalized at the first letter using slice
var newstr = string.charAt(0).toUpperCase() + string.slice(1);
//returning newstr
return newstr;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
        //created a variable and set it to string and used the split method to create an array of strings
        var upper = string.split(" ");
        //iterated through upper which is the string in order to get what i need
      for(let i = 0; i < upper.length; i++){
        //getting the first letter of every word and capitalized it 
       upper[i] = upper[i][0].toUpperCase() + upper[i].substr(1);
      }
        //return the strings that were in the array into one string using the join method
       return upper.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //returning "Welcome Benny!" using charAt to get the first index and the toUpperCase method
    // and slice method to slice off the 1st letter of every Name and uppercase it
    return "Welcome" + " " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //return ""Jake is a Dog"" by using dot notation to acces the name and species, charAt to get the first
    //index of name and species, toUpperCase and slice method to capitalize each first letter and "is a" in between
   return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 //created an empty array
    var arr = [];
    //if object has noises property and object has more then 0 noises
        if(object.hasOwnProperty('noises') && object.noises.length > 0){
            //assign array to object.noises and turned it into a string seperated by spaces
        arr = object.noises.join(" ");
        } else{ //else
        //return 'there are no noises'
        return 'there are no noises';
        }
        //return the string/array
    return arr;
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //using includes method to see if string has 'word'
    if(string.includes(word)){
        //return true
        return true;
    }else{ //else
        return false; //return false
    }
 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
 //pushing name into the friends key from my object
  object.friends.push(name);
  //returning the object with the name pushed into the friends key array
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //if objects friends is undefined
    if(object.friends === undefined){
        return false; //return false
        //else if objects friend includes name
    }else if(object.friends.includes(name)){ 
    return true; //return true
    }else{ //else return false
        return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //set a variable to an empty array
    var arr = [];
    //iterating through input array
    for(let i = 0; i < array.length; i++){
        //if current friend in array does not include name
    if(!(array[i].friends.includes(name))){
        //if current name in array is not in name
        if(!(array[i].name === name)){
            //push array names into array
          arr.push(array[i].name);
        }
    }
    }//return array
    return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //set obj to input object
    var obj = object;
    //set objects keys to input value
    object[key] = value;
    //return object
    return obj;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //iterating through my input object
   for(let key in object){
    //iterating through my input array
        for(let i = 0; i < array.length; i++){
            //if current item in array is strictly equal to key
          if(array[i] === key){
            //delete objects keys
            delete object[key];
          }
        }
    }//return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //creating a new variable and used spread operator and remove duplicate items and set itback to an array
    let unique = [...new Set(array)];
     //return new array with duplicates removed
    return unique;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
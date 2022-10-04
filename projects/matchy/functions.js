/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//created a function named search that takes 2 parameters, an array and a string
function search(animal, name){
    //iterating through my array 
    for(let i = 0; i < animal.length; i++){
        //determining if an animal with the name exists
        if(animal[i].name === name){
            //return the animals object if it exists
            return animal[i];
        }
    }//return null if it doesnt exist
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//created a function called replace with 3 parameters: animals, name and replacement
function replace(animals, name, replacement){
    //created a for loop that iterates through my animals array
    for(let i = 0; i < animals.length; i++){
         //determining if an animal with the name exists
        if(animals[i].name === name){
            //assigning my current animals object to the new replacement object
           animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called remove that takes in 2 parameters: an array, a name
function remove(animals, name){
    //created a for loop that iterates through my animals array
    for(let i = 0; i < animals.length; i++){
         //determining if an animal with the name exists
        if(animals[i].name === name){
            //deleting my current animals object using the splice method
           animals.splice(0, 1);
        }
    }    
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a function called add that takes in 2 parameters: an array, an object
function add(animals, animal){
         //determining if an animal with the name and species property is greater than 0
        if(animal.name.length > 0 && animal.species.length > 0){
        }
        for(let i = 0; i < animals.length; i++){

        }
        
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}

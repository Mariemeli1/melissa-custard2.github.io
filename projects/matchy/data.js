/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "chicken";
animal['name'] = 'Benny';
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = 'bock';
noises.push('woof');
noises.unshift('meow');
noises[noises.length] = 'arrr';

console.log(noises.length);
console.log(noises.length-1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push('eee');

console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Through dot and bracket notation and a for in loop
 *
 * 2. What are the different ways of accessing elements on arrays?
 * Through bracket notation and a for loop 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assigning my animals variable to an empty array
var animals = [];

//pushing animal array to my animals array
animals.push(animal);
console.log(animals);
//created a duck object
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
//pushing duck object into my animals array
animals.push(duck);
console.log(animals);

//creating 2 more animal objects  with a species a name and 2 sounds

var cat = {
  species: 'cat',
  name: 'Tink',
  noises: ['rawr', 'mew']
}
//pushing cat to my animals array
animals.push(cat);
var pig = {
  species: 'pig',
  name: 'Chris P. Bacon',
  noises: ['sizzle', 'crunch']
}
//pushing pig to my animals array
animals.push(pig);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//assigning friends to an array because arrays hold lists
//created a variable named friends and set it to an array
var friends = [];
//created a function called getrandom that takes in my animals array as its parameter
function getRandom(anims){
  //getting a random index of my input array using Math.random and returning it
  return Math.floor(Math.random() * anims.length);
}
friends.push(getRandom());
console.log(friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
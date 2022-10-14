// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./melissa-custard2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //implement _.filter() to return an array of only male customers
    let males = _.filter(array, function(customer, index, array){
        //return the input character 
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array) {
    //implement _.reduce() to return number of only female customers
    return _.reduce(array, function(acc, current){
        ///determining if current gender is female
        if(current.gender === 'female'){
            //increment accumulator
            acc++;
        }//return accumulator
        return acc;
    },0);

};

var oldestCustomer = function(array) {
    //implement _.reduce() to return the oldest customers name
    let old = _.reduce(array, function(acc, current){
        //if the current age is greater then or equal to the accumulators age
        if(current.age >= acc.age){
            //assign accumulator to the oldest customers name
            acc = current.name;
        }//return acc(oldest customers name)
        return acc;
    });//return the variable old
    return old;
};


var youngestCustomer = function(array){
     //implement _.reduce() to return the oldest customers name
     let youngin = _.reduce(array, function(acc, current){
        //if the acc age is less than current age
        if(acc.age < current.age){
            //assign current to the youngest customers name
            current = acc.name;
        }//return current 
        return current;
    });//return the variable youngin
    return youngin;
};

var averageBalance = function(array){
  let sum = _.reduce(array, function(acc, current){
        return acc += parseFloat(current.balance.replace(/[$,]/g, ""));
    }, 0)
    return sum / array.length;
};

var firstLetterCount = function(array, letter){
     //implement _.filter() to return the number of first letter that start with the given input letter
     let first = _.filter(array, function(customer, index, array){
        //return the first letter of customer name that strictly equals the letter using lowercase method
        return customer.name[0].toLowerCase() === letter.toLowerCase();
            
    });
    //return the number of first letters that start with the given input letter
    return first.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    //implement _.filter() to return the number of the customers friends first letter that begin with the input letter
    let homie = _.filter(array, function(customer, index, array){
        //iterate through customers array
        for(let i = 0; i < customers.length; i++){
            //determine if customers has a friend array
            if(customers[i] === customer.friends){
            //using a for loop to iterate through customers friends array
                for(let v = 0; v < customers[i].friends.length; v++){
                //returning the first letter of customers friends first letter of names that begines with the input letter
                return customers.friends.name[0].toLowerCase() === letter.toLowerCase();
                
                }
            }
        }
    });
    return homie.length;
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

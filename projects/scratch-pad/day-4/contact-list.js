// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create a object that you will later return
    var obj = {};
    //creating a key property of id with a value of the id parameter
    obj.id = id;
    //creating a key property of nameFirst with a value of the nameFirst parameter
    obj.nameFirst = nameFirst;
    //creating a key property of nameLast with a value of the nameLast parameter
    obj.nameLast = nameLast;
    //return obj object
    return obj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //assigned contacts variable to an array
    
    return {
        // we implemented the length api for you //
        length: function() {
            //returning contacts length
            return contacts.length;
        },
        addContact: function(contact){
            //push contact object to add it to contacts list
            contacts.push(contact);
        },
        findContact: function(fullName){
            //creating a variable and using split method to seperate the full name into two strings
            var array = fullName.split(" ");
         //iterate through contacts using a for loop
         for(let i = 0; i < contacts.length; i++){
            console.log(contacts[i])
            //determining if nameFirst and nameLast aka fulllName is in contactslist
            if(contacts[i]['nameFirst'] === array[0] && contacts[i]['nameLast'] === array[1]){
                //return contacts object if fullName is found
                return contacts[i];
            } else { //else return undefined
                return undefined;
            }
         }
        },
        removeContact: function(contact){
            //removing contact object off of contacts list using the pop method
            contacts.pop(contact);
        },
        printAllContactNames: function(){
            //creating a string to later return
            var str = " ";
            //looping through the contacts list to get the first and last name
            for(let i = 0; i< contacts.length; i++){
                str += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
                str.split("$");
            }
            return str;
        }


    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

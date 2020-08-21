/** Create Object Literal
 *  We use curly braces, `{}` to design an object literal
 *  We fill an object with unordered data. This data is organized into `key-value` pairs. A key is like a variable name that points to a location in memory that holds a value.
 * 
 * We make a key-value pari by wrting the key's name, or `identifier`, followed by a colon then the value. We seperate each key-value piar in an object literal with a comma(,). 
*/

// An object literal with two key-value pairs( we call this `properties`)
let The_Economist = {
    'Author' : 'The Economist',
    'Volume' : 55,
    'headline' : ['America balck elite','Reinventing the IPO','A sea of trouble: the sasterm Med']
};

// Accessing Properties
let head_liner = The_Economist.headline;
console.log(head_liner);

// Bracket Notation
// The second way to access key's value is by using bracket notation [ ].
console.log(The_Economist['headline'][0]);

// With bracket notation we can also use a variable inside the brackets to select the keys of an object. This cna be especially helpful when working with functions
let returnProp = (objectName,propName) => {
    return objectName[propName];
};

console.log(returnProp(The_Economist,'Volume'));

// Property Assignment
// Objects are mutable meaning we can update them after we create them
// We can use either dot notation, or bracket notaiton and the assignmet operatior, = to add new key-value pairs to an object or change an exsiting property.
/**
 *  If the property already exsits on the object, whatever value it held before will be replaced with the newly assigned value
 *  If there was no property with that name, a new property will be added to the object. 
 */

 // update the Volume
 The_Economist['Volume'] = 56;
 console.log(The_Economist);

 // Add new Key-value pair
 The_Economist['Country'] ='Canada';
 console.log(The_Economist);

 /** Method
  * When the data stored on an object is a function we call that a 'method'. A property is what an object has, while a method is what an object does.
  * We can include methods in our object literals by creating ordinary, comma-seperated key-value pair. The key werves as our method's name, while the value is an anonymous function expression.
  */
 const macbook = {
     'owner': 'Robert',
     //Method
     shut_down() {
         console.log('The computer will be shut down in 60 sec');
     }
 };
 macbook.shut_down();

 /** Nested Objects 
  * In Application code, objects are often nested - an object might have another object as a property which in turn could have a property that's an array of even more obejcts. 
  */
 let airplane = {
     crew: {
         captain: {
             name : 'Sandra',
             age : 55,
             country: 'Canada',
             Company: 'AirCanada',
             info_announcement() {
                 console.log('All crew attention, This is Captin Speaking');
             }
         }
     },
     engine: {
         model: "ZAS-3000",
         power: "4000 housepower"
     },
     passengers: null,
     color : 'Blue'
 };

 // Chain operators to access nested properties. 
 let engine_power = airplane.engine['power'];
 console.log(engine_power);

 // Update passengers
airplane.passengers = [];
console.log(airplane);
const first_passngers = {name:'Robert', Age: 20};
airplane.passengers.push(first_passngers);
console.log(airplane);

/** Pass By Reference
 * Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an arguement, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object pemanenetly (even when the object is assigned to a `const` variable).
 */
let paintIt = obj => {
    obj.color = "silver gold";
};
paintIt(airplane);
console.log(airplane.color); // Print `silver gold`
// The function paintIt() permanently changed the color of our airplane object. However, reassignement of the airplane variable wouldn't work in the same way;

let book = {
    author: "A",
    volume: 1
};

let tryReassignment = obj => {
    obj = {
        book_status: 'sold out',
        book_reservation: 4
    };
    console.log(obj); // prints {'book_status': 'sold out', 'book_reservation': 4}
};
console.log(tryReassignment(book)); // This attempt at reassignemtn does not work. This return `undefined`
console.log(book); // Still default variables

let airplane2 = {
    'Engine Type' : 'turbojet',
    '# of engine' : 4
};

// function chageEngine() that ahs an object as a parameter and sets that object's Engine Type property to 'turboshaft'
let changeEngine = obj => {
    obj['Engine Type'] = 'turboshaft';
};

// function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object's disable property to true
let remotelyDisable = obj => {
    obj['disabled'] = true;
};

//call the funtions with the airplane2 object
changeEngine(airplane2);
remotelyDisable(airplane2);
console.log(airplane2);

/** Looping through Objects
 *  The Key-value pairs in objects aren't ordered.
 *  JavaScript has given us alternative solution for iterating through objects with the `for...in` syntax
 */

 let airplane3 = {
     crew: {
         captain: {
             name: 'Lily',
             age: 50,
             country: 'Canada'
         },
         'chief officier': {
             name: 'Sam',
             age: 34,
             country: 'USA'
         },
         'flight attendant1': {
             name: 'Cindy',
             age: 26,
             country: 'China'
         },
         'flight attendatn2': {
             name: 'Tom',
             age: 28,
             country: 'France'
         }
         
     }
 };

 //for...in
 // Iterate through each element of the airpalne3.crew object.
 // In each iteration, the variable crewMembers is set to one of airpalne3.crew's keys, enabling us to log a list of crew members name 
 /**
  *  for (let variableName in outerObject.innerObject) {
    console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
  };
  */
 for(let crewMembers in airplane3.crew) {
     console.log(`${crewMembers}: ${airplane3.crew[crewMembers].name}`);
 }

 for (let crewMembers in airplane3.crew) {
     console.log(`${airplane3.crew[crewMembers].name}: ${airplane3.crew[crewMembers].country}`);
 }

/** [`this` keyword]
 *  Objects are collections of related data and funtionality. We store that funtionality in methods on our objects.
 *  
 *  The `this` keyword references the calling object which provides access to the calling object's properties. 
 */

const tesla = {
    model_type : "model X",
    turn_on() {
        console.log("The engine operates now");
    },
    show_model() {
        // by using `this`, we're accessing the tesla object itself, and then the model_type property of tesla by using property dot notation.
        console.log(`This is ${this.model_type}`);
    }
};
// call the tesla's turn_on method
tesla.turn_on();
// call the tesla's show_model method
tesla.show_model();


/** [Arrow Function and `this`]
 *  If we use the `this` keyword in a method then the value of `this` is the calling object. However, it becomes a bit more comlicated when we start using arrow functions for methods.
 * 
 *  Arrow functions inherently bind, or tie, an already defined `this` value to the funciton itself that is NOT the calling object. 
 */

const tesla1 = {
    model_type : "model Y",
    turn_on() {
        console.log("The engine operates now");
    },
    show_model: () => {
        console.log(`This is ${this.model_type}`);
    }
};
tesla1.show_model(); // Prints undefined
// The value of `this` is the global object, or an object that exists in the global scope, which doesn't have a model_type property and therefore returns undefined.  The key takeway from the example above is to avoid using arrow functions when using `this` in a method!


/** [A global Object]
 *  A global object is an object that always exists in the `global scope`
 */

/** [Arrow function expression]
 *  An arrow function expression is a systactically compact alternative to a regular `function exprssion`, although without its own bindings to the `this`, `arguments`, `super`, or `new.target` keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors. 
 */

/** [Privacy]
 *  Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don't wnat object code simply acceessing and updating an object's properties. When discussing privacy in object, we define it as the idea that only certain properties should be mutable or able to change in value. 
 * 
 * Certain langagues have privacy built-in for objects, but JavaSciprt does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property.: underscore `_` before the name of property to mean that the property should not be altered. 
 */

/** [Gatters]
 * Gatters are methods that get and return the interanl properties of an object.
 * Some advantages of using getter methods
 * 1) Getters can perform an action on the data  when getting a property
 * 2) Getters can return different values using conditionals
 * 3) In a gatter, we can access the properties of the calling objet using `this`
 * 4) The funtionality of our code is easeir for other developers to understand.
 * 
 * Another thing to keep in mind when using getter(and setter) method is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error.  
 */

const tesla3 = {
    _model : 'model A',
    _battery: 70,
    get batteryLevel() {
        if(typeof this._battery === 'number') {
            console.log(`The battery level is ${this._battery}`);
        }
    },
    set batteryLevel(newBattery) {
        if (newBattery === 100) {
            this._battery = newBattery;
        } else {
            console.log(`Full charging of battery is 100.`);
        }
    }
};
// To call a gatter method, similar to accessing a property, but do not need to include a set of parentheses.
tesla3.batteryLevel;


/** [Setters]
 *  Along with getter methods, we cal also create setter method which reassign values of exsiting properties within an object. 
 */

// Setter methods do not need to ba called with a set of parentheses. Syntactically, it looks like we're reassigning the value of a property. 
tesla3.fullChargeBattry = 100;
tesla3.batteryLevel;

/** [Factory Functions] 
 *  There are times where we want to create many instances of an object quickly. Here's where `factory functions` come in. A factory function is a function that return an object and cen be resued to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned. 
 */

 const magazine = (name, page, types, volume) => {
     return {
         name: name,
         page: page,
         types: types,
         info_volume() {
             console.log(`This magazie volume is # ${volume}`);
         }
     };
};

const vogue = magazine('Vogue',45,'Fashion',24);
const newsweek = magazine('Newsweek', 49, 'News', 86);
const menthshealth = magazine('Mens Health', 40, 'Health', 55);

console.log(vogue);

/** [Property value Shorthand]
 *  ES6 introduced some new shortcuts for assining properties to variable known as `destructing`.
 */

const magazine_shortHand = (name, page, types, volume) => {
    return {
        // We don't need to repeat for property assignements. 
        name,
        page,
        types,
        info_volume() {
            console.log(`This magazie volume is # ${volume}`);
        }
    };
};

/** [Destructured Assignment]
 *  In destructed assignemtn we create a variable with the name of an object's key that is wrapped in curly braces {} and assign to it the object. 
 */

let The_Economist = {
    'Author' : 'The Economist',
    'Volume' : 55,
    'headline' : ['America balck elite','Reinventing the IPO','A sea of trouble: the sasterm Med'],
    'Editor': {
        'main': 'Robert',
        'sub': 'Tom'
    }
};

const headline = The_Economist.headline;
console.log(headline);
// With destructed Assignment
const { Author }  = The_Economist;
console.log(Author);
// We can even use destructed assignemtn to grab nested properties of an object
const {main} = The_Economist.Editor;
console.log(main);


/**[Built-in Object Methods]
 * 1) The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
 * 
 * 2) The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
 * 
 * 3) The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
 */

const robot = {
model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Check the only key
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// Check entire structure of object
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Assign new properties in the object and return it.
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);

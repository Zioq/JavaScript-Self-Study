/** [Class Consturctor]
 * There are similiarities between class and object syntax, there is one important method that sets them apart. It's called the `constructor method`. JavaScript calls the `constructor()` method every time it creates a new `instance` of a class.
 */

 class Cat {
     constructor(name) {
         this.name = name;
         this.behavior = 0;
     }
 }
 // `Cat` is the name of our class. By convention, we capitalize and CamelCase class name.
 // JavaScripot will invoke the `constructor()` method every time we create a new instance of our `Cat` class 
 // This `constructor()` method accepts one arguements, `name`
 // Inside of the `constructor()` method, we use the `this` keyword. In the context of a class, `this` refers to an instance of taht class. In the `Cat` class, we use `this` to set the value of the Cat instance's `name` property to the `name` argument.
 // Under `this.name`, we create a property called `behavior`, which will keep track of the number of times a cat misbehavior. The `behavior` property is always initialized to zero.

  /** [Methods]
  * Class method and getter syntax is the same as it is for object EXCEPT YOU CAN NO INCLUDE COMMAS BETWEEN METHODS.
  * NOTICE, we also prepended our property names with underscores(_name, _departement), which indicates these properties should not be accessed directrly. 
  * Under the getters, we add methods. Between each of our methods, we DID NOT INCLUDE COMMAS
  */

 class Surgeon {
     constructor(name,department) {
         this._name = name;
         this._department = department;
         this._remainingVacationDays = 20; 
     }

     //getter
     get name() {
         return this._name;
     }
     get department() {
         return this._department;
     }
     get remainingVacationDays() {
        return this._remainingVacationDays;
     }
     //method
     takeVacationDays(dayoff) {
         this._remainingVacationDays -= dayoff;
     }
 }

 /** [Instance]
  *  An instance is an object that contains the property names and method of a class, but with unique property values. 
  */
 const cat1 = new Cat("cat1"); // create new Cat instance.
 console.log(cat1.name); // Log the name value saved to cat1 //Output : "cat1"

 // Create an instance of the `Surgeon` class - Set the `name` to `Curry` and `department` to `Cardiovascular`
 // Save the instance to a constant variable called `surgeonCurry`
 const surgeonCurry = new Surgeon('Curry','Cardiovascular');
 
 // Create an instance of the `Surgeon` class - Set the `name` to `Durant` and `department` to `Orthopedics`
 // Save the instance to a constant variable called `surgeonDurant`
 const surgeonDurant = new Surgeon('Durant','Orthopedics');


/**[Method Calls]
 * The syntax for calling methods and getters on an instance is the same as calling them on an object - append the instance with a period, then the proeprty or method name. FOR METHODS, YOU MUST ALSO INCLUDE OPENING AND CLOSING PARANTHESES.
 */

 // Log name property
 console.log(surgeonCurry.name);
 // Call .takeVacationDays() with input 5
 surgeonCurry.takeVacationDays(5); 
 // Print the value saved to the reaminingVacatioDays property.
 console.log(surgeonCurry.remainingVacationDays);
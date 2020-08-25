/** [Require()]
 *  To make use of the exported module and the behavior we define within in, we import the module into another file. In Node.js, use the `require()` function to import modules.
 */

 // Import the module by craeting a const variable called `Car` and setting it equal to the value of the `require()` funciton. 
 const Car = require('./car.js');

 // This function then ueses the `Car` module. By calling `Car.myCar`, we access the property `myCar` defiend in the `Car` module. 
 function display() {
     console.log(`My car is an `+ Car.myCar);
 }
 display();

 /** PATTERN TO IMPORT A MODULE
  * 1. Import the module with `require()` and assign it to a local variable.
  * 2. Use the module and its properties within a program. 
  */

  //Import car2.js
  const Car2 = require('./car2.js');
  Car2.getInfo();
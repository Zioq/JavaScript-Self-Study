/** [Module.exports]
 *  Defining a module in one file and making the module available for use in another file with Node.js `moduel.exports` syntax
 *  Every JavaScript file run in Node has a local `module` object with an `exports` property used to define what should be exported from the file.
 */

 // Creates Object that represents the module `Car`.
 const Car = {};
 // Define a property of the `Car` module. Add the data to the `Car` objects by setting properties on that object and giving the properties a value.
 Car.myCar = "Audi";
 // Export the module with `module.exports`
 module.exports = Car;

/** THE PATTERN USE TO EXPORT MODULE
 * 1. Create an object to represent the module.
 * 2. Add properties or methods to the module object.
 * 3. Export the module with `module.exports`
 *  */ 


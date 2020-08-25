/** [export default]
 * Node.js supports require() and module.exports, but as of ES6, JavaScript supports a new more readable and flexible syntax for exporting modules. 
 * `defualt export` and `named exports`
 */

 // The default export syntax works similarly to the `module.exports` syntax, allowing us to export one module per file.
 
 // export default uses the JavaSciprt export statment to export JavaScript objects, functions, and primitive data types.

 // Create an `train` module which is exported with `export default`
 let Train = {};
 // Add data in the form of properties and value to the Train module. Create an listOfTrain and add two array element that are both of type object. 
 Train.listOfTrain = [
     {
         name: "Expo Line",
         capacity: 100
     },
     {
         name: "Millenium Line",
         capacity: 200
     },
     {
         name: "Canada Line",
         capacity: 300
     }
 ];

 // Use export default to export the Train moduel 
 export default Train;

 /**
  * When using ES6 syntax, we use `export default` in place of `module.export`. 
  * Node.js DOES NOT support export default by default, so `module.export` is usually used for Node.js development and ES6 syntax is used for front-end development.
  */
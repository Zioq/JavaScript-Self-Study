/** [Import]
 * ES6 module syntax also introduces the `import` keyword for importing object.
 */
 // Import the train.js moduel
 import Train from './train';

 //Define the function to iterate array
 function displayTrainName() {
     // The forEach() should take an anonymous funciton as a parameter. 
     Train.listOfTrain.forEach(function(element){
         console.log("The Train of " +element.name +" capacity is :" + element.capacity  );
     });
 }
 displayTrainName();
 // This give an error beacuse of ES6 is not default. 
 // Here is a reference to fix the error
 // https://flaviocopes.com/how-to-enable-es-modules-nodejs/


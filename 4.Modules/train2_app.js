/** [Named Import]
 *  To import objects sotred in a variable, we use the import keyword and include the variable in set of {}.
 */

 // Import named objects
 import {listOfTrain, minimumStopRequirement, meetminimumStopRequirement} from './train2';

 //Define the function to iterate array. This time remove the object name and jsut call lthe variables.
 function displayTrainName() {
    // The forEach() should take an anonymous funciton as a parameter. 
    listOfTrain.forEach(function(element){
        console.log("The Train of " +element.name +" capacity is :" + element.capacity  );
    });
}

 displayTrainName();
 // Add new function 
 function displayInfo() {
     listOfTrain.forEach(function(element) {
         console.log(elementj.name + 'meets number of stops requirement: '+ meetminimumStopRequirement(element.stop, minimumStopRequirement.requiredStop));
     });
 }
 displayInfo();


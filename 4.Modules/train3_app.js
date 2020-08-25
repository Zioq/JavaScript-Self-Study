/** [Import as]
 *  To import named export aliases with the `as` keyword, we add the aliased variable in our import statement.
 */ 
/**
 * Another wary of using aliases is to import the entire module as an alias.
 * import * as Carte from './train3';
 * Carte.Train;
 * Carte.minStopReqs;
 * Carte.meetminStopReqs();
 */

 // Import named objects
 import {Train, minStopReqs, meetminStopReqs} from './train3';

 //Define the function to iterate array. This time remove the object name and jsut call lthe variables.
 function displayTrainName() {
    // The forEach() should take an anonymous funciton as a parameter. 
    Train.forEach(function(element){
        console.log("The Train of " +element.name +" capacity is :" + element.capacity  );
    });
}

 displayTrainName();
 // Add new function 
 function displayInfo() {
     Train.forEach(function(element) {
         console.log(elementj.name + 'meets number of stops requirement: '+ meetminStopReqs(element.stop, minStopReqs.requiredStop));
     });
 }
 displayInfo();


/** Named Exports
 * ES6 introduced a second common approach to export modules. In addition to export default, named exports allow us to export data throught the use of variables. 
 * 
 * 1. When we use named exports, we are not setting the properties on an object. Each export is stored in its own variable. 
 * 2. Exports objects by their variable names, Notice the keyword `export` is the prefix
 */

let listOfTrain = [
    {
        name: "Expo Line",
        capacity: 100,
        stop : ['Waterfront','Burrard','Granville', 'Stadium–Chinatown']
    },
    {
        name: "Millenium Line",
        capacity: 200,
        stop : ['VCC–Clark','	Commercial–Broadway','	Renfrew', 'Rupert']
    },
    {
        name: "Canada Line",
        capacity: 300,
        stop : ['Waterfront', 'Vancouver City Centre Station']
    }
];

let minimumStopRequirement = {
    requiredStop: 4
};

function meetminimumStopRequirement(stop, minimumStopRequirement) {
    if(stop.length >=requiredStop) {
        return true;
    } else {
        return false;
    }
} 

// Using the `export` keyword, export the variables
export {listOfTrain, minimumStopRequirement, meetminimumStopRequirement};
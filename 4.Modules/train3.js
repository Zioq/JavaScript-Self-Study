
/** [Export as ]
 *  Named exports also conventiently offer a way to change the naem of variable when we export or import them. We can do this with the `as` keyword. The `as` keyword allows us to give a variable name an alias. 
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

function meetminimumStopRequirement(stop, kminimumStopRequirement) {
    if(stop.length >=requiredStop) {
        return true;
    } else {
        return false;
    }
} 

// Use `as` keyword
export {listOfTrain as Train, minimumStopRequirement as minStopReqs, meetminimumStopRequirement as meetminStopReqs};
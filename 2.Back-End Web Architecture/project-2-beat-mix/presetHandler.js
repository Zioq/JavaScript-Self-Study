// Server-side code to handle saving and retrieving drum match present 

// Use this presets array inside your presetHandler
const presets = require('./presets');

const getPreset = (index) => {
    return presets[index] || null;
};

const createOrUpdatePreset = (index, array) => {
    if (!presets[index]) {
        return;
    } 
    presets[index] = array;
    return presets[index];
};

// Complete this function:
// This function will be called from within your sever to get an existing preset or `create`/`update` a present
// This funciton takes up to three arguments. 
// 1) A string representing the request type: `GET` or `PUT` 2) Array index of the presents array. 3) For `PUT` requests, newPresentArray will also be passed in, representing the new drum preset array to save at that index

const presetHandler = (method, index, newPresentArray) => {
    // Get: Find by ID
    if(method == "GET") {
        // If index is valid
        let preset = getPreset(index);

        if(preset) {
            // If index is valid, the first element of the return array should br 2000, meaning the request was OK
            return [200, preset];
        } else  {
            // If `presetHandler` is called with an invalid index, it should return an array with 404 as the first element, meaning that array index is Not Found
            return [404];
        }       
    } else if(method == "PUT") { // Update
        // For 'PUT' request, it should save the newPresentArray to that index and then also return it as the second element
        const newPreset = createOrUpdatePreset(index, newPresentArray);
        if(newPreset) {
            return [200, newPreset];
        } else {
            return [404];
        }

    } else {
        return [400];
    }
    
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

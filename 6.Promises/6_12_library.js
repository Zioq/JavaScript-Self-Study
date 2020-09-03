// checkAvailability() expects two string arguments: an item and a distributor. It returns a promise. The function simulates checking that the given distributor has a given item. 80% of the time it will resolve the promise with the item, and 20% of the time it will reject the promise with an error message stating that the item isn’t available.


const checkAvailability = (itemName,distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}!`);
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`);
                //Success handler
                resolve(itemName);
            } else {
                // Failure handler
                reject(`Error: ${itemName}is unavailable from ${distributorName} at this time`);
            }
        },1000);
    });
};

// Export module
module.exports = {checkAvailability}; 

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > 0.2);
} 
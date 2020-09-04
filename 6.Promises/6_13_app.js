const {checkAvailability} = require('./6_12_library.js');

const onFulfill = (itemArray) => {
    console.log(`Items checked: ${itemArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

// Create variables each assigned to a separate promise
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

//Invoke `Promise.all()` with an array
Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)// chain a .then() to the promise returned from Promise.all(). pass in onFulfill to server as teh success handler.
  .catch(onReject); // Add .catch() to the chain. Pass in onReject to serve as the failure handler. 

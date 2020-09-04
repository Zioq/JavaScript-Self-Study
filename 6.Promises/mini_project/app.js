// Import module
const {checkInventory} = require('./library.js');

// Get order
const order = [['iphone',100],['macbook',300]];

// Make success handler
const handleSuccess = (resolveValue) => {
    console.log(resolveValue);
};

// Make Failure handler
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

// Invoke checkInventory with order
checkInventory(order).then(handleSuccess,handleFailure);
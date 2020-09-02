//Import module
const {checkInventory} = require('./6_4_library.js');

const order = [['Milk', 200], ['Sugar',254]];

// Success handler
const handleSuccess = (resolveValue) => {
    console.log(resolveValue);
};

// Failure handler 
const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

// Invoke checkInventory with order.
checkInventory(order).then(handleSuccess,handleFailure);

// Import module
const {checkInventory, processPayment, shipOrderventory, shipOrder} = require('./library.js');

// Get order
const order =  {
    'items': [['iphone',1], ['macbook',1]],
    'giftCardBalance': 10000.00,
    'creditLimit': 50000000.00
};

// Design Chaining promise process
checkInventory(order).then((resolvedValueArray)=> {
    // success handler return a processPayement() promise
    return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
    // success handler should return a shipOrder promise
    return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});
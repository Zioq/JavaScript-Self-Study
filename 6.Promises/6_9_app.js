//require in three functions: checkInventory(), processPayment(), shipOrder(). These functions each return a promise.
const {checkInventory, processPayment, shipOrder} = require('./6_8_library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // success handler return a processPaymetn() promise
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // success handler should return a shipOrder() promise
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});

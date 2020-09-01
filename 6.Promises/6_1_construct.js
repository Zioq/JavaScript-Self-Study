/** [Constructing a Promise Object]
 *  To create a new Promise object, we use the new keyword and the Promise constructor method
 */

 const executorFunction = (resolve, reject) => {
     const myFirstPromise = new Promise(executorFunction);
 };
 // The `Promise` constructor method takes a funciton parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

 // The executor function has two function parameters, usually refeered to as the `resolve()` and `reject()` funcitons. The resolve() and reject() functions arent's defined by the programmer. 

 /**
  * 'resolve' is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
  * 
  * 'reject' is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().
  */

  const executorFunciton = (resolve,reject)  => {
    if(someCondition) {
        resolve("It resolved");
    } else {
        reject("It rejected");
    }
  };
  const myFirstPromise = new Promise(executorFunciton);

  // Create a promise representing ordering items from an Amazon.com
  const amazonInventory = {
      coffee: 100,
      sugar: 120,
      milk: 100
  };

  const myExecutor = (resolve,reject) => {
      if(amazonInventory.coffee > 0) {
          resolve('Coffee order processed.');
      } else {
          reject('That item is sold out.');
      }
  };
  // Create a funciton
  function orderItem() {
      return new Promise(myExecutor);
  }
  // Create a variable
  const orderPromise = orderItem();

  console.log(orderPromise);
  



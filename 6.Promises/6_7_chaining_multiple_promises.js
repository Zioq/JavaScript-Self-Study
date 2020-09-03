/** [Chaining Multiple Promises]
 * One common pattern we'll see with asynchronous progrmamming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make on erequests to a database and use the data returned to use to make another request and so on!
 * 
 * We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, then we can fold them and put them away.
 * 
 * This process of chaining promises together is called composition. Promises are designed with composition in mind!
 */

//Invoke a funciton firstPromiseFunction() which returns a promise 
// We invoke .then() with an anonymous funciton as the success handler
firstPromiseFunction().then((firstResolveVal) => {
    //Inside the success handler we `return` a new promise - the result of invoking a second function, `secondPromiseFunction()` with the first promise's resolved value
    return secondPromiseFunciton(firstResolveVal);
    // We invoke a second `.then()` to handle the logic for the second promise setting.
}).then((secondResolveVal) => {
    //Inside that .then(), we have a success handler which will log the second promise's resolved value to the console.
    console.log(secondResolveVal);
});
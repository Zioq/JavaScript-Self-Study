/** [The Node setTimeout() Funciton]
 *  Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promisese will key. Rather than constructing promises, you'll be handling `Promise` objects returned to you as the result of an asychronouse operation. 
 * 
 * providing funcitons that return promises which settle after some time. To accomplish thi, use `setTimeout()`. setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback funcitons to schedule tasks to be performed after a delay. setTimeout() has two parameters: a calback funciton and a delay in milliseconds. 
 */


 const delayHello = () => {
     console.log("This this is an asynchrnous greeting! ");
 };
 // Invoke setTimeout() with the callback function delayHello() and 2000. 
 setTimeout(delayHello,2000);
 //This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. Asynchronous JavaScript uses something called the event-loop. After two seconds, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before delayedHello() is actually executed.

 //Using setTimeout() to construct asynchronous promises
 const returnPromiseFunciton= () => {
     return new Promise(
         (resolve,reject) => {
             setTimeout(() => {
                 resolve('It resolved');
             });
         }
     );
 };
 const prom = returnPromiseFunciton();
 console.log(prom);

 console.log("This is a first log");
 function usingSTO() {
     console.log("This is second log");
 }
 setTimeout(usingSTO,4000);
 console.log("This is third log");
 
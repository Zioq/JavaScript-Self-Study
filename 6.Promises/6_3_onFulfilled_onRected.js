/**[The onFulfilled and onRejected Function]
 * To handle a 'sucessful' promise, or a promise that resolved, we invoke `.then()` on th promise, passing a sucess handler callback function
 */

 // We cna pass both an `onFulfilled` and `onRejected` callback to `.then()`

 // prom is a promise which will randomly either resolve with 'Yay' or reject with `Oh no!`
 let prom = new Promise((resolve, reject)=> {
     let num = Math.random();
     if(num < 0.5) {
         resolve("Yay!");
     } else {
         reject ("Oh no!");
     }
 });

 const handleSuccess = (resolvedValue) => {
     console.log(resolvedValue);
 };

 const handleFailure  = (rejectioReason) => {
     console.log(rejectioReason);
 };
 //Pass two handler function to .then(). The first will be invoke with `Yay!` if the promise resolves, and the second will be invoked with 'Oh no' if the promise rejects
 prom.then(handleSuccess,handleFailure);
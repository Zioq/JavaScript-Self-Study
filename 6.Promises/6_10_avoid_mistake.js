/** DO NOT EXECUTE THIS CODE. THIS CODE LINE IS ONLY FOR EXPALINING ONCEPTS
 * 
 */

/** [Avoiding Common Mistakes]
 * Promise compotision allows for much more readable code than the nested callback syntax that preceded it. However, it can still be easy to make mistakes. Here, I'll go over two common mistakes with pormise coposition
 * 
 */

 /** Mistake 1: Nesting promises instead of chaining them. 
  */
 returnsFirstPromise()
 .then((firstResolveVal) => {
     return returnsSecondValue(firstResolveVal)
     .then((secondResolveVal) => {
        console.log(secondResolveVal);
     });
 });
 /** [Diagnose first mistake]
  * Invoke returnsFirstPromise() which returns a promise.
  * We invoke .then() with a success handler.
  * Inside the success handler, we invoke returnSecondValue() with firstResolveVal which will return a new promise.
  * We invoke a second .then() to handle the logic for the second promise setting all `inside` the first then()!
  * Inside that second .then(), we have a success handler which will log the second promise's resolved value to the console. 
  
  Instead of having a clean chain of promises, we've nested the logic for one inside the logic of the other. Imagine if we were handling five ro then promises!
  */

  /** Mistake 2: Forgetting to return a promise.
   */
  returnFirstPromise()
  .then((firstResolveVal)=>{
      returnsSecondValue(firstResolveVal);
  })
  .then((someVal)=> {
      console.log(someVal);
  });
  /** [Diagnose second mistake]
   * We invoke returnsFirstPromise() which returns a promise
   * We invokde .then() with a success handler.
   * Inside the success handler, we create our second promise, but we forgot to return it. 
   * We invoke a second .then. It's supposed to handle the logic for the second promise, but since we didn't return, this .then() is invoded on a promise with the same settled value as the original promise!
   */
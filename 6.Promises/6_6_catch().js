/** [Using catch() with Promises]
 * One way to wrtie cleaner code is to follow a principle called `separation of concerns`. Separation of concerns means organizing code into dsitinct section each handling a specific task. It enable us to quickly navigate our code and know where to look if something isn't working. 
 * 
 * Remember, .then() will return a promise with the same setteld value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can cahin a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.
 */

    prom 
        .then((resolvedValue) => {
            console.log(resolvedValue);
        })
        .then(null, (rejectedValue) => {
            console.log(rejectedValue);
        });

    /**
     * Since JavaScript doesn't mind whitespace, we follow a common convention of puttin gehach part of this chain on a new line to make it easer to read. To create even more readable code, we can use a different promise funciton: catch()
     * 
     * The .catch() function takes only one arguement, `onRejected`. In the case of a rejected promise, this failure handle will be invoed with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler. 
     */
    prom
        .then((resolvedValue) => {
            console.log(resolvedValue);
        })
        // If the promise rejects, .then() will return a promise with the same rejection reasons as the original promise and .catch()'s failure handler will be invoed with that rejection reason.
        .catch((rejectionReason) => {
            console.log(rejectionReason);
        });

# JAVASCRIPT PROMISES

## What is a Promise?

Promises are ***objects*** that represent the eventual outcome of an asynchronous operation. A `Promise` object can be in one of three states:

* Pending: The initial state - the operation has not complete yet.

* Fulfilled: The operation has comleted successfully and the promise now has a resolved value. For example, a requeest's promise might resolve with a JSON object as its value.

* Rejected: The operation has filed and the promise has a reason for the failure. This reason is usally an `Error` of some kind.

We refer to a promise as ***settled*** if it is no longer pending-it is either fu lfileed or rejected. Let's think of a dishwasher as haivng the states of a promises:

* Pending: The dishwasher is running but has not completed the washing cycle.
* Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
* Rejected: The dishwasher encountered a problem (it didn't receive soap!) and returns unclean dishes.

If our dishwashing promise is fulfilled, we'll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it's rejected, we can take alternate steps, such as running it agian with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

## Consuming Promises

The initial state of an asynchronous promise is `pending`, but we have a garantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly named `.then()` method. It allows us to say "I have a promise, wehn it settles, **then** here's what I want to happen..."

In the case of our dishwasher promise, the dishwasher will run **then**:
* If our promise rejects, this means we have dirty dishes, and we’ll add soap and run the dishwasher again.
* If our promise fulfills, this means we have clean dishes, and we’ll put the dishes away.

`.then()` is a higher-order funciton -- it takes two callback funcitons as arguments. We refer to these callbacks as handlers. When the promise settles, the appropriate handler will bw invoked with that settled value. 
* The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving
* The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

We can invoke `.then()` with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. If the appropriate handler is not provided, instead of throwing an error, `.then()` will just return a promise with the same settled value as the promise it was called on. One important feature of `.then()` is that it always returns a promise. 
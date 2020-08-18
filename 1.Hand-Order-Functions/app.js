/* Function as Data
 In JavaScript we can assign funcitos to variables, and we can reassign them to a new varaible.
 */


 // Let's say we have a very long function name hard to use or remember
const announceBigNews = () => {
     console.log("This is Big News title!");
};

// We can re-assign the function to a vraible with a suitably short name
const title = announceBigNews;
title(); // A variable that hold `reference` to our roginal funciton. Variable `title` and the fucntion `announceBigNews` would point to the same memory address.

/* Function as Parameters
 A higher-order funciton is a function that either accpets functions as parameters, return a function, or both! 
 We call the funcitons that get passed in as parameters and invoked `callback functions` because they get called during the execution of the higher-order function.

 `Callback Funciton`: A function passed into another fuctnion as an arguement, which is then invoked inside the outer function to complete some kind of actions or tasks.
 */

 /* WHY SHOULD I USE HIGHER ORDER FUNCTIONS
 The higher order functions are easier to read and `DEBUG`.
  */

  // Without Higher-Order Funciton 
  const arr1 = [3,6,9];
  const arr2 = [];

  for (let i =0; i< arr1.length; i++) {
      arr2.push(arr1[i]*2);
  }
    //print [6,12,18]
  console.log(arr2);

  // With Higher-Order Funciton (Map)
  const arr3 = arr1.map(item => item *2);
  console.log(arr3);

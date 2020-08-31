/** [Arrow Functions]
 * ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:
 */

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};

/*
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
*/

const plantNeedsWater = (day) => {
    if(day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};

/** [Concise Body Arrow Functions]
 * JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:
 * 
 * 1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
 */

 //ZERO PARAMETERS
 const functionName = () => {};
 
 //ONE PARAMETER
 const functionName1 = paraOne => {};

 //TWO OR MORE PARAMETERS
 const functionName3 = (paraOne,paraTwo) => {};

 /**
  * 2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
  */

  //SINGLE-LINE BLOCK
  const sumNumbers = number => number + number;

  //MULTI-LINE BLOCK
  const sumNumbers1 = number => {
      const sum = number + number;
      return sum; // return statement
  };
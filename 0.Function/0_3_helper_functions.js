/** [Helper Functions]
 * Use the return value of a function inside another function. These functions being called within another function are often referred to as `helper functions`. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
 */

 //Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

function multiplyByNineFifths(number) {
    return number * (9/5);
}
  
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}
  
getFahrenheit(15); // Returns 59
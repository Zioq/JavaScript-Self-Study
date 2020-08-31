/**[Parameters and Arguments  & Default Parameters]
 *  When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.
 */

 // Function with parameters
 function caculateArea(width, height) {
    console.log(width * height);
 }
 
 // When calling a function that has parameters, we specify the values in the parentheses that follow the function name. 
 const width = 5;
 const height = 4;
 caculateArea(width,height);


 // [Default Parameters]
 //One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called
 //By using a default parameter, we account for situations when an argument isn’t passed into a function that is expecting an argument.

 function access(name = 'Admin') {
     console.log(`${name} access the system`);
 }
access(); // output: Admin access the system
access('User1'); // output: User1 access the system
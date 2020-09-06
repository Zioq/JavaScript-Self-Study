## Async Await

In web development, we need to handle asynchronous actions - actions we can wait on while moving on to other tasks. We can ask requests to networks, databses, or any number of similar operations. 

> JavaScript is non-blicking:
    Instead of stopping the execution of code while it waits, JavaScript uses an event-loop which allows it to efficiently execute other tasks while it awaits the completion of theses asy nchronous actions.
    
    * To understand the concept of  `event-loop`, please wathching this Youtube video.
    https://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be

Originally, JavaScript used callback functions to handle asynchronous actions. The problem with callbacks is that they encourage complexly nested code which quickly becomes difficult to read, debug, and scale. With ES6, JavaScript integrated native promises which allow us to write significantly more readable code.

JavaScript is continually improving, and ES8 provides a new syntax for handling our asynchronous action, `async...await`. The `async...await` syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

The `async...await` syntax is syntactic sugar— it doesn’t introduce new functionality into the language, but rather introduces a new syntax for using promises and generators. Both of these were already built in to the language. Despite this, async...await powerfully improves the readability and scalability of our code.

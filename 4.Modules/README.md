## JavaScript Modules

JavaScript ***modules*** are resuable pieces of code that can be exported from one program and imported for use in another program.

Modules are particulary useful for a number of reasons. 
- find, fix, and debug code more easily
- reuse and recycle defined logic in different parts of our application
- keep information private and protected from other modules;
- and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.

Mainly, in this tutorial material, I will cover two ways to implement moduels in JavaScript: 
Node.js's `module.exports` and `require()` syntax, 
ES6 `import/export` syntax. 

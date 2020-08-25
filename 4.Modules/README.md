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

> *Modules* in Noe.js are reusable pieces of code that cna be exported form on progrma and imported or use in another program.
- `module.exports` exports the module for use in another program.
- `require()` imports the moduel for use in the current program.

> ES6 introduced a more flexible, easier syntax to export modules:
- defualt exports use `export default` to export JavaScript objects, functions, and primitive data types.
- naemd exports use the `export` keyword to export data in variable.
- named exports can be aliased with the `as` keyword.
- `import` is a keyword that imports any object, function, or data type.
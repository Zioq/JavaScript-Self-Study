/** Class Consturctor
 * There are similiarities between class and object syntax, there is one important method that sets them apart. It's called the `constructor method`. JavaScript calls the `constructor()` method every time it creates a new `instance` of a class.
 */

 class Cat {
     constructor(name) {
         this.name = name;
         this.behavior = 0;
     }
 }
 // `Cat` is the name of our class. By convention, we capitalize and CamelCase class name.
 // JavaScripot will invoke the `constructor()` method every time we create a new instance of our `Cat` class 
 // This `constructor()` method accepts one arguements, `name`
 // Inside of the `constructor()` method, we use the `this` keyword. In the context of a class, `this` refers to an instance of taht class. In the `Cat` class, we use `this` to set the value of the Cat instance's `name` property to the `name` argument.
 // Under `this.name`, we create a property called `behavior`, which will keep track of the number of times a cat misbehavior. The `behavior` property is always initialized to zero.
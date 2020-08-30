/** [Mini Pojects; Meal Maker]
 *  As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat. j
 * 
 *  In this mini project, I used JavaSript to randomly create a three-course meal based on waht is availble on a menu. This will keep running it until user sttisfied with the generated meal!
 */

 // Create mune object
 const menu = {
     // Add a _courses property to object. This property will ultimatedly contain a mapping between each course and the dishes available to order in that course.
     _courses:{
        // Create three properties
        appetizers: [],
        mains: [],
        desserts: []
     },

     // Getter and Setter
     get appetizers() {
        return this._courses.appetizers;
     },
     get mains() {
         return this._courses.mains;
     },
     get desserts() {
         return this._courses.desserts;
     },

     set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
     },
     set mains(mains) {
        this._courses.mains = mains;
     },
     set desserts(desserts) {
        this._courses.desserts = desserts;
     },

     // getter for _courses property
     get course() {
         // return a object that contain key/value paris for `appetizers`, `mains`, and `desserts`
         return {
             appetizers: this.appetizers, // uses the appetizer getter method
             mains: this.mains, // uses the mains getter method
             desserts: this.desserts // uses the desserts getter method
         };
     },

     // Method
     addDishToCourse(courseName, dishName, dishPrice) {
         
        // create an object called dish which has a `name` and `price` which it gets from the parameters
        const dish = {
            name: dishName,
            price: dishPrice
        };
        // Push this `dish` object into the appropriate array in menu`s _course obejct based on what `courseName` was passed in.
        return this._courses[courseName].push(dish);
     },

    // Method allows us to get a random dish from a course on the menu
     getRandomeDishFromCourse(courseName) {
        //Retrieve the array of the given course's dishes from menu's `_courses`
        const dishes = this._courses[courseName];
        // Generate Randome number for index 
        const randomIndex = Math.floor(Math.random() * dishes.length);

        return dishes[randomIndex];
     },

     // Method which will automatically generates a three-course meal for user. 
     generateRandomMeal() {
         const appetizers = this.getRandomeDishFromCourse('appetizers');
         const mains = this.getRandomeDishFromCourse('mains');
         const desserts = this.getRandomeDishFromCourse('desserts');
         const totalPrice = appetizers.price + mains.price + desserts.price;
         return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name} and the total price is ${totalPrice}`;
     }
 };

 // Create Test data
 menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
 menu.addDishToCourse('appetizers', 'Wings', 5.00);
 menu.addDishToCourse('appetizers', 'Fries', 4.55);

 menu.addDishToCourse('mains', 'Steak', 10.25);
 menu.addDishToCourse('mains', 'Salmon', 12.55);
 menu.addDishToCourse('mains', 'Chicken', 11.00);

 menu.addDishToCourse('desserts', 'Ice Cream', 4.25);
 menu.addDishToCourse('desserts', 'Coffee', 4.25);
 menu.addDishToCourse('desserts', 'Cake', 4.25);

 // Test code
 const meal = menu.generateRandomMeal();
 console.log(meal); 
/** Build a Library Project
 * In this project we will create a parent class named `Media` with three subclasses: `Book`, `Movie` and `CD`
 */

 /** [Book]
  * Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
    Getters: all properties have a getter   
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
  */

  /** [Moive]
   * Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
   */
  /** [CD]
   * Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
   */


// Create Media class
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    //getter
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    
    //setter
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    //Mehtods
    //Return the average value of the `ratings` array
    getAverageRating() {
        //use the reduce method to find the sume of the ratings array. Divied this sum by length of the `ratings` array, and return the result.
        let ratingsSum = this._ratings.reduce((accumulator,rating)=> accumulator + rating,0);
        return ratingsSum / this._ratings.length;
    }
    // changes the value saved to the _isChekcedOut property.
    toggleCheckOutStatus() {
        //negate the value saved to a boolean.
        // using the getter 
        this.isCheckedOut = !this.isCheckedOut;
    }
    addRating(value) {
        // using a method instead of a setter because we are not assigning a value to the ratings property. We are just changing the value that's already stored at rating if we were assigning a new value that would be overwriting the entire array.
        this.ratings.push(value);
    }
}

// Build a Book class that extends Media
class Book extends Media {
    // Book Constructor
    constructor(author,title,pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    
    // getters
    // Becaues Book class inherits Media's properties and gettters, we only need to create two new getter.
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

// Build a Movie class that extends Media
class Movie extends Media {
    // Movie Constructor
    constructor(director,title,runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    // getter
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }

}

// Create a Book instance
const histroyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything",544);
console.log(histroyOfEverything);

// Call.toggleCheckOutStatus() on the historyOfEverything
histroyOfEverything.toggleCheckOutStatus();
// Log the isCheckedOut property (When you call the getter, not using a parentheses)
console.log(histroyOfEverything.isCheckedOut);

//Add the ratings
histroyOfEverything.addRating(4);
histroyOfEverything.addRating(5);
histroyOfEverything.addRating(4);

// Log the book's average ratings
console.log(histroyOfEverything.getAverageRating());


// Create a Movie instance
const speed = new Movie("Jan de Bont","Speed",116);
console.log(speed);

// Call the .toggleCheckOutStatus() on the speed instance
speed.toggleCheckOutStatus();
// Log the value saved to the isCheckedOut property
console.log(speed.isCheckedOut);
//Add the ratings
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
// Log the speed's average ratings
console.log(speed.getAverageRating());
/* ITERATORS
The built-in JavaScript array methods that help us iterate are called iteration methods, reffered as iterators
Iteratros are methods called on arrays to `MANIPULATE` elements and return value
 */

/**
 * .forEach() Method
 .foreEach() loops throught the array and exectues the callback function for each element. During each exectuion, the current elements is paased an argment to the callback function. 
 
 The return value for .forEach() will always be `undefined`
 */
 
 const movies_2020 = ['Bad Boys for Life', 'Sonic the Hedgehog', 'Birds of Prey', 'Dolittle'];
 // Iterate over movies below
 movies_2020.forEach(movie => {
     console.log( movie + " is released in 2020");
 });

/**
 * .map() Method
 When .map() is claled on an arry, it takes an arments of a callback function and returns a `NEW ARRAY`
 */
 const before_numbers = [1,2,3,4,5];
 const after_numbers = before_numbers.map(number => {
    return number * 100;
 });

 console.log(before_numbers);
 console.log(after_numbers);

 const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
 // Create the secretMessage array below
 const secretMessage = animals.map(animal => animal[0]);

 console.log(secretMessage.join(''));

 /**
  * .filter() Method
  .filter() returns an array of elements after `FILTERING` out certain elements from the original array.

  The callback function for the `.filter()` method should return `TRUE` or `FLASE` depending on the element that is passed to it.
  The elements that casue the callback function to return `TRUE` are added to the new array.
  */

  const words = ['Story', 'Telling', 'Your', 'Data'];
  const longWords = words.filter(word => {
      return word.length > 5;
  });
  console.log(longWords);

/**
 * .findIndex() Method
  .findIndex() on an array will return the index of the first element that evaluates to `TRUE` in the callback funciton.

  If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1 
 */
 const books = ['Pizza Girl', 'Must I Go', 'Boys of Alabama', 'They Wish They Were Us'];
 const foundBook = books.findIndex(book => {
     return book === "Boys of Alabama";
 });
 const startWithM = books.findIndex(book => {
     return book[0] === 'M';
 });

 console.log(foundBook);
 console.log(startWithM);

/**
 * .reduce() Method
 The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.  
 */
 const newNumbers = [1,3,5,7];

 const newSum = newNumbers.reduce((accumulator, currentValue) => {
     console.log('The value of accumulator: '+ accumulator);
     console.log('The value of currentValue: '+ currentValue);

     return accumulator + currentValue;
 });

 //The .reduce method can also take an optional second parameter to set an initial valule for `accumulator`(The First argument is the callback fucntion)
 const numbers =[1,2,4,10];

 const summedNums = numbers.reduce((accumulator,currentValue) => {
     return accumulator + currentValue;
 },100);
 console.log(summedNums);
 /**
  * Iteration#      `Accumulator`       `CurrentValue`      return value
  * First           100                  1                  101
  * Second          101                  2                  103
  * Third           103                  4                  107
  * Fourth          107                  10                 117
  */

  /**
   * .some() Method
    The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
   */
  const someWords = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
  console.log(words.some( word => {
    return word.length < 6;
  }));

  /**
   * .every()
   The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
   */
  console.log(someWords.every((word)=> word.length>5));

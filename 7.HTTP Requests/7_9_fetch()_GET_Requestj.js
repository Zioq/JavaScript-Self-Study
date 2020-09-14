/** fecth() GET Requests
 *  The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not. You can also optionally pass in an init options object as the second argument.
 * 
 *  Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled.
 * 
 *  You can create a request and response directly using the Request() and Response() constructors, but it's uncommon to do this directly. Instead, these are more likely to be created as results of other API actions (for example, FetchEvent.respondWith() from service workers).
 * 
 * The fetch() function:
 *  Creates a request object that contains relevant informtaion that an API needs
 * 
 *  Sends that request object to the API endpoint provided.
 * 
 *  Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back
 */

 // fetch GET
 fetch('http://api-to-call.com/endpoint') //sends request
  .then(response => { //converts response object to JSON
      if(response.ok) {
          return response.json();
      }
      throw new Error(`Request failed`); // handles errors
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => { // handles success
      //code to execute with jsonResponse
      return jsonResponse;
  });
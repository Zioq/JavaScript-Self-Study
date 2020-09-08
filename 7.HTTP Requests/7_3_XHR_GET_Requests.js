/** [XHR GET Requests I]
 *  Asychronous JavaScript and XML (AJAX), enables requests to be made after the initial page load. Initially, AJAX was used only for XML formmated data, now it can be used to make requests that have many diffenet formats.
 *  Similarly, the  XMLHttpRequest (XHR) API, named for XML, cna be used to make many kinds of requests and supports other format of data. 
 *  Remeber, we use `GET` to retrieve data from a source.
 */

 //XMLHttpRequest GET
 const xhr = new XMLHttpRequest(); // create new object
 const url = 'https://api-to-call.com/endpoint';

 // Handles response
 xhr.responseType = 'json'; // JSON is JavsSciprt Object Notation, which is how the response is going to be formatted.
 xhr.onreadystatechange = () => { 
     if(xhr.readyState === XMLHttpRequest.DONE) {
         // Code to execute with response
         return xhr.response;
     }
 };

 xhr.open('GET', url); // Open request
 xhr.send(); // Sends object

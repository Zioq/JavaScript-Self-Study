/** [HTTP Requests]
 *  One of JavaScript's greatest assets is its non-blocking properties, or that is in an asynchronous langague. 
 *  Websites, like newspaper websites, take advantage of these non-blocking properties to provide a better user experience. Generally, a site’s code is written so that users don’t have to wait for a giant image to load before being allowed to read the actual article—rather, that text is rendered `first` and then the image can load in the background.
 *  JavaScript uses an `event loop` to handle asynchronous function calls. When a program is run, function calls are made and added to a `stack`. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.
 *  Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We’ll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.
 */

 console.log(`This is a first message`);
 setTimeout(()=> {
    console.log(`This will be show up at last`);
 },1500);
 console.log(`This is second message`);
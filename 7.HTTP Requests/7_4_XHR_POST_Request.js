/** [XHR POST REQUEST]
 * The big difference between a `GET` and `POST` is that a 'POST' request needs additional information to be sent through the request. This additional informaiton is sent in the body of the post request.
 */

// XMLHttpRequest POST

const xhr = new XMLHttpRequest(); // creates new object
const url = 'http://api-to-call.com/end-point';
const data = JSON.stringify({id: '200'}); // converts data to a string

//handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        //code to execute with response
        return xhr.response;
        //The xhr.response property will contain the data that we're getting back from the POST request
    }
};

xhr.open('POST', url); //opens request
xhr.send(data); //sends object and pass data as an argument
/** [XHR GET Request 1]
 * How to wirte the bilerplate code for an AJAX request using an XHR object.
 * You will incorporate that boilerplate code to make a GET request to the Datamuse AIOP to search for words that rhyme!
 * Datamuse API Documentation: https://www.datamuse.com/api/
 */

//Information to reach API
const url = 'https://api.datamuse.com/words?'; // Using this URL to direct your request
const queryParams = 'rel_rhy='; // The start of a parameter for the query string. This parameter will narrow your search to words that rhyme.


// AJAX function
const getSuggestions = () => {
    // inputFiled.value grabs what is in t he inputField and assigns it to the variable
    const wordQuery = inputField.value;
    
    // store the value of the entire URL and query string.
    const endpoint = `${url} ${queryParams} ${wordQuery}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            //helper function can be viewed at helperFunction.js
            renderRawResponse(xhr.response);
        }
    };

    xhr.open('GET', endpoint);
    xhr.send();
};
/** [XHR GET Request 1]
 * How to wirte the bilerplate code for an AJAX request using an XHR object.
 * You will incorporate that boilerplate code to make a GET request to the Datamuse API to search for words that rhyme!
 * Datamuse API Documentation: https://www.datamuse.com/api/
 */

/** [A query string]
 * A query string is seperated from the URL using a `?` character. After ?, you can then create a parameter which is a key value paired joined by a `=`. Such as 'https://api.datamuse.com/words?key=value'
 * 
 *  For more detail about the query string, visit this website
 *  https://en.wikipedia.org/wiki/Query_string
 */

//Information to reach API
const url = 'https://api.datamuse.com/words?';// Using this URL to direct your request
const queryParams = 'rel_jjb='; // The start of a parameter for the query string. This parameter will narrow your search to words that rhyme.
const additionalParams = '&topics='; // For more specific results, create another parameter. (Reminder: the & character at the start of the string is used to seperate our parameter. The = character will join the key 'topic' to value.)


// Selecting page element
const wordField = document.getElementById("word");
const topicField = document.getElementById("topic");
const submit = document.getElementById("submit");
const responseField = document.getElementById("responseField");

// AJAX function
const getSuggestions = () => {
    // wordFiled.value grabs what is in t he inputField and assigns it to the variable
    const wordQuery = wordField.value;
    const topicQuery = topicField.value;
    
    // store the value of the entire URL and query string.
    const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        // helper functioon can be viewed at public/helperFunction.js
        renderResponse(xhr.response);
      }
    };

    xhr.open('GET', endpoint);
    xhr.send();
  
};

// Display result on webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
};
  
//The `submit` event fires when a <form> is submmited 
submit.addEventListener('click', displaySuggestions);
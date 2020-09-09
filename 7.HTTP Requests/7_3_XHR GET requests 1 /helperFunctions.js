/** 
 * Formats response to look presentable on webpage
 */
const renderResponse = (res) => {
    //Handles if res is false 
    if(!res) {
        console.log(res.status);
    }
    //In case res comes back as a blank array
    if(!res.length) {
        responseField.innerHTML = "<p> Try again! </p> <p> There were no suggestions found! </p>";
        return;
    }

    //Create an array to save the HTML strings
    let wordList = [];

    // Loop through the response and maxing out at 10
    for (let i =0; i < Math.min(res.lenght,10); i++) {
        // Creating a list of words
        wordList.push(`<li>${res[i].word}</li>`);
    }
    
    //Join the array of HTML strings into one string
    wordList = wordList.join("");

    //Manipulates responseFiled to render the modified response
    responseField.innerHTML =`<p>You might be interested in:</p><ol>${wordList}</ol>`;
    return;
};

//Renders response before it is modified 
const renderRawResponse = (res) => {
    //taking the first 10 words from res
    let trimmedResponse = res.slice(0,10);

    // manipulates responseFiled to render the unformmated response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
};

    
//Reders the JSON that was returned when the Promise from fecth resolves. 
const renderJsonResponse = (res) => {
    //Create an empty object to store the JSON in key-value fairs
    let rawJson = {};
    for (let key in response) {
            rawJson[key] = response[key];
    }

    // converting JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson).replace(/,/g, "\n");

    //Manipulates responseFiled to show the returned JSON
    responseField.innerHTML = `<pre>${rawJson}</pre>`;
};

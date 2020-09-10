/** In this demo code, we are usign this web API
 * https://reqres.in/
 */
const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');


const sendHttpRequest = (method, url, data) => {

    const promise = new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
    
        //parses a JSON string, constructing the JavaScript value or object described by the string
        xhr.responseType = 'json';
    
        //Add extra headers. The API basically fails to parse incoming request because we are not telling pending JSON data. Before send request, we can add header by this code
        if (data) {
            xhr.setRequestHeader('Content-Type', 'application/json'); // which signal we are pending JSON sending data
        }
        
        //trigger when we get a response
        xhr.onload = () => {
            if(xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        // data error handler
        xhr.onerror = () => {
            reject('Something wnet wrong!');
        };

        //send JavaScript data to Json data
        xhr.send(JSON.stringify(data));
    });
    
    return promise;
};

const getData = () => {
    sendHttpRequest('GET','https://reqres.in/api/users').then(responseData => {
        console.log(responseData);
    });
};

const sendData = () => {
     sendHttpRequest('POST', 'https://reqres.in/api/register',{
         //pass some data 
         email: 'eve.holt@reqres.in',
         //password: 'pistol'
     }).then(responseData => {
         console.log(responseData);
     }).catch(err => {
         console.log(err);
     });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);

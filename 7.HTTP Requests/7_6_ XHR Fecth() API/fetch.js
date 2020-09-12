/** [Fetch API]
 *  Nicher than XMLHttpRequest and has a nicer syntax which use less clunky. Howerver browser support is worse (An Internet Explorer does not suuport Fetch()) which is means you might need a polyfill. Furthermore, the error handling logic is a little bit annoying which is inner wrapped promise chain
 */

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
    // global variable fetch() which has a default 'GET' request without configuration. Also, fetch by default uses promises so we can just add .then()) method.
    return fetch(url, {
        // Do utilize the method and data (tweak the request) which is an object that allows to configure the outgoing request so able to dynamically set the request
        method: method,
        // body to attach a body to the outgoing request. It should be JSON data and therfore all json stringify the data package.
        body: JSON.stringify(data),
        // content-type header
        headers: data ?  {'Content-type':'application/json'} : {}
    }).then(response => {
        // `status` property which can check status
        if(response.status >= 400) { //!response.ok
            return response.json().then(errResData => {
                const error = new Error('Something went wrong!');
                error.data = errResData;
                // throw an error. This will effectively reject the outer promise so that in the promise chain were we listen to the outer promise we would make it into catch block.
                throw error;
            });
        }
        //Call the response object with json. IF the response body should be json data which it should be for this dummy api then this will convernt to streamed body into snapshot of data and automatically parse JSON data to native javascript data types
        return response.json();
    });
};


const getData = () => {
    sendHttpRequest('GET', 'https://reqres.in/api/users')
        .then(responseData => {
            console.log(responseData);
        });
};

const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        //password: 'pistol'
    }).then(responseData => {
        console.log(responseData);
    }).catch(err => {
        console.log(err, err.data);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
 